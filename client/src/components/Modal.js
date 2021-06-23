import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setConfigure } from "../data";
import "../css/Modal.css";

const Modal = ({ showModal, modalHandler }) => {
  const [name, setName] = useState("");
  const [port, setPort] = useState("");
  const [baudrate, setBaudrate] = useState("");

  const dispatch = useDispatch();

  const defaultPort = [
    "/dev/ttyUSB0",
    "/dev/ttyUSB1",
    "/dev/ttyUSB2",
    "/dev/ttyUSB3",
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    const configData = {
      name: name,
      port: port,
      baudrate: baudrate,
    };
    dispatch(setConfigure(configData));
    modalHandler();
  };

  return (
    <React.Fragment>
      {showModal ? (
        <div className="modal__background">
          <div className="modal__wrapper">
            <div className="modal__header">
              <strong>Tambah Pengamat</strong>
            </div>
            <div className="modal__content">
              <div className="modal__group">
                <label>Nama Pengamat</label>
                <input
                  type="text"
                  name="port"
                  placeholder="Masukkan nama pengamat"
                  autoComplete="off"
                  onChange={(e) => setName((prev) => e.target.value)}
                />
              </div>
              <div className="modal__group">
                <label>Port</label>
                <select
                  name="port"
                  id="port"
                  onChange={(e) => setPort((prev) => e.target.value)}
                >
                  <option>Pilih PORT yang digunakan</option>
                  {defaultPort.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal__group">
                <label>Baudrate</label>
                <input
                  type="text"
                  name="port"
                  placeholder="Masukkan BAUDRATE yang digunakan"
                  autoComplete="off"
                  onChange={(e) => setBaudrate((prev) => e.target.value)}
                />
              </div>
              <div className="modal__footer">
                <button onClick={submitHandler}>Submit</button>
                <button onClick={modalHandler}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
