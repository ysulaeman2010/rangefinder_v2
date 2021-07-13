import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editConfigure, setConfigure, editProjectileConfigure } from "../data";
import { defaultPort } from "../constant/defaultPort";
import "../css/Modal.css";

const Modal = ({ showModal, modalHandler, editData, fetchHandler, tab }) => {
  const [name, setName] = useState("");
  const [port, setPort] = useState("");
  const [baudrate, setBaudrate] = useState("");

  const [radius, setRadius] = useState("");
  const [mass, setMass] = useState("");
  const [initVelo, setInitVelo] = useState("");

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
    fetchHandler();
    modalHandler();
  };

  const submitHandlerProjectile = (e) => {
    e.preventDefault();
    const newDataProjectile = {
      id: editData.id_projectile,
      radius: radius,
      mass: mass,
      initVelo: initVelo,
    };
    console.log(newDataProjectile);
    dispatch(editProjectileConfigure(newDataProjectile));
    fetchHandler();
    modalHandler();
  };

  useEffect(() => {
    setName(editData.name);
    setBaudrate(editData.baudrate);
    setRadius(editData.radius);
    setMass(editData.mass);
    setInitVelo(editData.initVelo);
  }, [editData.status]);

  return (
    <React.Fragment>
      {showModal ? (
        tab === "obs" ? (
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
                  <button onClick={submitHandler}>
                    {editData.buttonTitle}
                  </button>
                  <button onClick={modalHandler}>Batal</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal__background">
            <div className="modal__wrapper">
              <div className="modal__header">
                <strong>Edit Projectile</strong>
              </div>
              <div className="modal__content">
                <div className="modal__group">
                  <label>ID</label>
                  <input
                    type="text"
                    name="port"
                    autoComplete="off"
                    value={editData.id_projectile}
                    disabled={true}
                  />
                </div>
                <div className="modal__group">
                  <label>Radius</label>
                  <input
                    type="text"
                    name="radius"
                    autoComplete="off"
                    value={radius}
                    onChange={(e) => setRadius((prev) => e.target.value)}
                  />
                </div>
                <div className="modal__group">
                  <label>Mass</label>
                  <input
                    type="text"
                    name="mass"
                    autoComplete="off"
                    value={mass}
                    onChange={(e) => setMass((prev) => e.target.value)}
                  />
                </div>
                <div className="modal__group">
                  <label>Initial Velocity</label>
                  <input
                    type="text"
                    name="initVelo"
                    autoComplete="off"
                    value={initVelo}
                    onChange={(e) => setInitVelo((prev) => e.target.value)}
                  />
                </div>

                <div className="modal__footer">
                  <button onClick={submitHandlerProjectile}>
                    Edit Projectile
                  </button>
                  <button onClick={modalHandler}>Batal</button>
                </div>
              </div>
            </div>
          </div>
        )
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
