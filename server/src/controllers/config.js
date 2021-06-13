exports.config = (request, response, next) => {
  const id = request.body.id;
  const port = request.body.port;
  const baudrate = request.body.baudrate;

  const result = {
    message: "configure data success",
    data: {
      id: id,
      port: port,
      baudrate: baudrate,
    },
  };

  console.log(result);

  response.status(201).json(result);
  next();
};
