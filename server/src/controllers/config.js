const db = require("nedb");
const fun = require("../utils/functions");

const database = new db("database.db");
database.loadDatabase();

exports.postData = (req, res, next) => {
  const id = req.body.id;
  const port = req.body.port;
  const baudrate = req.body.baudrate;

  const result = {
    timestamp: fun.time(),
    id: id,
    port: port,
    baudrate: baudrate,
  };

  console.log(result);
  database.insert(result);

  res.status(201).json(result);
  next();
};

exports.getData = (req, res, next) => {
  database.find({}, (err, data) => {
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
