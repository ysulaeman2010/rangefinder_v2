const db = require("nedb");
// const mqtt = require("mqtt");
const { customAlphabet } = require("nanoid");
const fun = require("../utils/functions");

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 16);

const database = new db("database.db");
database.loadDatabase();

var conn = false;
var change = false;

const client = mqtt.connect("mqtt://127.0.0.1:1883");
client.on("connect", function () {
  conn = true;
});

client.on("disconnect", (err) => {
  conn = false;
});

client.on("reconnect", (err) => {
  conn = true;
  if (change) {
    client.publish("pconf", change.toString());
    change = false;
  }
});

client.on("offline", (err) => {
  conn = false;
});

client.on("error", (err) => {
  conn = false;
});

exports.postData = (req, res, next) => {
  const name = req.body.name;
  const port = req.body.port;
  const baudrate = req.body.baudrate;

  const result = {
    timestamp: fun.time(),
    _id: nanoid(),
    name: name,
    port: port,
    baudrate: baudrate,
  };

  // console.log(result);
  database.insert(result);

  change = true;

  if (conn) {
    client.publish("pconf", "1");
    change = false;
  }

  res.status(201).json(result);
  next();
};

// darvm6u0whxwmpc7
exports.getData = (req, res, next) => {
  if (req.query.id) {
    database.find({ _id: req.params.id }, (err, data) => {
      if (err) {
        const error = {
          errMessage: err,
        };
        res.json(error);
        return;
      }
      res.status(200).json(data);
      next();
    });
  } else {
    database.find({}, (err, data) => {
      if (err) {
        const error = {
          errMessage: err,
        };
        res.json(error);
        return;
      }
      res.status(200).json(data);
      next();
    });
  }
};

exports.patchData = (req, res, next) => {
  if (req.query.id) {
    if (req.body.port) {
      database.update(
        { _id: req.query.id },
        { $set: { port: req.body.port } },
        {},
        (err, replaced) => {
          if (err) {
            const error = {
              errMessage: err,
            };
            res.json(error);
            return;
          }
          change = true;
          if (conn) {
            client.publish("pconf", "1");
            change = false;
          }
          res.status(200).send("");
          next();
        }
      );
    } else if (req.body.baudrate) {
      database.update(
        { _id: req.query.id },
        { $set: { baudrate: req.body.baudrate } },
        {},
        (err, replaced) => {
          if (err) {
            const error = {
              errMessage: err,
            };
            res.json(error);
            return;
          }
          change = true;
          if (conn) {
            client.publish("pconf", "1");
            change = false;
          }
          res.status(200).send("");
          next();
        }
      );
    } else if (req.body.port && req.body.baudrate) {
      database.update(
        { _id: req.query.id },
        { $set: { port: req.body.port, baudrate: req.body.baudrate } },
        {},
        (err, replaced) => {
          if (err) {
            const error = {
              errMessage: err,
            };
            res.json(error);
            return;
          }
          change = true;
          if (conn) {
            client.publish("pconf", "1");
            change = false;
          }
          res.status(200).send(replaced);
          next();
        }
      );
    } else {
      res.status(200);
      next();
    }
  } else {
    res.status(400);
    next();
  }
};

exports.deleteData = (req, res, next) => {
  if (req.query.id) {
    database.remove({ _id: req.query.id }, {}, function (err, removed) {
      // numRemoved = 1
      if (err) {
        const error = {
          errMessage: err,
        };
        res.json(error);

        return;
      }
      change = true;
      if (conn) {
        client.publish("pconf", "1");
        change = false;
      }
      res.status(200).send("");
      next();
    });
  } else {
    res.status(400);
    next();
  }
};
