import React from "react";
import { useSelector } from "react-redux";

import "../css/Footer.css";

const Footer = () => {
  const data = useSelector((state) => state);
  return (
    <div className="footer">
      <div className="left__footer">
        Created by <strong>Arkandina</strong>
      </div>
      <div className="right__footer">
        <strong>Status:</strong>{" "}
        {data.status === true ? (
          <label>Connected</label>
        ) : (
          <label>Disconnected</label>
        )}
        <span className="break__line" />
        <strong>CPU Usage:</strong>{" "}
        {data.c_2.cpu_usage > 0 ? <>{data.c_2.cpu_usage}</> : 0}%
        <span className="break__line" />
        <strong>Free Memory:</strong>{" "}
        {data.c_2.memory > 0 ? <>{data.c_2.memory}</> : 0} GB
      </div>
    </div>
  );
};

export default Footer;
