import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConfigure, getConfigure } from "../data";
import "../css/Config.css";

const Config = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [port, setPort] = useState("");
  const [baudrate, setBaudrate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data_config = {
      id: id,
      port: port,
      baudrate: baudrate,
    };

    dispatch(setConfigure(data_config));
    console.log(data.post_feedback);
    setId("");
    setPort("");
    setBaudrate("");
  };

  useEffect(() => {
    dispatch(getConfigure());
  });

  return (
    <div className="config">
      <div className="config__container">
        <div className="config__content">
          <div className="config__header">
            <label>Observer Configuration</label>
          </div>
          <div className="config__group">
            <label>ID Pengamat</label>
            <input
              type="text"
              name="id"
              onChange={(e) => setId(e.target.value)}
              value={id}
              placeholder="Masukkan ID Pengamat"
              require
            />
          </div>
          <div className="config__group">
            <label>Port</label>
            <input
              type="text"
              name="port"
              onChange={(e) => setPort(e.target.value)}
              value={port}
              placeholder="Masukkan PORT yang digunakan"
              require
            />
          </div>
          <div className="config__group">
            <label>Baudrate</label>
            <input
              type="text"
              name="port"
              onChange={(e) => setBaudrate(e.target.value)}
              value={baudrate}
              placeholder="Masukkan BAUDRATE yang digunakan"
              require
            />
          </div>
          <div className="config__footer">
            <button onClick={submitHandler}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
