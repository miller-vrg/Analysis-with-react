import { Line } from "@ant-design/plots";
// grafica lineal
const DemoLine = (props) => {
    const data = props.datos;
    const config = {
      data,
      xField: "year",
      yField: "gdp",
      seriesField: "name",
      yAxis: {
        label: {
          formatter: (v) => `${(v / 10).toFixed(1)} B`,
        },
      },
      legend: {
        position: "top",
      },
      smooth: true,
      animation: {
        appear: {
          animation: "path-in",
          duration: 6000,
        },
      },
    };
  
    return <Line {...config} />;
  };
  // fin grafica lienal
export default DemoLine;