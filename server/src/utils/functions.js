const randomLocation = require("random-location");
const geolib = require("geolib");
const random = require("random");
const os = require("os-utils");

const centrePoint = {
  latitude: -6.9108191,
  longitude: 107.7583738,
};

//d function

const sendData_d1 = (socket) => {
  const current = new Date();
  const time_rf1 = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf1 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    time_rf1: time_rf1,
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
  const time_rf2 = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf2 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    time_rf2: time_rf2,
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
  const time_rf3 = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf3 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    time_rf3: time_rf3,
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
  const time_rf4 = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loc_rf4 = randomLocation.randomCirclePoint(centrePoint, 1500);

  const data = {
    time_rf4: time_rf4,
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
  const loc_p1 = randomLocation.randomCirclePoint(centrePoint, 1500);
  const target = randomLocation.randomCirclePoint(centrePoint, 500);

  const dist_p1 = geolib.getDistance(loc_p1, target);
  const compass_p1 = geolib.getGreatCircleBearing(loc_p1, target);
  const d_alti_p1 = random.float(0, 100);
  const alti_p1 = random.float(0, 8000);
  const humid_p1 = random.float(90, 100);
  const temp_p1 = random.float(20, 40);
  const press_p1 = random.float(0, 1);

  const data = {
    lat_p1: loc_p1["latitude"],
    lng_p1: loc_p1["longitude"],
    dist_p1: dist_p1,
    compass_p1: compass_p1,
    d_alti_p1: d_alti_p1.toFixed(2),
    alti_p1: alti_p1.toFixed(2),
    humid_p1: humid_p1.toFixed(2),
    temp_p1: temp_p1.toFixed(2),
    press_p1: press_p1.toFixed(2),
  };

  socket.emit("p_1", data);

  setTimeout(() => {
    sendData_p1(socket);
  }, 5000);
};

const sendData_p2 = (socket) => {
  const loc_p2 = randomLocation.randomCirclePoint(centrePoint, 1500);
  const target = randomLocation.randomCirclePoint(centrePoint, 500);

  const dist_p2 = geolib.getDistance(loc_p2, target);
  const compass_p2 = geolib.getGreatCircleBearing(loc_p2, target);
  const d_alti_p2 = random.float(0, 100);
  const alti_p2 = random.float(0, 8000);
  const humid_p2 = random.float(90, 100);
  const temp_p2 = random.float(20, 40);
  const press_p2 = random.float(0, 1);

  const data = {
    lat_p2: loc_p2["latitude"],
    lng_p2: loc_p2["longitude"],
    dist_p2: dist_p2,
    compass_p2: compass_p2,
    d_alti_p2: d_alti_p2.toFixed(2),
    alti_p2: alti_p2.toFixed(2),
    humid_p2: humid_p2.toFixed(2),
    temp_p2: temp_p2.toFixed(2),
    press_p2: press_p2.toFixed(2),
  };

  socket.emit("p_2", data);

  setTimeout(() => {
    sendData_p2(socket);
  }, 5000);
};

const sendData_p3 = (socket) => {
  const loc_p3 = randomLocation.randomCirclePoint(centrePoint, 1500);
  const target = randomLocation.randomCirclePoint(centrePoint, 500);

  const dist_p3 = geolib.getDistance(loc_p3, target);
  const compass_p3 = geolib.getGreatCircleBearing(loc_p3, target);
  const d_alti_p3 = random.float(0, 100);
  const alti_p3 = random.float(0, 8000);
  const humid_p3 = random.float(90, 100);
  const temp_p3 = random.float(20, 40);
  const press_p3 = random.float(0, 1);

  const data = {
    lat_p3: loc_p3["latitude"],
    lng_p3: loc_p3["longitude"],
    dist_p3: dist_p3,
    compass_p3: compass_p3,
    d_alti_p3: d_alti_p3.toFixed(2),
    alti_p3: alti_p3.toFixed(2),
    humid_p3: humid_p3.toFixed(2),
    temp_p3: temp_p3.toFixed(2),
    press_p3: press_p3.toFixed(2),
  };

  socket.emit("p_3", data);

  setTimeout(() => {
    sendData_p3(socket);
  }, 5000);
};

const sendData_p4 = (socket) => {
  const loc_p4 = randomLocation.randomCirclePoint(centrePoint, 1500);
  const target = randomLocation.randomCirclePoint(centrePoint, 500);

  const dist_p4 = geolib.getDistance(loc_p4, target);
  const compass_p4 = geolib.getGreatCircleBearing(loc_p4, target);
  const d_alti_p4 = random.float(0, 100);
  const alti_p4 = random.float(0, 8000);
  const humid_p4 = random.float(90, 100);
  const temp_p4 = random.float(20, 40);
  const press_p4 = random.float(0, 1);

  const data = {
    lat_p4: loc_p4["latitude"],
    lng_p4: loc_p4["longitude"],
    dist_p4: dist_p4,
    compass_p4: compass_p4,
    d_alti_p4: d_alti_p4.toFixed(2),
    alti_p4: alti_p4.toFixed(2),
    humid_p4: humid_p4.toFixed(2),
    temp_p4: temp_p4.toFixed(2),
    press_p4: press_p4.toFixed(2),
  };

  socket.emit("p_4", data);

  setTimeout(() => {
    sendData_p4(socket);
  }, 5000);
};

//c function

const sendData_c1 = (socket) => {
  const wind_speed_c1 = random.float(0, 100);
  const wind_dir_c1 = random.float(0, 100);
  const temp_c1 = random.float(20, 40);
  const humid_c1 = random.float(90, 100);
  const press_c1 = random.float(0, 1);

  data = {
    wind_speed_c1: wind_speed_c1.toFixed(2),
    wind_dir_c1: wind_dir_c1.toFixed(2),
    temp_c1: temp_c1.toFixed(2),
    humid_c1: humid_c1.toFixed(2),
    press_c1: press_c1.toFixed(2),
  };
  socket.emit("c_1", data);

  setTimeout(() => {
    sendData_c1(socket);
  }, 5000);
};

const sendData_c2 = (socket) => {
  const memory = os.freemem() / 1024;

  os.cpuUsage(function (cpu_usage) {
    data = {
      cpu_usage: cpu_usage * 100,
      memory: memory,
    };

    socket.emit("c_2", data);
  });

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
  socket.emit("c_4", "sending data c_4");

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
