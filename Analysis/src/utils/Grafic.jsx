import React, { useState, useEffect } from "react";
import DemoLine from "../components/Demos/DemoLine";
import DemoBar from "../components/Demos/DemoBar";
import DemoPie from "../components/Demos/DemoPie";
import "../css/Grafic.css";

export default class Grafic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosSucursales: [],
      datosVendedores: [],
      ventasYear: [],
      ticks: [],
      menorVenta: 0,
      mayorVenta: 0,
      estado: false,
    };
    this.cargarDatos = this.cargarDatos.bind(this);
  }

  cargarDatos = () => {
    const url = "../data/data.json";
    axios.get(url).then(({ data }) => {
      const sucursal1 = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const sucursal2 = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const sucursal3 = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const sucursal4 = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const sucursal5 = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const sucursal6 = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const sucursal7 = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const ventasYear = {
        2018: 0,
        2019: 0,
        2020: 0,
        2021: 0,
        2022: 0,
      };
      const vendedores = {
        "vendedor 1": 0,
        "vendedor 2": 0,
        "vendedor 3": 0,
        "vendedor 4": 0,
        "vendedor 5": 0,
        "vendedor 6": 0,
        "vendedor 7": 0,
      };
      let mayor = 0,
        menor = 0;
      data.map((element, i) => {
        if (element["AÑO"] == 2018) {
          if (element["SUCURSAL"] === 1) {
            sucursal1[2018] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 2) {
            sucursal2[2018] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 3) {
            sucursal3[2018] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 4) {
            sucursal4[2018] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 5) {
            sucursal5[2018] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 6) {
            sucursal6[2018] += element["VENTAS "];
          } else {
            sucursal7[2018] += element["VENTAS "];
          }
        } else if (element["AÑO"] == 2019) {
          if (element["SUCURSAL"] == 1) {
            sucursal1[2019] += element["VENTAS "];
          } else if (element["SUCURSAL"] == 2) {
            sucursal2[2019] += element["VENTAS "];
          } else if (element["SUCURSAL"] == 3) {
            sucursal3[2019] += element["VENTAS "];
          } else if (element["SUCURSAL"] == 4) {
            sucursal4[2019] += element["VENTAS "];
          } else if (element["SUCURSAL"] == 5) {
            sucursal5[2019] += element["VENTAS "];
          } else if (element["SUCURSAL"] == 6) {
            sucursal6[2019] += element["VENTAS "];
          } else {
            sucursal7[2019] += element["VENTAS "];
          }
        } else if (element["AÑO"] === 2020) {
          if (element["SUCURSAL"] === 1) {
            sucursal1[2020] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 2) {
            sucursal2[2020] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 3) {
            sucursal3[2020] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 4) {
            sucursal4[2020] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 5) {
            sucursal5[2020] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 6) {
            sucursal6[2020] += element["VENTAS "];
          } else {
            sucursal7[2020] += element["VENTAS "];
          }
        } else if (element["AÑO"] === 2021) {
          if (element["SUCURSAL"] === 1) {
            sucursal1[2021] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 2) {
            sucursal2[2021] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 3) {
            sucursal3[2021] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 4) {
            sucursal4[2021] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 5) {
            sucursal5[2021] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 6) {
            sucursal6[2021] += element["VENTAS "];
          } else {
            sucursal7[2021] += element["VENTAS "];
          }
        } else {
          if (element["SUCURSAL"] === 1) {
            sucursal1[2022] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 2) {
            sucursal2[2022] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 3) {
            sucursal3[2022] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 4) {
            sucursal4[2022] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 5) {
            sucursal5[2022] += element["VENTAS "];
          } else if (element["SUCURSAL"] === 6) {
            sucursal6[2022] += element["VENTAS "];
          } else {
            sucursal7[2022] += element["VENTAS "];
          }
        }
        ventasYear[element["AÑO"]] =
          ventasYear[element["AÑO"]] + element["VENTAS "];
        let temp = "vendedor " + element["VENDEDOR"];
        vendedores[temp]++;

        mayor = Math.max(mayor, element["VENTAS "]);
        if (i == 0) {
          menor = mayor;
        }
        menor = Math.min(menor, element["VENTAS "]);
      });

      const datosSucursales = [
        {
          name: "Sucursal 1",
          year: 2018,
          gdp: sucursal1[2018],
        },
        {
          name: "Sucursal 1",
          year: 2019,
          gdp: sucursal1[2019],
        },
        {
          name: "Sucursal 1",
          year: 2020,
          gdp: sucursal1[2020],
        },
        {
          name: "Sucursal 1",
          year: 2021,
          gdp: sucursal1[2021],
        },
        {
          name: "Sucursal 1",
          year: 2022,
          gdp: sucursal1[2022],
        },
        {
          name: "Sucursal 2",
          year: 2018,
          gdp: sucursal2[2018],
        },
        {
          name: "Sucursal 2",
          year: 2019,
          gdp: sucursal2[2019],
        },
        {
          name: "Sucursal 2",
          year: 2020,
          gdp: sucursal2[2020],
        },
        {
          name: "Sucursal 2",
          year: 2021,
          gdp: sucursal2[2021],
        },
        {
          name: "Sucursal 2",
          year: 2022,
          gdp: sucursal2[2022],
        },
        {
          name: "Sucursal 3",
          year: 2018,
          gdp: sucursal3[2018],
        },
        {
          name: "Sucursal 3",
          year: 2019,
          gdp: sucursal3[2019],
        },
        {
          name: "Sucursal 3",
          year: 2020,
          gdp: sucursal3[2020],
        },
        {
          name: "Sucursal 3",
          year: 2021,
          gdp: sucursal1[2021],
        },
        {
          name: "Sucursal 3",
          year: 2022,
          gdp: sucursal3[2022],
        },
        {
          name: "Sucursal 4",
          year: 2018,
          gdp: sucursal4[2018],
        },
        {
          name: "Sucursal 4",
          year: 2019,
          gdp: sucursal4[2019],
        },
        {
          name: "Sucursal 4",
          year: 2020,
          gdp: sucursal4[2020],
        },
        {
          name: "Sucursal 4",
          year: 2021,
          gdp: sucursal4[2021],
        },
        {
          name: "Sucursal 4",
          year: 2022,
          gdp: sucursal4[2022],
        },
        {
          name: "Sucursal 5",
          year: 2018,
          gdp: sucursal5[2018],
        },
        {
          name: "Sucursal 5",
          year: 2019,
          gdp: sucursal5[2019],
        },
        {
          name: "Sucursal 5",
          year: 2020,
          gdp: sucursal5[2020],
        },
        {
          name: "Sucursal 5",
          year: 2021,
          gdp: sucursal5[2021],
        },
        {
          name: "Sucursal 5",
          year: 2022,
          gdp: sucursal5[2022],
        },
        {
          name: "Sucursal 6",
          year: 2018,
          gdp: sucursal6[2018],
        },
        {
          name: "Sucursal 6",
          year: 2019,
          gdp: sucursal6[2018],
        },
        {
          name: "Sucursal 6",
          year: 2020,
          gdp: sucursal6[2020],
        },
        {
          name: "Sucursal 6",
          year: 2021,
          gdp: sucursal6[2021],
        },
        {
          name: "Sucursal 6",
          year: 2022,
          gdp: sucursal6[2022],
        },
        {
          name: "Sucursal 7",
          year: 2018,
          gdp: sucursal7[2018],
        },
        {
          name: "Sucursal 7",
          year: 2019,
          gdp: sucursal7[2018],
        },
        {
          name: "Sucursal 7",
          year: 2020,
          gdp: sucursal7[2020],
        },
        {
          name: "Sucursal 7",
          year: 2021,
          gdp: sucursal7[2021],
        },
        {
          name: "Sucursal 7",
          year: 2022,
          gdp: sucursal7[2022],
        },
      ];

      const datosVendedores = [
        {
          type: "Vendedor 1",
          value: vendedores["vendedor 1"],
        },
        {
          type: "Vendedor 2",
          value: vendedores["vendedor 2"],
        },
        {
          type: "Vendedor 3",
          value: vendedores["vendedor 3"],
        },
        {
          type: "Vendedor 4",
          value: vendedores["vendedor 4"],
        },
        {
          type: "Vendedor 5",
          value: vendedores["vendedor 5"],
        },
        {
          type: "Vendedor 6",
          value: vendedores["vendedor 6"],
        },
        {
          type: "Vendedor 7",
          value: vendedores["vendedor 7"],
        },
      ];

      this.setState({
        datos: data,
        datosSucursales: datosSucursales,
        ventasYear: ventasYear,
        datosVendedores: datosVendedores,
        mayorVenta: mayor,
        menorVenta: menor,
        estado: true,
      });
    });
  };

  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    return (
      <>
        <section className="ventas-anuales">
          <h2 className="ventas-anuales__title">Analisis de ventas anuales</h2>
          <div id="content">
            <Tabla datos={this.state.ventasYear} />
            <div className="content__demo-line">
              <DemoBar ventasYear={this.state.ventasYear} />
            </div>
          </div>
        </section>
        <h2> Analisis de ventas anuales de cada sucursal</h2>
        <DemoLine datos={this.state.datosSucursales} />
        <h2>Analisis de venta por vendedor</h2>
        <DemoPie vendedores={this.state.datosVendedores} />
        <h2>Analisis final</h2>
        <table>
          <tr>
            <th>Mayor Venta </th>
            <th>Menor Venta</th>
          </tr>
          <tr>
            <td>{this.state.mayorVenta}</td>
            <td>{this.state.menorVenta}</td>
          </tr>
        </table>
        <p>
          La mayor demanda fue en el año 2022 con una venta de{" "}
          {this.state.ventasYear[2022]}
        </p>
        <p>vendedor con mas venta fue el vendedor 5 con 308 ventas</p>
      </>
    );
  }
}

const Tabla = (props) => {
  return (
    <>
      <table>
        <tr>
          <th>N°</th>
          <th>Año</th>
          <th>Venta</th>
        </tr>
        {row(1, [], props.datos)}
      </table>
    </>
  );
};

const row = (i, rows, datos) => {
  const year = 2017 + i + "";
    //datos = [datos[2018], datos[2019], datos[2020], datos[2021], datos[2022]];
    rows[i-1] =
      <>
        <tr>
          <td>{i}</td>
          <td>{year}</td>
          <td>{datos[year]}</td>
        </tr>
      </>;
  
  if (i != 5) {
    row(++i, rows, datos);
  }
  return rows;
};
