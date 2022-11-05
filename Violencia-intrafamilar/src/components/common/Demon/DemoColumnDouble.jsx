import { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const DemoColumnDouble = (props) => {
  const data = [
    {
        year:2020,
        sexo:"Masculino",
        value: props.datos["2020"].masculino
    },
    {
        year:2020,
        sexo:"Femenino",
        value: props.datos["2020"].femenino
    },
    {
        year:2021,
        sexo:"Masculino",
        value: props.datos["2021"].masculino
    },
    {
        year:2021,
        sexo:"Femenino",
        value: props.datos["2021"].femenino
    },
    {
        year:2022,
        sexo:"Masculino",
        value: props.datos["2022"].masculino
    },
    {
        year:2022,
        sexo:"Femenino",
        value: props.datos["2022"].femenino
    }
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'sexo',
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};

export default DemoColumnDouble;