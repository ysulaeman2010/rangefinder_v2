import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { openStream, collectData, collectDataFail } from "../data";

import io from "socket.io-client";

const PORT = 3001;
const socket = io(`http://localhost:${PORT}`);

const Data = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openStream());

    try {
      socket.on("data", (res) => {
        dispatch(collectData(res));
      });
    } catch (error) {
      dispatch(collectDataFail(error));
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  console.log(data.data);
  return <div></div>;
};

export default Data;
