import { Pie } from "@ant-design/plots";

const DemoPie = (props) => {;
  const data = props.datos;
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "title",
    radius: 0.75,
    label: {
      type: "inner",
      labelHeight: 28,
      content: "{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;
