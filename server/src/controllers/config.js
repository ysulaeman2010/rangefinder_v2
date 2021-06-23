const db = require("nedb");
const { customAlphabet } = require("nanoid");
const fun = require("../utils/functions");
const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 16);

const database = new db("database.db");
database.loadDatabase();

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

  try {
    database.insert(result);
    console.log("data inserted");
  } catch {
    console.log("data not inserted");
  }

  res.status(201).json(result);
  next();
};
// darvm6u0whxwmpc7
exports.getData = (req, res, next) => {
  database.find({}, (err, data) => {
    /* database.find({ _id: req.params.id }, (err, data) => { */
    if (err) {
      const error = {
        errMessage: err,
      };
      res.json(error);
      return;
    }
    res.status(201).json(data);
    next();
  });
};

exports.getDataById = (req, res, next) => {
  database.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      const error = {
        errMessage: err,
      };
      res.json(error);
      return;
    }
    res.status(201).json(data);
    next();
  });
};
