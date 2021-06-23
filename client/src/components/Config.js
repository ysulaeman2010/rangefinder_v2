import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { getConfigure } from "../data";

import "../css/Config.css";

const Config = () => {
  const data = useSelector((state) => state.get_data);
  const status = useSelector((state) => state.fetch_status);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getConfigure());
  });

  return (
    <React.Fragment>
      <div className="table__wrapper">
        <div className="table__header">
          <strong>Observer Database</strong>
        </div>
        <table id="table__data">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Pengamat</th>
              <th>Port</th>
              <th>Baudrate</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, no) => {
                return (
                  <React.Fragment key={no}>
                    <tr>
                      <td>{no + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.port}</td>
                      <td>{item.baudrate}</td>
                      <td>{item.timestamp}</td>
                      <td>
                        <button>Edit</button>
                        <button>Delete</button>
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
            )}
          </tbody>
        </table>
        <div className="table__footer">
          <button onClick={modalHandler}>Tambah Pengamat</button>
        </div>
      </div>
      <Modal showModal={showModal} modalHandler={modalHandler} />
    </React.Fragment>
  );
};

export default Config;
