import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const PORT = 3001;
const socket = io(`http://localhost:${PORT}`);

function App() {
  const [data, setData] = useState({});
  const [arrData, setArrData] = useState([]);

  useEffect(() => {
    socket.on("data", (res) => {
      setData(res);
    });
    socket.emit("message", "data received");

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    setArrData([...arrData, data]);
  }, [data]);

  return (
    <div>
      <h1>Data App</h1>
      <h2>Rf 1</h2>
      <p>
        <strong>Timestamp</strong> <span>{data.timestamp}</span> {""}
        <strong>Latitude</strong> <span>{data.lat_rf1}</span> {""}
        <strong>Longitude</strong> <span>{data.lng_rf1}</span>
      </p>
      <h2>Rf 2</h2>
      <p>
        <strong>Timestamp</strong> <span>{data.timestamp}</span> {""}
        <strong>Latitude</strong> <span>{data.lat_rf2}</span> {""}
        <strong>Longitude</strong> <span>{data.lng_rf2}</span>
      </p>
      <hr />
      <div style={{ overflow: "auto", height: "80vh" }}>
        {arrData.map((item) => (
          <div>
            <p key={Math.random()}>
              {item.timestamp} {item.lat_rf1} {item.lng_rf1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
