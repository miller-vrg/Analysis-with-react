import Table from "../../../utils/Table";
import DemoBarHorinzontal from "../Demon/DemoBarHorizontal";

const ClasificacionVictimas = (props) => {
  return (
    <>
      <section className="content__card" id="">
        <h2>Clasificación de victimas</h2>
        <div className="content__descipcion">
          <div className="content__descipcion___grafic">
            <DemoBarHorinzontal datos={props.datos} />
          </div>
          <div className="content__interno">
            <p className="content__interno-texto">
              Comparando en cada año veremos que la mayoría de víctimas son
              adultos, seguido de los jóvenes entre 12 y 26 años de edad, los
              niños quisas tengan una menor parte pero no podemos descartar la
              idea de que los niños no son tan libres como denunciar a sus
              padres, y para la minoría adultos mayores con solo una pequeña
              parte de casos vistos pero de igual forma algunos de hechos
              también son silenciados por sus propias familias.
            </p>
            <div className="content__table">
              <Table
                title="2020"
                promedio={props.promedio[2020] / 3}
                media={props.promedio[2020] / 2}
                moda={0}
              />
              <Table
                title="2021"
                promedio={props.promedio[2021] / 3}
                media={props.promedio[2021] / 2}
                moda={0}
              />
              <Table
                title="2022"
                promedio={props.promedio[2022] / 3}
                media={props.promedio[2022] / 2}
                moda={0}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClasificacionVictimas;
