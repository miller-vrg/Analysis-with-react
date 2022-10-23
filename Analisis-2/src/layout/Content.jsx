import React from "react";
import axios from "axios";
import "./css/content.css";
import DemoLine from "../components/common/DemoLine";
import DemoColumn from "../components/common/DemoColumn";
import DemoColumnDouble from "../components/common/DemoColumnDouble";
import DemoPie from "../components/common/DemoPie";
import DemoBarHorinzontal from "../components/common/DemoBarHorizontal";
import Table from "../utils/Table";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {},
      agresor: {},
      escenario: {},
      sustancias:{},
      total_victima: 0,
      total_year: [],
      estado: true,
    };
    this.cargarDatos = this.cargarDatos.bind(this);
  }

  componentDidMount() {
    this.cargarDatos();
  }

  cargarDatos = () => {
    const year_2020 = {
      sexo_victima: {
        masculino: 0,
        femenino: 0,
      },
      clasificacion: {
        menores: 0,
        jovenes: 0,
        adultos: 0,
        adulto_mayor: 0,
      },
      convivencia: {
        si: 0,
        no: 0,
      },
      total: 0,
    };
    const year_2021 = {
      sexo_victima: {
        masculino: 0,
        femenino: 0,
      },
      clasificacion: {
        menores: 0,
        jovenes: 0,
        adultos: 0,
        adulto_mayor: 0,
      },
      convivencia: {
        si: 0,
        no: 0,
      },
      total: 0,
    };
    const year_2022 = {
      sexo_victima: {
        masculino: 0,
        femenino: 0,
      },
      clasificacion: {
        menores: 0,
        jovenes: 0,
        adultos: 0,
        adulto_mayor: 0,
      },
      convivencia: {
        si: 0,
        no: 0,
      },
      total: 0,
    };
    const agresor = {
      padre: 0,
      madre: 0,
      pareja: 0,
      familiar: 0,
    };
    const escenario = {
      hogar: 0,
      via_publica: 0,
      otro: 0,
    };
    const sustancias ={
        si: 0,
        no: 0,
    }
    const url = "https://www.datos.gov.co/resource/scei-6ce4.json";
    axios.get(url).then(({ data }) => {
      data.map((elements, i) => {
        const relacion = elements["relacion_con_la_victima"];
        let edad;
        if (
          relacion == "PAREJA" ||
          relacion == "MADRE" ||
          relacion == "PADRE" ||
          relacion == "FAMILIAR"
        ) {
          //----------- 2020 ------------
          if (elements["id_ano"] == "2020") {
            edad = parseInt(elements["edad_de_la_victima"]);
            //------------ convivencia ------------------------
            year_2020.convivencia.si +=
              elements["convive_con_el_agresor"] == "SI" && 1;
            year_2020.convivencia.no +=
              elements["convive_con_el_agresor"] == "NO" && 1;
            //------------ sustancias ------------------------
            sustancias.si +=
              elements["consumo_de_spa_de_la_victima"] == "SI" && 1;
            sustancias.no +=
              elements["consumo_de_spa_de_la_victima"] == "NO" && 1;
            //------------ clasificacion de edades ------------------------
            year_2020.clasificacion.menores += edad >= 0 && edad <= 11 && 1;
            year_2020.clasificacion.mayo += edad >= 0 && edad <= 11 && 1;
            year_2020.clasificacion.jovenes += edad >= 12 && edad <= 26 && 1;
            year_2020.clasificacion.adultos += edad >= 27 && edad <= 59 && 1;
            year_2020.clasificacion.adulto_mayor += edad >= 60 && 1;
            //------------ Genero ------------------------
            year_2020.sexo_victima.femenino +=
              elements["identidad_de_genero_de_la"] == "FEMENINO" && 1;
            year_2020.sexo_victima.masculino +=
              elements["identidad_de_genero_de_la"] == "MASCULINO" && 1;
            //------------- Agresor ----------------------
            agresor.padre +=
              elements["relacion_con_la_victima"] == "PADRE" && 1;
            agresor.madre +=
              elements["relacion_con_la_victima"] == "MADRE" && 1;
            agresor.pareja +=
              elements["relacion_con_la_victima"] == "PAREJA" && 1;
            agresor.familiar +=
              elements["relacion_con_la_victima"] == "FAMILIAR" && 1;
            //-------------------- Esenario -------------
            escenario.hogar += elements["escenario"] == "VIVIENDA" && 1;
            escenario.via_publica +=
              elements["escenario"] == "VÍA PUBLICA" && 1;
            escenario.otro +=
              elements["escenario"] != "HOGAR" &&
              elements["escenario"] != "VÍA PUBLICA" &&
              1;
            //--------------- Total de victimas ---------
            year_2020.total++;
          } else if (elements["id_ano"] == "2021") {
            //----------- 2021 ------------
            edad = parseInt(elements["edad_de_la_victima"]);
            //------------ convivencia ------------------------
            year_2021.convivencia.si +=
              elements["convive_con_el_agresor"] == "SI" && 1;
            year_2021.convivencia.no +=
              elements["convive_con_el_agresor"] == "NO" && 1;
            //------------ sustancias ------------------------
            sustancias.si +=
              elements["consumo_de_spa_de_la_victima"] == "SI" && 1;
            sustancias.no +=
              elements["consumo_de_spa_de_la_victima"] == "NO" && 1;
            //------------ clasificacion de edades ------------------------
            year_2021.clasificacion.menores += edad >= 0 && edad <= 11 && 1;
            year_2021.clasificacion.mayo += edad >= 0 && edad <= 11 && 1;
            year_2021.clasificacion.jovenes += edad >= 12 && edad <= 26 && 1;
            year_2021.clasificacion.adultos += edad >= 27 && edad <= 59 && 1;
            year_2021.clasificacion.adulto_mayor += edad >= 60 && 1;
            //------------ Genero ------------------------
            year_2021.sexo_victima.masculino +=
              elements["identidad_de_genero_de_la"] == "FEMENINO" && 1;
            year_2021.sexo_victima.femenino +=
              elements["identidad_de_genero_de_la"] == "MASCULINO" && 1;
            //------------- Agresor ----------------------
            agresor.padre +=
              elements["relacion_con_la_victima"] == "PADRE" && 1;
            agresor.madre +=
              elements["relacion_con_la_victima"] == "MADRE" && 1;
            agresor.pareja +=
              elements["relacion_con_la_victima"] == "PAREJA" && 1;
            agresor.familiar +=
              elements["relacion_con_la_victima"] == "FAMILIAR" && 1;
            //-------------------- Esenario -------------
            escenario.hogar += elements["escenario"] == "VIVIENDA" && 1;
            escenario.via_publica +=
              elements["escenario"] == "VÍA PUBLICA" && 1;
            escenario.otro +=
              elements["escenario"] != "HOGAR" &&
              elements["escenario"] != "VÍA PUBLICA" &&
              1;
            //--------------- Total de victimas ---------
            year_2021.total++;
          } else {
            //----------- 2022 ------------
            edad = parseInt(elements["edad_de_la_victima"]);
            //------------ convivencia ------------------------
            year_2022.convivencia.si +=
              elements["convive_con_el_agresor"] == "SI" && 1;
            year_2022.convivencia.no +=
              elements["convive_con_el_agresor"] == "NO" && 1;
            //------------ sustancias ------------------------
            sustancias.si +=
              elements["consumo_de_spa_de_la_victima"] == "SI" && 1;
            sustancias.no +=
              elements["consumo_de_spa_de_la_victima"] == "NO" && 1;
            //------------ clasificacion de edades ------------------------
            year_2022.clasificacion.menores += edad >= 0 && edad <= 11 && 1;
            year_2022.clasificacion.mayo += edad >= 0 && edad <= 11 && 1;
            year_2022.clasificacion.jovenes += edad >= 12 && edad <= 26 && 1;
            year_2022.clasificacion.adultos += edad >= 27 && edad <= 59 && 1;
            year_2022.clasificacion.adulto_mayor += edad >= 60 && 1;
            //------------ Genero ------------------------
            year_2022.sexo_victima.femenino +=
              elements["identidad_de_genero_de_la"] == "FEMENINO" && 1;
            year_2022.sexo_victima.masculino +=
              elements["identidad_de_genero_de_la"] == "MASCULINO" && 1;
            //------------- Agresor ----------------------
            agresor.padre +=
              elements["relacion_con_la_victima"] == "PADRE" && 1;
            agresor.madre +=
              elements["relacion_con_la_victima"] == "MADRE" && 1;
            agresor.pareja +=
              elements["relacion_con_la_victima"] == "PAREJA" && 1;
            agresor.familiar +=
              elements["relacion_con_la_victima"] == "FAMILIAR" && 1;
            //-------------------- Esenario -------------
            escenario.hogar += elements["escenario"] == "VIVIENDA" && 1;
            escenario.via_publica +=
              elements["escenario"] == "VÍA PUBLICA" && 1;
            escenario.otro +=
              elements["escenario"] != "HOGAR" &&
              elements["escenario"] != "VÍA PUBLICA" &&
              1;
            //--------------- Total de victimas ---------
            year_2022.total++;
          }
        }
      });
      const total = year_2020.total + year_2021.total + year_2022.total;
      this.setState({
        datos: {
          2020: year_2020,
          2021: year_2021,
          2022: year_2022,
        },
        agresor: agresor,
        escenario: escenario,
        total_victimas: total,
        sustancias:sustancias,
        total_year: [
          {
            year: "2020",
            value: year_2020.total,
          },
          {
            year: "2021",
            value: year_2021.total,
          },
          {
            year: "2022",
            value: year_2022.total,
          },
        ],
        estado: false,
      });
    });
  };

  render() {
    if (!this.state.estado) {
      const sexo_victimas_anuales = {
        2020:this.state.datos[2020].sexo_victima,
        2021:this.state.datos[2021].sexo_victima,
        2022:this.state.datos[2022].sexo_victima
      };
      const agresores=[
        {
          title: "Padre",
          value: this.state.agresor.padre,
        },
        {
          title: "Madre",
          value: this.state.agresor.madre,
        },
        {
          title: "Pareja",
          value: this.state.agresor.pareja,
        },
        {
          title: "Familiar",
          value: this.state.agresor.familiar,
        }
      ];
      const clasificacion__year = [
        {
          clasificaion: 'Menores',
          year: '2020',
          value: this.state.datos[2020].clasificacion.menores
        },
        {
          clasificaion: 'Jovenes',
          year: '2020',
          value: this.state.datos[2020].clasificacion.jovenes
        },
        {
          clasificaion: 'Adultos',
          year: '2020',
          value: this.state.datos[2020].clasificacion.adultos
        },
        {
          clasificacion: 'Tercera',
          year: '2020',
          value: this.state.datos[2020].clasificacion.adulto_mayor
        },
        {
          clasificaion: 'Menores',
          year: '2021',
          value: this.state.datos[2021].clasificacion.menores
        },
        {
          clasificaion: 'Jovenes',
          year: '2021',
          value: this.state.datos[2021].clasificacion.jovenes
        },
        {
          clasificaion: 'Adultos',
          year: '2021',
          value: this.state.datos[2021].clasificacion.adultos
        },
        {
          clasificacion: 'Tercera',
          year: '2021',
          value: this.state.datos[2021].clasificacion.adulto_mayor
        },
        {
          clasificaion: 'Menores',
          year: '2022',
          value: this.state.datos[2022].clasificacion.menores
        },
        {
          clasificaion: 'Jovenes',
          year: '2022',
          value: this.state.datos[2022].clasificacion.jovenes
        },
        {
          clasificaion: 'Adultos',
          year: '2022',
          value: this.state.datos[2022].clasificacion.adultos
        },
        {
          clasificacion: 'Tercera',
          year: '2022',
          value: this.state.datos[2022].clasificacion.adulto_mayor
        }
      ];
      const sustenacias = [
        {
          title: "Si",
          value: this.state.sustancias.si,
        },
        {
          title: "No",
          value: this.state.sustancias.no,
        }
      ];
      const ubiciacion = [
        {
          type:"Hogar",
          value:this.state.escenario.hogar
        },
        {
          type:"Via publica",
          value:this.state.escenario.via_publica
        },
        {
          type:"Otros",
          value:this.state.escenario.otro
        }
      ];
      const promedioTotal = (
        this.state.datos[2020].total +
        this.state.datos[2021].total +
        this.state.datos[2022].total);
      const promedioCalsificacion ={

        2020:this.state.datos[2020].clasificacion.menores +
        this.state.datos[2020].clasificacion.adulto_mayor +
        this.state.datos[2020].clasificacion.jovenes +
        this.state.datos[2020].clasificacion.adultos,

        2021: this.state.datos[2021].clasificacion.menores +
        this.state.datos[2021].clasificacion.adulto_mayor +
        this.state.datos[2021].clasificacion.jovenes +
        this.state.datos[2021].clasificacion.adultos,

        2022: this.state.datos[2022].clasificacion.menores +
        this.state.datos[2022].clasificacion.adulto_mayor +
        this.state.datos[2022].clasificacion.jovenes +
        this.state.datos[2022].clasificacion.adultos
      };
      const promedioGenero ={

        2020:this.state.datos[2020].sexo_victima.femenino +
        this.state.datos[2020].sexo_victima.masculino,

        2021:this.state.datos[2021].sexo_victima.femenino +
        this.state.datos[2021].sexo_victima.masculino,

        2022:this.state.datos[2022].sexo_victima.femenino +
        this.state.datos[2022].sexo_victima.masculino,
      };
      const promedioAgresor=(
        this.state.agresor.padre +
        this.state.agresor.madre +
        this.state.agresor.pareja +
        this.state.agresor.familiar
      );
      const promedioSustancias =(
        this.state.sustancias.si +
        this.state.sustancias.no
      );
      const link_genero = <a href="#genero">víctimas por género</a>
      const link1 = <a href="https://tusabogadosycontadores.co/blog/conozca-que-es-la-violencia-intrafamiliar-y-los-tipos-que-existen/">Leer más.</a>
      const link2 = <a href="https://www.juridicospenales.com/blog/que-es-la-violencia-intrafamiliar-en-colombia/">Leer más.</a>
      return (
        <>
          <main className="content">
           <h1 className="content__title">Violencia intrafamiliar en colombia</h1> 
           <h2 className="content__subtitle">2020-2022</h2>
           <p className="content__contexto">
           La violencia intrafamiliar (también denominada violencia intrafamiliar) 
           es aquella que se produce entre miembros de una misma familia y que 
           provoca a la víctima algún daño físico o psicológico. Se trata del uso 
           de la violencia en la familia. Por regla general, por vergüenza o miedo, 
           esta situación no se denuncia a las autoridades competentes. {link1}
            <br/>
            En los casos de violencia doméstica, las preocupaciones de 
            "no estar lo suficientemente seguro, no saber a quién contactar
            , no saber si denunciar o no" se encuentran entre los problemas 
            de salud pública en Colombia. La violencia doméstica es un 
            problema que afecta de manera desproporcionada a muchas familias 
            debido al principio constitucional de igualdad de derechos y 
            responsabilidades de los cónyuges y respeto mutuo de todos los 
            miembros. {link2}</p>
            <section className="content__card" id="conclusion">
              <h2>Total de victimas</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoLine datos={this.state.total_year}/>
                </div>
                <div className="content__interno">
                  <p className="content__interno-texto">
                  La gráfica nos muestra una comparación entre los años 2020, 
                  2021 y 2022, mostrando un aumentó en el año 2021 en 
                  comparación del año 2020 y el 2022 hasta el momento, pero 
                  no podemos descartar el hecho de que muchas personas no 
                  presentan estas denuncias, son más los casos que nunca sé 
                  Reportan.
                  </p>
                  <div className="content__table">
                    <Table promedio={promedioTotal} media={promedioTotal/2} moda={0}/>
                  </div>
                </div>
              </div>
            </section>
            <section className="content__card" id="">
              <h2>Clasificación de victimas</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoBarHorinzontal datos={clasificacion__year }/>
                </div>
                <div className="content__interno">
                  <p className="content__interno-texto">
                    Comparando en cada año veremos que la mayoría de víctimas 
                    son adultos, seguido de los jóvenes entre 12 y 26 años de 
                    edad, los niños quisas tengan una menor parte pero no 
                    podemos descartar la idea de que los niños no son tan libres 
                    como denunciar a sus padres, y para la minoría adultos mayores 
                    con solo una pequeña parte de casos vistos pero de igual forma 
                    algunos de hechos también son silenciados por sus propias familias.
                  </p>
                  <div className="content__table">
                  <Table title="2020" promedio={promedioCalsificacion[2020]/3} media={promedioCalsificacion[2020]/2} moda={0}/>
                  <Table title="2021" promedio={promedioCalsificacion[2021]/3} media={promedioCalsificacion[2021]/2} moda={0}/>
                  <Table title="2022" promedio={promedioCalsificacion[2022]/3} media={promedioCalsificacion[2022]/2} moda={0}/>
                </div>
                </div>
              </div>
            </section>
            <section className="content__card" id="genero">
              <h2>Victimas por genero</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoColumnDouble datos={sexo_victimas_anuales}/>
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
                    <Table title="2020" promedio={promedioGenero[2020]/3} media={promedioGenero[2020]/2} moda={0}/>
                    <Table title="2021" promedio={promedioGenero[2021]/3} media={promedioGenero[2021]/2} moda={0}/>
                    <Table title="2022" promedio={promedioGenero[2022]/3} media={promedioGenero[2022]/2} moda={0}/>
                </div>
                </div>
              </div>
            </section>
            <section className="content__card">
              <h2>Agresores</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoPie datos={agresores}/>
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
                    <Table promedio={promedioAgresor/3} media={promedioAgresor/2} moda={0}/>
                </div>
                </div>
              </div>
            </section>
            <section className="content__card">
              <h2>Casos por sustancias y sin sustancias</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoPie datos={sustenacias}/>
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
                    <Table promedio={promedioSustancias/3} media={promedioSustancias/2} moda={0}/>
                </div>
                </div>
              </div>
            </section>
            <section className="content__card">
              <h2>Ubiciacion del casos</h2>
              <div className="content__descipcion">
                <div className="content__descipcion___grafic">
                  <DemoColumn datos={ubiciacion} />
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
                    <Table promedio={promedioSustancias/3} media={promedioSustancias/2} moda={0}/>
                </div>
                </div>
              </div>
            </section>
          </main>
        </>
      );
    }
  }
}
