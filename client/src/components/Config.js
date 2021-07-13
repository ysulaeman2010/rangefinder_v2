import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { getConfigure, deleteConfigure, getProjectilData } from "../data";
import { compare } from "../utils/functions";

import "../css/Config.css";

const Config = () => {
  const data = useSelector((state) => state.get_data);
  const projectilData = useSelector((state) => state.get_projectil_data);

  const dispatch = useDispatch();

  const [tab, setTab] = useState("obs");
  const [showModal, setShowModal] = useState(false);
  const [fetch, setFetch] = useState(false);

  const [editData, setEditData] = useState({
    title: "Edit Pengamat",
    status: true,
    id: null,
    name: "",
    port: "",
    baudrate: "",
    buttonTitle: "Edit",
  });

  const fetchHandler = () => {
    setFetch((prev) => !prev);
  };

  const modalHandler = () => {
    setEditData({
      title: "Tambah Pengamat",
      status: false,
      id: null,
      name: "",
      port: "",
      baudrate: "",
      id_projectile: projectilData[0]._id,
      radius: projectilData[0].radius,
      mass: projectilData[0].mass,
      initVelo: projectilData[0].v0,
      buttonTitle: "Tambah",
    });
    setShowModal((prev) => !prev);
  };

  const deleteHandler = (id) => {
    dispatch(deleteConfigure(id));
    fetchHandler();
  };

  const editHandler = (id) => {
    const filterData = data.filter((item) => item._id === id);

    setEditData({
      title: "Edit Pengamat",
      staus: true,
      id: filterData[0]._id,
      name: filterData[0].name,
      port: filterData[0].port,
      baudrate: filterData[0].baudrate,
      buttonTitle: "Edit",
    });

    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getConfigure());
    dispatch(getProjectilData());
  }, [fetch]);

  return (
    <React.Fragment>
      <div className="table__wrapper">
        <div className="table__tab">
          <span
            className={tab === "obs" ? "active" : null}
            onClick={() => setTab((prev) => "obs")}
          >
            Observer Data
          </span>
          <span
            className={tab === "prj" ? "active" : null}
            onClick={() => setTab((prev) => "prj")}
          >
            Projectile
          </span>
        </div>
        <table id="table__data">
          <thead>
            <tr rowSpan="2">
              <th colSpan="6" style={{ textAlign: "center", padding: "30px" }}>
                {tab === "obs" ? "Observer Data" : "Projectile Data"}
              </th>
            </tr>
            {tab === "obs" ? (
              <tr>
                <th>No</th>
                <th>Nama Pengamat</th>
                <th>Port</th>
                <th>Baudrate</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            ) : (
              <tr>
                <th>ID</th>
                <th>Radius</th>
                <th>Mass</th>
                <th>Initial Velocity</th>
                <th>Last Edited</th>
              </tr>
            )}
          </thead>
          <tbody>
            {tab === "obs" ? (
              data.length > 0 ? (
                data
                  .sort((a, b) => compare(a, b))
                  .map((item, no) => {
                    return (
                      <React.Fragment key={no}>
                        <tr>
                          <td>{no + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.port}</td>
                          <td>{item.baudrate}</td>
                          <td>{item.timestamp}</td>
                          <td>
                            <button onClick={() => editHandler(item._id)}>
                              Edit
                            </button>
                            <button onClick={() => deleteHandler(item._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })
              ) : (
                <tr rowSpan="2">
                  <td
                    colSpan="6"
                    style={{ textAlign: "center", padding: "50px" }}
                  >
                    Tidak ada data / Tidak terkoneksi pada server
                  </td>
                </tr>
              )
            ) : projectilData.length > 0 ? (
              projectilData.map((item, no) => {
                return (
                  <React.Fragment key={no}>
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.radius} m</td>
                      <td>{item.mass} kg</td>
                      <td>{item.v0} m/s</td>
                      <td>{item.timestamp}</td>
                    </tr>
                  </React.Fragment>
                );
              })
            ) : (
              <tr rowSpan="2">
                <td
                  colSpan="6"
                  style={{ textAlign: "center", padding: "50px" }}
                >
                  Tidak ada data / Tidak terkoneksi pada server
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {tab === "obs" ? (
          <div className="table__footer">
            <button onClick={modalHandler}>Tambah Pengamat</button>
          </div>
        ) : (
          <div className="table__footer">
            <button onClick={modalHandler}>Edit Projectile</button>
          </div>
        )}
      </div>
      <Modal
        showModal={showModal}
        modalHandler={modalHandler}
        editData={editData}
        fetchHandler={fetchHandler}
        tab={tab}
      />
    </React.Fragment>
  );
};

export default Config;
