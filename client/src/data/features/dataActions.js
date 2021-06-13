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
  API_POST_SUCCESS,
  API_GET_SUCCESS,
  API_ERROR,
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

export const apiPostData = (data) => {
  return {
    type: API_POST_SUCCESS,
    payload: data,
  };
};

export const apiGetData = (data) => {
  return {
    type: API_GET_SUCCESS,
    payload: data,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const setConfigure = ({ id, port, baudrate }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/v2/config", {
        id: id,
        port: port,
        baudrate: baudrate,
      })
      .then((res) => {
        dispatch(apiPostData(res));
      })
      .catch((err) => dispatch(apiError(err.message)));
  };
};
