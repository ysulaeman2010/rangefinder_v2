const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const serveStatic = require("serve-static");
const path = require("path");

const randomLocation = require("random-location");
const geolib = require("geolib");
const random = require("random");

const configRoutes = require("./src/routes/config");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  "/",
  serveStatic(path.resolve(__dirname, "public"), { index: ["index.html"] })
);

app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/v2/", configRoutes);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

io.on("connection", (socket) => {
  console.log(`A new client connected with id ${socket.id}`);
  sendData(socket);
});

const centrePoint = {
  latitude: -6.9108191,
  longitude: 107.7583738,
};

const sendData = (socket) => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf1 = randomLocation.randomCirclePoint(centrePoint, 1500);
  const loc_rf2 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const target1 = randomLocation.randomCirclePoint(centrePoint, 500);
  const target2 = randomLocation.randomCirclePoint(centrePoint, 500);

  const dist_rf1 = geolib.getDistance(loc_rf1, target1);
  const dist_rf2 = geolib.getDistance(loc_rf2, target2);

  const compass_rf1 = geolib.getGreatCircleBearing(loc_rf1, target1);
  const compass_rf2 = geolib.getGreatCircleBearing(loc_rf2, target2);

  const temp = random.int(20, 40);
  const humid = random.int(90, 100);

  const data = {
    timestamp: time,
    lat_rf1: loc_rf1["latitude"],
    lng_rf1: loc_rf1["longitude"],
    dist_rf1: dist_rf1,
    compass_rf1: compass_rf1,
    temp_rf1: temp,
    humid_rf1: humid,
    lat_rf2: loc_rf2["latitude"],
    lng_rf2: loc_rf2["longitude"],
    dist_rf2: dist_rf2,
    compass_rf2: compass_rf2,
    temp_rf2: temp,
    humid_rf2: humid,
  };

  socket.emit("data", data);

  setTimeout(() => {
    sendData(socket);
  }, 5000);
};
