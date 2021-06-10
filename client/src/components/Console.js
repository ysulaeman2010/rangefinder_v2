import React from "react";
import "../css/Console.css";

import { useSelector } from "react-redux";

const Console = () => {
  const data = useSelector((state) => state);

  return (
    <div>
      <h1>Console</h1>
    </div>
  );
};

export default Console;
