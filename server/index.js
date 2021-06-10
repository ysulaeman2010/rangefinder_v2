const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const serveStatic = require("serve-static");
const path = require("path");

const configRoutes = require("./src/routes/config");
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

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

io.on("connection", (socket) => {
  console.log(`A new client connected with id ${socket.id}`);

  // dummy data d
  fun.sendData_d1(socket);
  fun.sendData_d2(socket);
  fun.sendData_d3(socket);
  fun.sendData_d4(socket);

  // dummy data p
  fun.sendData_p1(socket);
  fun.sendData_p2(socket);
  fun.sendData_p3(socket);
  fun.sendData_p4(socket);

  // dummy data c
  fun.sendData_c1(socket);
  fun.sendData_c2(socket);
  fun.sendData_c3(socket);
  fun.sendData_c4(socket);

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
    console.log("--------------");
  });
});
