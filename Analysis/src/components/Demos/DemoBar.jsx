import {Bar} from "@ant-design/plots";

const DemoBar = (props) => {
    console.log(props.ventasYear);
    const VentasYear = props.ventasYear;
  
    const data = [
      {
        year: 2018,
        value: VentasYear[2018],
      },
      {
        year: 2019,
        value: VentasYear[2019],
      },
      {
        year: 2020,
        value: VentasYear[2020],
      },
      {
        year: 2021,
        value: VentasYear[2021],
      },
      {
        year: 2022,
        value: VentasYear[2022],
      },
    ];
  
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