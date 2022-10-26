import { Bar } from "@ant-design/plots";

const DemoBarHorinzontal = (props) => {
  const data = props.datos;
  const config = {
    data,
    isGroup: true,
    xField: "value",
    yField: "year",
    seriesField: "clasificaion",
    marginRatio: 0,
    label: {
      color: ['#d62728', '#2ca02c', '#000000'],
      position: "right",
      offset: 4,
    },
    barStyle: {
      radius: [2, 2, 2, 2],
    },
  };
  return <Bar {...config} />;
};
export default DemoBarHorinzontal;
