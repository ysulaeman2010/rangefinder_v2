import React from "react";
import "../css/Map.css";

import { useSelector } from "react-redux";

const Map = () => {
  const data = useSelector((state) => state);

  return (
    <div>
      <h1>Map</h1>
      <hr />
      <h2>d_1</h2>
      <p>
        <strong>Timestamp</strong> {data.d_1.timestamp}{" "}
        <strong>Latitude</strong> {data.d_1.lat_rf1} <strong>Longitude</strong>{" "}
        {data.d_1.lng_rf1}{" "}
      </p>
      <h2>d_2</h2>
      <p>
        <strong>Timestamp</strong> {data.d_2.timestamp}{" "}
        <strong>Latitude</strong> {data.d_2.lat_rf2} <strong>Longitude</strong>{" "}
        {data.d_2.lng_rf2}{" "}
      </p>
      <h2>d_3</h2>
      <p>
        <strong>Timestamp</strong> {data.d_3.timestamp}{" "}
        <strong>Latitude</strong> {data.d_3.lat_rf3} <strong>Longitude</strong>{" "}
        {data.d_3.lng_rf3}{" "}
      </p>
      <h2>d_4</h2>
      <p>
        <strong>Timestamp</strong> {data.d_4.timestamp}{" "}
        <strong>Latitude</strong> {data.d_4.lat_rf4} <strong>Longitude</strong>{" "}
        {data.d_4.lng_rf4}{" "}
      </p>
    </div>
  );
};

export default Map;
