import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const PORT = 3001;
const socket = io(`http://localhost:${PORT}`);

function App() {
  const [data, setData] = useState({});
  const [arrData, setArrData] = useState([]);

  useEffect(() => {
    socket.on("connection");
    socket.on("data", (res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    setArrData([...arrData, data]);
  }, [data]);

  console.log(data);

  return (
    <div>
      <h1>Data App</h1>
      <hr />
      {arrData.map((item) => (
        <p>
          {item.timestamp} {item.lat_rf1} {item.lng_rf1}
        </p>
      ))}
    </div>
  );
}

export default App;
