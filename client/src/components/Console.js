import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetDataArr1, resetDataArr2 } from "../data";
import { downloadTxtFile } from "../utils/functions";

import "../css/Console.css";

const Console = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const data_container_1 = document.getElementById("console__content_1");
  const data_container_2 = document.getElementById("console__content_2");

  const saveHandlerOne = (e) => {
    e.preventDefault();
    downloadTxtFile(data.d_arr_p1, "_pengamatSatu");
  };

  const saveHandlerTwo = (e) => {
    e.preventDefault();
    downloadTxtFile(data.d_arr_p2, "_pengamatDua");
  };

  const deleteHandlerOne = (e) => {
    e.preventDefault();
    dispatch(resetDataArr1());
  };

  const deleteHandlerTwo = (e) => {
    e.preventDefault();
    dispatch(resetDataArr2());
  };

  useEffect(() => {
    try {
      data_container_1.scrollTop = data_container_1.scrollHeight;
    } catch (err) {
      console.log("data not ready");
    }
  }, [data.d_arr_p1]);

  useEffect(() => {
    try {
      data_container_2.scrollTop = data_container_2.scrollHeight;
    } catch (err) {
      console.log("data not ready");
    }
  }, [data.d_arr_p2]);

  return (
    <div className="console">
      <div className="first__container">
        <div className="console__header">Pengamat Satu</div>
        <div className="console__content" id="console__content_1">
          {data.d_arr_p1.map((item, index) => (
            <p key={index}>
              [{item.time_p1}] latitude : {item.lat_p1.toFixed(7)} longitude :{" "}
              {item.lng_p1.toFixed(7)} distance : {item.dist_p1} compass :{" "}
              {item.compass_p1.toFixed(2)} humidity : {item.humid_p1}{" "}
              temperature : {item.temp_p1} dAltitude : {item.d_alti_p1} altitude
              : {item.alti_p1}
            </p>
          ))}
        </div>
        <div className="console__footer">
          <button onClick={saveHandlerOne}>Save</button>
          <button onClick={deleteHandlerOne}>Clear Data</button>
        </div>
      </div>
      <div className="second__container">
        <div className="console__header">Pengamat Dua</div>
        <div className="console__content" id="console__content_2">
          {data.d_arr_p2.map((item, index) => (
            <p key={index}>
              [{item.time_p2}] latitude : {item.lat_p2.toFixed(7)} longitude :{" "}
              {item.lng_p2.toFixed(7)} distance : {item.dist_p2} compass :{" "}
              {item.compass_p2.toFixed(2)} humidity : {item.humid_p2}{" "}
              temperature : {item.temp_p2} dAltitude : {item.d_alti_p2} altitude
              : {item.alti_p2}
            </p>
          ))}
        </div>
        <div className="console__footer">
          <button onClick={saveHandlerTwo}>Save</button>
          <button onClick={deleteHandlerTwo}>Clear Data</button>
        </div>
      </div>
    </div>
  );
};

export default Console;
