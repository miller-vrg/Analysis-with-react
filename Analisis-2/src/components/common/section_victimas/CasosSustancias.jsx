import Table from "../../../utils/Table";
import DemoPie from "../Demon/DemoPie";

const CasosSustancias = (props)=>{
    return(
        <>
         <section className="content__card">
              <h2>Casos por sustancias y sin sustancias</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoPie datos={props.datos}/>
                </div>
                <div className="content__interno">
                  <p className="content__interno-texto">
                    Podemos notar que la mayoría de estos casos 
                    con un porcentaje de 98.26% son causados 
                    sin presentar consumo de sustancias, podríamos 
                    decir que son causados por disgustos internos de 
                    las familias mostrando una gran parte del análisis 
                    y solo 1.71% es causado bajo el uso de sustancias 
                    Dándonos a conocer que los casos expresados son ataques
                    de forma consiente sobre sus víctimas.
                  </p>
                  <div className="content__table">
                    <Table promedio={props.promedio/3} media={props.promedio/2} moda={0}/>
                </div>
                </div>
              </div>
            </section>
        </>
    );
}

export default CasosSustancias;