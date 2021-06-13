import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  closeStream,
  collectDataD1,
  collectDataD2,
  collectDataD3,
  collectDataD4,
  collectDataP1,
  collectDataP2,
  collectDataP3,
  collectDataP4,
  collectDataC1,
  collectDataC2,
  collectDataC3,
  collectDataC4,
  collectDataArrP1,
  collectDataArrP2,
  collectDataArrP3,
  collectDataArrP4,
} from "../data";

import io from "socket.io-client";

const PORT = 3001;
const socket = io(`http://localhost:${PORT}`);

const Data = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      socket.on("d_1", (res) => {
        dispatch(collectDataD1(res));
      });

      socket.on("d_2", (res) => {
        dispatch(collectDataD2(res));
      });

      socket.on("d_3", (res) => {
        dispatch(collectDataD3(res));
      });

      socket.on("d_4", (res) => {
        dispatch(collectDataD4(res));
      });

      socket.on("p_1", (res) => {
        dispatch(collectDataP1(res));
        dispatch(collectDataArrP1(res));
      });

      socket.on("p_2", (res) => {
        dispatch(collectDataP2(res));
        dispatch(collectDataArrP2(res));
      });

      socket.on("p_3", (res) => {
        dispatch(collectDataP3(res));
        dispatch(collectDataArrP3(res));
      });

      socket.on("p_4", (res) => {
        dispatch(collectDataP4(res));
        dispatch(collectDataArrP4(res));
      });

      socket.on("c_1", (res) => {
        dispatch(collectDataC1(res));
      });

      socket.on("c_2", (res) => {
        dispatch(collectDataC2(res));
      });

      socket.on("c_3", (res) => {
        dispatch(collectDataC3(res));
      });

      socket.on("c_4", (res) => {
        dispatch(collectDataC4(res));
      });
    } catch (err) {
      dispatch(closeStream(err));
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  return <React.Fragment></React.Fragment>;
};

export default Data;
