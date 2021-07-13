const db = require("nedb");
// const mqtt = require("mqtt");
const fun = require("../utils/functions");

const database = new db("proyektil.db");
database.loadDatabase();

var conn = false;

/* const client = mqtt.connect("mqtt://127.0.0.1");
client.on("connect", function () {
  conn = true;
});

client.on("disconnect", (err) => {
  conn = false;
});

client.on("offline", (err) => {
  conn = false;
});

client.on("error", (err) => {
  conn = false;
}); */

exports.postData = (req, res, next) => {
  const radius = req.body.radius;
  const mass = req.body.mass;
  const v0 = req.body.v0;

  const result = {
    timestamp: fun.time(),
    _id: 1,
    radius: radius,
    mass: mass,
    v0: v0,
  };

  /* console.log(result);
  conn
    ? client.publish(
        "pconf",
        JSON.stringify({
          stat: "add",
          id: result._id,
          port: result.port,
          baudrate: result.baudrate,
        })
      )
    : (result = result); */
  database.insert(result);

  res.status(201).json(result);
  next();
};

// darvm6u0whxwmpc7
exports.getData = (req, res, next) => {
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
};

exports.patchData = (req, res, next) => {
  database.update(
    { _id: 1 },
    { $set: {
      timestamp: fun.time(),
      radius: req.body.radius,
      mass: req.body.mass,
      v0: req.body.v0,
    } },
    {},
    (err, replaced) => {
      if (err) {
        const error = {
          errMessage: err,
        };
        res.json(error);
        return;
      }
      /* conn
        ? client.publish(
            "pconf",
            JSON.stringify({
              stat: "mod",
              id: req.query.id,
              port: req.body.port,
            })
          )
        : (replaced = replaced); */
      res.status(200).send("");
      next();
    }
  );
};
