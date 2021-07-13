const db = require("nedb");
const fun = require("./src/utils/functions");

const database = new db("proyektil.db");
database.loadDatabase();

const radius = 0.105;
const mass = 14.94;
const v0 = 683;

const result = {
  timestamp: fun.time(),
  _id: 1,
  radius: radius,
  mass: mass,
  v0: v0,
};

database.insert(result);
