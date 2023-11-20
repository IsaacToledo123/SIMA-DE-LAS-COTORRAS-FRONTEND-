import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AdministradorContext = createContext();

export function AdministradorContextProvider(props) {

      const [ingresos, setIngresos] = useState([]);
      const API_URL = import.meta.env.VITE_REACT_APP_API_URL
      const token = localStorage.getItem('token-admin');
      const [reservasCabañas, setReservasCabañas] = useState([]);
      const [reservasAventuras, setReservasAventuras] = useState([]);
      const [arregloOrdenado, setArregloOrdenado] = useState([]);
      const [ganaciasByFechaPago, setGananciasByFechaPago] = useState([]);
      const [ingresosOrdenados, setIngresosOrdenados] = useState([]);
      const [agregadoIngreso, setAgregadoIngreso] = useState(false);
      const [agregadoEgreso, setAgregadoEgreso] = useState(false);
      const [egresos, setEgresos] = useState([]);
      const [egresosOrdenados, setEgresosOrdenados] = useState([]);


      useEffect(() => {


            axios.get(`${API_URL}/api/reservaciones-cabaña/`)
                  .then(e => setReservasCabañas(e.data.reservaciones))
                  .catch(e => console.log(e))

            axios.get(`${API_URL}/api/reservaciones-aventura/`)
                  .then(e => setReservasAventuras(e.data.usuarios_con_reservacion))
                  .catch(e => console.log(e))

      }, []);

      useEffect(() => {

            axios.get(`${API_URL}/api/administrador/ingresos/`, {
                  headers: {
                        Authorization: `${token}`
                  }
            })
                  .then(e => {

                        if (e.status == 200) {

                              setIngresos(e.data.Ingresos)

                        }

                  })
                  .catch(e => console.log(e))

            axios.get(`${API_URL}/api/administrador/egresos/`, {

                  headers: {

                        Authorization: `${token}`

                  }

            })
                  .then(e => setEgresos(e.data.egresos))
                  .catch(e => console.log(e));

      }, [agregadoIngreso, agregadoEgreso]);



      useEffect(() => {

            const arregloCombinado = [...reservasCabañas, ...reservasAventuras];

            setArregloOrdenado(arregloCombinado.sort((a, b) => new Date(b.fecha_reservacion) - new Date(a.fecha_reservacion)))

            //  ===== ganancias por semana ===== //
            const ganancias = arregloCombinado.sort((a, b) => new Date(b.fecha_pago) - new Date(a.fecha_pago));

            const fechaActual = new Date()
            const semanaPasada = new Date(fechaActual);
            semanaPasada.setDate(fechaActual.getDate() - 7);

            const elementosRecientes = ganancias.filter(ingreso => new Date(ingreso.fecha_de_pago) > semanaPasada);

            setGananciasByFechaPago(elementosRecientes);

      }, [reservasCabañas, reservasAventuras]);

      useEffect(() => {

            const ingresosSort = ingresos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));            

            // Obtenemos las fechas para organizar
            const fechaActual = new Date()
            const semanaPasada = new Date(fechaActual);
            semanaPasada.setDate(fechaActual.getDate() - 7);

            const ingresosPorSemana = ingresosSort.filter(ingreso => new Date(ingreso.fecha) > semanaPasada);
            //const egresosPorSemana = egresosSort.filter(egreso => new Date(egreso.fecha) > semanaPasada);  
            //console.log(egresosPorSemana)          
            setIngresosOrdenados(ingresosPorSemana);

            //setEgresosOrdenados(egresosPorSemana);

      }, [ingresos]);

      useEffect(() => {

            const fechaActual = new Date()
            const semanaPasada = new Date(fechaActual);
            semanaPasada.setDate(fechaActual.getDate() - 7);
            const egresosSort = egresos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

            const egresosPorSemana = egresosSort.filter(egreso => {
                  
                  const fechaEgreso = new Date(egreso.fecha);
                  fechaEgreso.setDate(fechaEgreso.getDate() + 1);
                  return fechaEgreso > semanaPasada;

            });  
            setEgresosOrdenados(egresosPorSemana);  

      }, [egresos])

      return (

            <AdministradorContext.Provider value={{

                  ingresos,
                  reservasCabañas,
                  reservasAventuras,
                  arregloOrdenado,
                  ingresosOrdenados,
                  ganaciasByFechaPago,
                  setAgregadoIngreso,
                  setAgregadoEgreso,
                  egresosOrdenados

            }}>

                  {props.children}

            </AdministradorContext.Provider>

      )
}