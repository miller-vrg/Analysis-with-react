import Table from "../../../utils/Table";
import DemoPie from "../Demon/DemoPie";
const Agresores=(props)=>{
  const link_genero = <a href="#genero">víctimas por género</a>
    return(
        <>
         <section className="content__card">
              <h2>Agresores</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoPie datos={props.datos}/>
                </div>
                <div className="content__interno">
                  <p className="content__interno-texto">
                  En la mayoría de los casos los agresores fueron 
                  parejas de las víctimas, con un porcentaje de 
                  60.71% mucho más de la mitad mostrando el caso 
                  de violencias causadas por parejas como visto 
                  en el análisis de {link_genero} la mayoría 
                  de los casos vistos son de mujeres siendo víctimas 
                  de violencia intrafamiliar. No obstante, el 26.71% 
                  de los casos fueron causados por familiares de las 
                  víctimas o parientes cercanos. Seguido de un 6.83% 
                  causado por padres mostrando una pequeña parte junto 
                  al 5.75% de la madre, demostrando que la mayoría de 
                  estos casos no son denunciados, ya que los niños están 
                  bajo el manto de 
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

export default Agresores;