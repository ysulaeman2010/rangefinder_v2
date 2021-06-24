import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editConfigure, setConfigure } from "../data";
import { defaultPort } from "../constant/defaultPort";
import "../css/Modal.css";

const Modal = ({ showModal, modalHandler, editData }) => {
  const [name, setName] = useState("");
  const [port, setPort] = useState("");
  const [baudrate, setBaudrate] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (editData.status === false) {
      const configData = {
        name: name,
        port: port,
        baudrate: baudrate,
      };
      dispatch(setConfigure(configData));
    } else {
      const editConfigData = {
        id: editData.id,
        name: name,
        port: port,
        baudrate: baudrate,
      };
      dispatch(editConfigure(editConfigData));
    }
    setName("");
    setPort("");
    setBaudrate("");
    modalHandler();
  };

  useEffect(() => {
    setName(editData.name);
    setBaudrate(editData.baudrate);
  }, [editData.status]);

  return (
    <React.Fragment>
      {showModal ? (
        <div className="modal__background">
          <div className="modal__wrapper">
            <div className="modal__header">
              <strong>{editData.title}</strong>
            </div>
            <div className="modal__content">
              <div className="modal__group">
                <label>Nama Pengamat</label>
                {editData.status === false ? (
                  <input
                    type="text"
                    name="port"
                    placeholder="Masukkan nama pengamat"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName((prev) => e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    name="port"
                    placeholder="Masukkan nama pengamat"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName((prev) => e.target.value)}
                    disabled={true}
                  />
                )}
              </div>
              <div className="modal__group">
                <label>Port</label>
                {editData.status === false ? (
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
                ) : (
                  <select
                    name="port"
                    id="port"
                    onChange={(e) => setPort((prev) => e.target.value)}
                    value={editData.port}
                  >
                    {defaultPort.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="modal__group">
                <label>Baudrate</label>
                <input
                  type="text"
                  name="port"
                  placeholder="Masukkan BAUDRATE yang digunakan"
                  autoComplete="off"
                  value={baudrate}
                  onChange={(e) => setBaudrate((prev) => e.target.value)}
                />
              </div>
              <div className="modal__footer">
                <button onClick={submitHandler}>{editData.buttonTitle}</button>
                <button onClick={modalHandler}>Batal</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
