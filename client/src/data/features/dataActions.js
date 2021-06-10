import {
  DATA_COLLECT_FAIL,
  DATA_COLLECT_SUCCESS,
  OPEN_STREAM,
} from "./dataTypes";

export const openStream = () => {
  return {
    type: OPEN_STREAM,
  };
};

export const collectData = (data) => {
  return {
    type: DATA_COLLECT_SUCCESS,
    payload: data,
  };
};

export const collectDataFail = (error) => {
  return {
    type: DATA_COLLECT_FAIL,
    payload: error,
  };
};
