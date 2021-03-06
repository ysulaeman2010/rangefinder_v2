import axios from "axios";
import {
  DATA_D1_COLLECT_SUCCESS,
  DATA_D2_COLLECT_SUCCESS,
  DATA_D3_COLLECT_SUCCESS,
  DATA_D4_COLLECT_SUCCESS,
  DATA_C1_COLLECT_SUCCESS,
  DATA_C2_COLLECT_SUCCESS,
  DATA_C3_COLLECT_SUCCESS,
  DATA_C4_COLLECT_SUCCESS,
  DATA_P1_COLLECT_SUCCESS,
  DATA_P2_COLLECT_SUCCESS,
  DATA_P3_COLLECT_SUCCESS,
  DATA_P4_COLLECT_SUCCESS,
  CLOSE_STREAM,
  DATA_ARR_P1,
  DATA_ARR_P2,
  DATA_ARR_P3,
  DATA_ARR_P4,
  DATA_RESET_P1,
  DATA_RESET_P2,
  DATA_RESET_P3,
  DATA_RESET_P4,
  API_GET_SUCCESS,
  API_ERROR,
  API_GET_BYID_SUCCESS,
  API_PROJECTIL_GET_DATA,
  API_PROJECTIL_ERROR,
} from "./dataTypes";

export const closeStream = (err) => {
  return {
    type: CLOSE_STREAM,
    payload: err,
  };
};

export const collectDataD1 = (data) => {
  return {
    type: DATA_D1_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataD2 = (data) => {
  return {
    type: DATA_D2_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataD3 = (data) => {
  return {
    type: DATA_D3_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataD4 = (data) => {
  return {
    type: DATA_D4_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataC1 = (data) => {
  return {
    type: DATA_C1_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataC2 = (data) => {
  return {
    type: DATA_C2_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataC3 = (data) => {
  return {
    type: DATA_C3_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataC4 = (data) => {
  return {
    type: DATA_C4_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataP1 = (data) => {
  return {
    type: DATA_P1_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataP2 = (data) => {
  return {
    type: DATA_P2_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataP3 = (data) => {
  return {
    type: DATA_P3_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataP4 = (data) => {
  return {
    type: DATA_P4_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataArrP1 = (data) => {
  return {
    type: DATA_ARR_P1,
    payload: data,
  };
};

export const collectDataArrP2 = (data) => {
  return {
    type: DATA_ARR_P2,
    payload: data,
  };
};

export const collectDataArrP3 = (data) => {
  return {
    type: DATA_ARR_P3,
    payload: data,
  };
};

export const collectDataArrP4 = (data) => {
  return {
    type: DATA_ARR_P4,
    payload: data,
  };
};

export const resetDataArr1 = () => {
  return {
    type: DATA_RESET_P1,
  };
};

export const resetDataArr2 = () => {
  return {
    type: DATA_RESET_P2,
  };
};

export const resetDataArr3 = () => {
  return {
    type: DATA_RESET_P3,
  };
};

export const resetDataArr4 = () => {
  return {
    type: DATA_RESET_P4,
  };
};

export const apiGetData = (data) => {
  return {
    type: API_GET_SUCCESS,
    payload: data,
  };
};

export const apiGetByData = (data) => {
  return {
    type: API_GET_BYID_SUCCESS,
    payload: data,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const apiGetProjectilData = (data) => {
  return {
    type: API_PROJECTIL_GET_DATA,
    payload: data,
  };
};

export const apiProjectilDataError = (error) => {
  return {
    type: API_PROJECTIL_ERROR,
    payload: error,
  };
};

export const setConfigure = ({ name, port, baudrate }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/v2/config/post", {
        name: name,
        port: port,
        baudrate: baudrate,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => dispatch(apiError(err)));
  };
};

export const editConfigure = ({ id, port, baudrate }) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3001/v2/config/patch?id=${id}`, {
        port: port,
        baudrate: baudrate,
      })
      .then((res) => console.log(res))
      .catch((err) => dispatch(apiError(err)));
  };
};

export const getConfigure = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/v2/config/get")
      .then((res) => {
        const dataDB = res.data;
        dispatch(apiGetData(dataDB));
      })
      .catch((err) => dispatch(apiError(err)));
  };
};

export const getByIdConfigure = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/v2/config/get?=${id}`)
      .then((res) => {
        const getById = res.data;
        dispatch(apiGetByData(getById));
      })
      .catch((err) => dispatch(apiError(err)));
  };
};

export const deleteConfigure = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/v2/config/delete?id=${id}`)
      .then((res) => console.log(res))
      .catch((err) => dispatch(apiError(err)));
  };
};

export const getProjectilData = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/v2/proyektil/get")
      .then((res) => {
        const projectilData = res.data;
        dispatch(apiGetProjectilData(projectilData));
      })
      .catch((err) => {
        dispatch(apiProjectilDataError(err));
      });
  };
};

export const editProjectileConfigure = ({ id, radius, mass, initVelo }) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3001/v2/proyektil/patch?id=${id}`, {
        id: id,
        radius: radius,
        mass: mass,
        v0: initVelo,
      })
      .then((res) => console.log(res))
      .catch((err) => dispatch(apiError(err)));
  };
};
