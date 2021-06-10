import React from "react";
import "../css/Map.css";

import { useSelector } from "react-redux";

const Map = () => {
  const data = useSelector((state) => state);
  console.log("Incoming data in map.js ", data.data);
  return (
    <div>
      <h1>Map</h1>
    </div>
  );
};

export default Map;
