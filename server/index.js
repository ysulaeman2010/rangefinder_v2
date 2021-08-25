const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const serveStatic = require("serve-static");
const mqtt = require("mqtt");
const axios = require("axios");
const path = require("path");

const configRoutes = require("./src/routes/config");
const proyektilRoutes = require("./src/routes/proyektil");
const fun = require("./src/utils/functions");

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
app.use("/v2/", proyektilRoutes);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

var pengamats = [];
var dummies = [];

const mqttClient = mqtt.connect("mqtt://127.0.0.1:1883");

mqttClient.on("connect", function () {
  mqttClient.subscribe("pconf");
});

mqttClient.on("message", function (topic, message) {
  try {
    console.log(`Receive ${message} from ${topic}`)
    if (message.toString() === "1") {
      axios.get("http://localhost:3001/v2/config/get")
      .then(res => {
        pengamats = res.data;
        console.log(pengamats);
      })
      .catch(error => console.error(error))
    }
  } catch (err) {
    console.error(err);
  }
});

io.on("connection", async (socket) => {
  try {
    console.log(`A new client connected with id ${socket.id}`);

    var tempP = await axios.get("http://localhost:3001/v2/config/get");
    pengamats = tempP.data;
    // console.log(pengamats);

    // handle the event sent with socket.send()
    socket.on("p", (data) => {
      // console.log(data);

      // dummy data p
      var nomor = pengamats.findIndex((p) => p._id === data.id);
      if (nomor + 1 === 1) {
        // console.log("p1");
        fun.sendData_p1(socket, data);
      } else if (nomor + 1 === 2) {
        // console.log("p2");
        fun.sendData_p2(socket, data);
      } else if (nomor + 1 === 3) {
        // console.log("p3");
        fun.sendData_p3(socket, data);
      } else if (nomor + 1 === 4) {
        // console.log("p4");
        fun.sendData_p4(socket, data);
      }
    });

    // handle the event sent with socket.send()
    socket.on("d", (data) => {
      // console.log(data);

      // dummy data d
      fun.sendData_d1(socket, data);
      fun.sendData_d2(socket, data);
      fun.sendData_d3(socket, data);
      fun.sendData_d4(socket, data);
    });

    // handle the event sent with socket.send()
    socket.on("c1", (data) => {
      // console.log(data);

      // dummy data c1
      fun.sendData_c1(socket, data);
    });

    fun.sendData_c2(socket);

    socket.on("c3", (data) => {
      // console.log(data);

      // dummy data c1
      fun.sendData_c3(socket, data);
    });

    fun.sendData_c4(socket);

    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnected`);
      console.log("--------------");
    });
  } catch (err) {
    console.error(err);
  }
});
