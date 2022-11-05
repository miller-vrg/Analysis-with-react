import Table from "../../../utils/Table";
import DemoLine from "../Demon/DemoLine";

const TotalVictimas = (props) => {
  return (
    <>
      <section className="content__card" id="conclusion">
        <h2>Total de victimas</h2>
        <div className="content__descipcion">
          <div className="content__descipcion___grafic">
            <DemoLine datos={props.datos} />
          </div>
          <div className="content__interno">
            <p className="content__interno-texto">
              La gráfica nos muestra una comparación entre los años 2020, 2021 y
              2022, mostrando un aumentó en el año 2021 en comparación del año
              2020 y el 2022 hasta el momento, pero no podemos descartar el
              hecho de que muchas personas no presentan estas denuncias, son más
              los casos que nunca sé Reportan.
            </p>
            <div className="content__table">
              <Table
                promedio={props.promedio}
                media={props.promedio / 2}
                moda={0}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TotalVictimas;
