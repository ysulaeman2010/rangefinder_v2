import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { getConfigure, deleteConfigure } from "../data";
import { compare } from "../utils/functions";

import "../css/Config.css";

const Config = () => {
  const data = useSelector((state) => state.get_data);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    title: "Edit Pengamat",
    status: true,
    id: null,
    name: "",
    port: "",
    baudrate: "",
    buttonTitle: "Edit",
  });

  const modalHandler = () => {
    setEditData({
      title: "Tambah Pengamat",
      status: false,
      id: null,
      name: "",
      port: "",
      baudrate: "",
      buttonTitle: "Tambah",
    });
    setShowModal((prev) => !prev);
  };

  const deleteHandler = (id) => {
    dispatch(deleteConfigure(id));
  };

  const editHandler = (e) => {
    const filterData = data.filter((item) => item._id === e.target.value);

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
                          <button onClick={editHandler} value={item._id}>
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
            )}
          </tbody>
        </table>
        <div className="table__footer">
          <button onClick={modalHandler}>Tambah Pengamat</button>
        </div>
      </div>
      <Modal
        showModal={showModal}
        modalHandler={modalHandler}
        editData={editData}
      />
    </React.Fragment>
  );
};

export default Config;
