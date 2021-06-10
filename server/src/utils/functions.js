const randomLocation = require("random-location");
const geolib = require("geolib");
const random = require("random");

const centrePoint = {
  latitude: -6.9108191,
  longitude: 107.7583738,
};

//d function

const sendData_d1 = (socket) => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf1 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    timestamp: time,
    lat_rf1: loc_rf1["latitude"],
    lng_rf1: loc_rf1["longitude"],
  };

  socket.emit("d_1", data);

  setTimeout(() => {
    sendData_d1(socket);
  }, 5000);
};

const sendData_d2 = (socket) => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf2 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    timestamp: time,
    lat_rf2: loc_rf2["latitude"],
    lng_rf2: loc_rf2["longitude"],
  };

  socket.emit("d_2", data);

  setTimeout(() => {
    sendData_d2(socket);
  }, 5000);
};

const sendData_d3 = (socket) => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf3 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    timestamp: time,
    lat_rf3: loc_rf3["latitude"],
    lng_rf3: loc_rf3["longitude"],
  };

  socket.emit("d_3", data);

  setTimeout(() => {
    sendData_d3(socket);
  }, 5000);
};

const sendData_d4 = (socket) => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf4 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    timestamp: time,
    lat_rf4: loc_rf4["latitude"],
    lng_rf4: loc_rf4["longitude"],
  };

  socket.emit("d_4", data);

  setTimeout(() => {
    sendData_d4(socket);
  }, 5000);
};

//p function

const sendData_p1 = (socket) => {
  socket.emit("p_1", "sending data p_1");

  setTimeout(() => {
    sendData_p1(socket);
  }, 5000);
};

const sendData_p2 = (socket) => {
  socket.emit("p_2", "sending data p_2");

  setTimeout(() => {
    sendData_p2(socket);
  }, 5000);
};

const sendData_p3 = (socket) => {
  socket.emit("p_3", "sending data p_3");

  setTimeout(() => {
    sendData_p3(socket);
  }, 5000);
};

const sendData_p4 = (socket) => {
  socket.emit("p_1", "sending data p_4");

  setTimeout(() => {
    sendData_p4(socket);
  }, 5000);
};

//c function

const sendData_c1 = (socket) => {
  socket.on("c1", function (data) {
    // console.log(data);
    socket.broadcast.emit("c_1", data);
    // console.log("Sent to view");
  })

  setTimeout(() => {
    sendData_c1(socket);
  }, 5000);
};

const sendData_c2 = (socket) => {
  socket.emit("c_2", "sending data c_2");

  setTimeout(() => {
    sendData_c2(socket);
  }, 5000);
};

const sendData_c3 = (socket) => {
  socket.emit("c_3", "sending data c_3");

  setTimeout(() => {
    sendData_c3(socket);
  }, 5000);
};

const sendData_c4 = (socket) => {
  socket.emit("c_1", "sending data c_4");

  setTimeout(() => {
    sendData_c4(socket);
  }, 5000);
};

module.exports = {
  sendData_d1,
  sendData_d2,
  sendData_d3,
  sendData_d4,
  sendData_p1,
  sendData_p2,
  sendData_p3,
  sendData_p4,
  sendData_c1,
  sendData_c2,
  sendData_c3,
  sendData_c4,
};
