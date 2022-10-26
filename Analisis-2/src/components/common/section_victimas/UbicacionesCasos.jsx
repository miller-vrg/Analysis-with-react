import Table from "../../../utils/Table";
import DemoColumn from "../Demon/DemoColumn";

const UbicacionCasos = (props)=>{
    return(
        <>
        <section className="content__card">
              <h2>Ubiciacion del casos</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoColumn datos={props.datos} />
                </div>
                <div className="content__interno">
                  <p className="content__interno-texto">
                    Podríamos decir que la mayoría de los casos 
                    fueron en lugares fuera del hogar, ya que 
                    Demuestra que tenemos un total de 644 casos 
                    13 de vía pública y 631 en otras partes, puesto que 
                    se ven estos casos mucho más frecuentes fuera 
                    del hogar, pero no podemos ignorar que un gran 
                    parte de casos son vistos en hogar con cantidad 
                    de 580.
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
export default UbicacionCasos;