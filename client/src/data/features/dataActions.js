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
  OPEN_STREAM,
} from "./dataTypes";

export const openStream = () => {
  return {
    type: OPEN_STREAM,
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
