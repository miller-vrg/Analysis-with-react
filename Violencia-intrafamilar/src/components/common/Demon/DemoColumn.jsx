import { Column } from "@ant-design/plots";

const DemoColumn = (props) => {
  const data = props.datos;
  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",
    color: ({ year }) => {
      if (year == "2020") {
        return "#b7ff6b";
      }
      if (year == "2021") {
        return "#fff569";
      }
      return "#84fff8";
    },
    label: {
      content: (originData) => {
        return parseFloat(originData.value);
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};
export default DemoColumn;
