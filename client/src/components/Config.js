import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConfigure } from "../data";

import "../css/Config.css";

const Config = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [port, setPort] = useState("");
  const [baudrate, setBaudrate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data_config = {
      name: name,
      port: port,
      baudrate: baudrate,
    };

    console.log(port);

    dispatch(setConfigure(data_config));
  };

  const defaultPort = [
    "/dev/ttyUSB0",
    "/dev/ttyUSB1",
    "/dev/ttyUSB2",
    "/dev/ttyUSB3",
  ];

  return (
    <div className="config">
      <div className="config__container">
        <div className="config__content">
          <div className="config__header">
            <label>Observer Configuration</label>
          </div>
          <div className="config__group">
            <label>Nama Pengamat</label>
            <input
              type="text"
              name="id"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Masukkan nama pengamat"
              autoComplete="off"
            />
          </div>

          <div className="config__group">
            <label>Port</label>
            <select
              name="port"
              id="port"
              onChange={(e) => setPort(e.target.value)}
            >
              <option>Pilih PORT yang digunakan</option>
              {defaultPort.map((item, i) => (
                <option value={item} key={i}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="config__group">
            <label>Baudrate</label>
            <input
              type="text"
              name="port"
              onChange={(e) => setBaudrate(e.target.value)}
              value={baudrate}
              placeholder="Masukkan BAUDRATE yang digunakan"
              autoComplete="off"
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
