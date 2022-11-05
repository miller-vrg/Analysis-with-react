import React, { useState, useEffect } from "react";
import { Bar } from "@ant-design/plots";
import "./css/demo-bar.css";

const DemoBar = (props) => {
  const data = props.datos;
  console.log(data);
  const config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
