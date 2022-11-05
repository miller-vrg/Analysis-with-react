import React from "react";
import axios from "axios";
import "./css/content.css";
import TotalVictimas from "../components/common/section_victimas/TotalVictimas";
import ClasificacionVictimas from "../components/common/section_victimas/ClasificacionVictimas";
import VictimasGenero from "../components/common/section_victimas/VictimasGenero";
import Agresores from "../components/common/section_victimas/Agresores";
import CasosSustancias from "../components/common/section_victimas/CasosSustancias";
import UbicacionCasos from "../components/common/section_victimas/UbicacionesCasos";

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
      const link1 = <a href="https://tusabogadosycontadores.co/blog/conozca-que-es-la-violencia-intrafamiliar-y-los-tipos-que-existen/">Leer más.</a>
      const link2 = <a href="https://www.juridicospenales.com/blog/que-es-la-violencia-intrafamiliar-en-colombia/">Leer más.</a>
      return (
        <>
          <main className="content">
           <h1 className="content__title">Violencia intrafamiliar en los municios de tunja y boyaca (colombia)</h1> 
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
           <TotalVictimas promedio={promedioTotal} datos={this.state.total_year}/>
           <ClasificacionVictimas datos={clasificacion__year} promedio={promedioCalsificacion}/>
           <VictimasGenero promedio={promedioGenero} datos={sexo_victimas_anuales}/>
           <Agresores datos={agresores} promedio={promedioAgresor}/>
           <CasosSustancias datos={sustenacias} promedio={promedioSustancias}/>
           <UbicacionCasos datos={ubiciacion} promedio={promedioSustancias}/>
          </main>
        </>
      );
    }
  }
}
