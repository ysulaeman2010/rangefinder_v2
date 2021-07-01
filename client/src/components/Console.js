import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetDataArr1,
  resetDataArr2,
  resetDataArr3,
  resetDataArr4,
  getConfigure,
} from "../data";
import { downloadTxtFile, angkaToString } from "../utils/functions";

import "../css/Console.css";

const Console = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const dataPengamat = [data.p_1, data.p_2, data.p_3, data.p_4];

  useEffect(() => {
    try {
      const data_container_1 = document.getElementById("console__body_1");
      data_container_1.scrollTop = data_container_1.scrollHeight;
    } catch (err) {
      console.log("data not ready");
    }
  }, [dataPengamat]);

  useEffect(() => {
    try {
      const data_container_2 = document.getElementById("console__body_2");
      data_container_2.scrollTop = data_container_2.scrollHeight;
    } catch (err) {
      console.log("data not ready");
    }
  }, [dataPengamat]);

  useEffect(() => {
    try {
      const data_container_3 = document.getElementById("console__body_3");
      data_container_3.scrollTop = data_container_3.scrollHeight;
    } catch (err) {
      console.log("data not ready");
    }
  }, [dataPengamat]);

  useEffect(() => {
    try {
      const data_container_4 = document.getElementById("console__body_4");
      data_container_4.scrollTop = data_container_4.scrollHeight;
    } catch (err) {
      console.log("data not ready");
    }
  }, [dataPengamat]);

  useEffect(() => {
    dispatch(getConfigure());
  }, []);

  const saveHandlerOne = () => {
    downloadTxtFile(data.d_arr_p1, "_pengamatSatu");
  };

  const saveHandlerTwo = () => {
    downloadTxtFile(data.d_arr_p2, "_pengamatDua");
  };

  const saveHandlerThree = () => {
    downloadTxtFile(data.d_arr_p3, "_pengamatTiga");
  };

  const saveHandlerFour = () => {
    downloadTxtFile(data.d_arr_p1, "_pengamatEmpat");
  };

  const deleteHandlerOne = () => {
    dispatch(resetDataArr1());
  };

  const deleteHandlerTwo = () => {
    dispatch(resetDataArr2());
  };

  const deleteHandlerThree = () => {
    dispatch(resetDataArr3());
  };

  const deleteHandlerFour = () => {
    dispatch(resetDataArr4());
  };

  return (
    <div className="console">
      <div className="console__wrapper">
        {data.status ? (
          <React.Fragment>
            {dataPengamat.map((item, index) => (
              <div
                className={
                  data.get_data[index] !== undefined && item.time !== 0
                    ? "console__content"
                    : "console__none"
                }
                key={index}
              >
                {index === 0 && (
                  <React.Fragment>
                    <div className="console__header">
                      {data.get_data[index] ? (
                        data.get_data[index].name
                      ) : (
                        <>Pengamat {angkaToString(index + 1)} </>
                      )}
                    </div>
                    <div className="console__body" id="console__body_1">
                      {data.d_arr_p1.map((item, index) => (
                        <p key={index}>
                          [{item.time}] latitude : {item.lat.toFixed(7)}{" "}
                          longitude : {item.lng.toFixed(7)} distance :{" "}
                          {item.dist} compass : {item.compass.toFixed(2)}{" "}
                          humidity : {item.humid} temperature : {item.temp}{" "}
                          dAltitude : {item.d_alti} altitude : {item.alti}
                        </p>
                      ))}
                    </div>
                    <div className="console__footer">
                      <button onClick={() => saveHandlerOne()}>
                        Simpan Data
                      </button>
                      <button onClick={() => deleteHandlerOne()}>
                        Hapus Data
                      </button>
                    </div>
                  </React.Fragment>
                )}
                {index === 1 && (
                  <React.Fragment key={index}>
                    <div className="console__header">
                      {data.get_data[index] ? (
                        data.get_data[index].name
                      ) : (
                        <>Pengamat {angkaToString(index + 1)} </>
                      )}
                    </div>
                    <div className="console__body" id="console__body_2">
                      {data.d_arr_p2.map((item, index) => (
                        <p key={index}>
                          [{item.time}] latitude : {item.lat.toFixed(7)}{" "}
                          longitude : {item.lng.toFixed(7)} distance :{" "}
                          {item.dist} compass : {item.compass.toFixed(2)}{" "}
                          humidity : {item.humid} temperature : {item.temp}{" "}
                          dAltitude : {item.d_alti} altitude : {item.alti}
                        </p>
                      ))}
                    </div>
                    <div className="console__footer">
                      <button onClick={() => saveHandlerTwo()}>
                        Simpan Data
                      </button>
                      <button onClick={() => deleteHandlerTwo()}>
                        Hapus Data
                      </button>
                    </div>
                  </React.Fragment>
                )}
                {index === 2 && (
                  <React.Fragment>
                    <div className="console__header">
                      {data.get_data[index] ? (
                        data.get_data[index].name
                      ) : (
                        <>Pengamat {angkaToString(index + 1)} </>
                      )}
                    </div>
                    <div className="console__body" id="console__body_3">
                      {data.d_arr_p3.map((item, index) => (
                        <p key={index}>
                          [{item.time}] latitude : {item.lat.toFixed(7)}{" "}
                          longitude : {item.lng.toFixed(7)} distance :{" "}
                          {item.dist} compass : {item.compass.toFixed(2)}{" "}
                          humidity : {item.humid} temperature : {item.temp}{" "}
                          dAltitude : {item.d_alti} altitude : {item.alti}
                        </p>
                      ))}
                    </div>
                    <div className="console__footer">
                      <button onClick={() => saveHandlerThree()}>
                        Simpan Data
                      </button>
                      <button onClick={() => deleteHandlerThree()}>
                        Hapus Data
                      </button>
                    </div>
                  </React.Fragment>
                )}
                {index === 3 && (
                  <React.Fragment>
                    <div className="console__header">
                      {data.get_data[index] ? (
                        data.get_data[index].name
                      ) : (
                        <>Pengamat {angkaToString(index + 1)} </>
                      )}
                    </div>
                    <div className="console__body" id="console__body_4">
                      {data.d_arr_p4.map((item, index) => (
                        <p key={index}>
                          [{item.time}] latitude : {item.lat.toFixed(7)}{" "}
                          longitude : {item.lng.toFixed(7)} distance :{" "}
                          {item.dist} compass : {item.compass.toFixed(2)}{" "}
                          humidity : {item.humid} temperature : {item.temp}{" "}
                          dAltitude : {item.d_alti} altitude : {item.alti}
                        </p>
                      ))}
                    </div>
                    <div className="console__footer">
                      <button onClick={() => saveHandlerFour()}>
                        Simpan Data
                      </button>
                      <button onClick={() => deleteHandlerFour()}>
                        Hapus Data
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </div>
            ))}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="console__noData">
              Tidak ada data / Tidak terkoneksi pada server
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Console;
