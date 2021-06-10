import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openStream,
  collectDataD1,
  collectDataD2,
  collectDataD3,
  collectDataD4,
} from "../data";

import io from "socket.io-client";

const PORT = 3001;
const socket = io(`http://localhost:${PORT}`);

const Data = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openStream());

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

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div></div>;
};

export default Data;
