exports.config = (request, response, next) => {
  const time = request.body.timestamp;
  const id = request.body.idpengamat;
  const port = request.body.port;
  const baudrate = request.body.baudrate;

  const result = {
    message: "configure data success",
    data: {
      timestamp: time,
      idpengamat: id,
      port: port,
      baudrate: baudrate,
    },
  };

  response.status(201).json(result);
  next();
};
