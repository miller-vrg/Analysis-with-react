import Table from "../../../utils/Table";
import DemoColumnDouble from "../Demon/DemoColumnDouble";

const VictimasGenero = (props)=>{
    return(
        <>
            <section className="content__card" id="genero">
                <h2>Victimas por genero</h2>
                <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                    <DemoColumnDouble datos={props.datos}/>
                </div>
                <div className="content__interno">
                    <p className="content__interno-texto">
                    En el año 2020 los casos por violencias intrafamiliar fueron más 
                    notorios en el sexo femenino mostrando una gran violencia en 
                    comparación del sexo opuesto. No obstante, en el siguiente año 
                    se disparó los índices de violencia sobre el sexo masculino, incluso 
                    mucho mayor que el femenino en el año anterior. Además, en el actual 
                    hasta el momento el sexo femenino se ve mucho más afectado por la 
                    violencia intrafamiliar, pero no podemos tener conclusiones hasta 
                    no finalizar el año actual.
                    </p>
                    <div className="content__table">
                    <Table title="2020" promedio={props.promedio[2020]/3} media={props.promedio[2020]/2} moda={0}/>
                    <Table title="2021" promedio={props.promedio[2021]/3} media={props.promedio[2021]/2} moda={0}/>
                    <Table title="2022" promedio={props.promedio[2022]/3} media={props.promedio[2022]/2} moda={0}/>
                </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default VictimasGenero;