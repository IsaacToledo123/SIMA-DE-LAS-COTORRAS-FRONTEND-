import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdministradorContext = createContext();

export function AdministradorContextProvider(props) {

      const [ingresos, setIngresos] = useState([]);
      const API_URL = import.meta.env.VITE_REACT_APP_API_URL
      const [reservasCabañas, setReservasCabañas] = useState([]);
      const [reservasAventuras, setReservasAventuras] = useState([]);
      const [arregloOrdenado, setArregloOrdenado] = useState([]);
      const [ganaciasByFechaPago, setGananciasByFechaPago] = useState([]);
      const [ingresosOrdenados, setIngresosOrdenados] = useState([]);
      const [agregadoIngreso, setAgregadoIngreso] = useState(false);
      const [agregadoEgreso, setAgregadoEgreso] = useState(false);
      const [egresos, setEgresos] = useState([]);
      const [egresosOrdenados, setEgresosOrdenados] = useState([]);
      const [arregloAgrupadoByUser, setArregloAgrupadoByUser] = useState([]);
      const [agrupadosPorCategoria, setAgrupadosPorCategoria] = useState([]);
      const [egresosAgrupadosPorCategoria, setEsgresosAgrupadosPorCategoria] = useState([]);
      const [aventurasAgrupadoSemana, setAventurasAgrupadoSemana] = useState([]);
      const [cabañasAgrupadoSemana, setCabañasAgrupadoSemana] = useState([]);

      const fechaActual = new Date()
      const semanaPasada = new Date(fechaActual);
      semanaPasada.setDate(fechaActual.getDate() - 7);
      const token = localStorage.getItem('token-admin')
      const mensaje = "" + localStorage.getItem('token-admin')

      useEffect(() => {

            console.log("El token es:::" + localStorage.getItem('token-admin'))

      }, [])



      useEffect(() => {

            axios.get(`${API_URL}/api/reservaciones-cabaña/`)
                  .then(e => setReservasCabañas(e.data.reservaciones))
                  .catch(e => console.log(e))

            axios.get(`${API_URL}/api/reservaciones-aventura/`)
                  .then(e => setReservasAventuras(e.data.usuarios_con_reservacion))
                  .catch(e => console.log(e))
            //agregadoEgreso          

      }, []);

      useEffect(() => {

            axios.get(`${API_URL}/api/administrador/ingresos/`, {
                  headers: {
                        Authorization: `${token}`
                  }
            })
                  .then(e => setIngresos(e.data.Ingresos))
                  .catch(e => {
                        console.log(e)
                        if (e.response) {
                              // La solicitud fue realizada y el servidor respondió con un estado de e
                              console.error('Error de respuesta del servidor:', e.response.data);
                              console.error('Estado de e:', e.response.status);
                        } else if (e.request) {
                              // La solicitud fue realizada pero no se recibió respuesta
                              console.error('No se recibió respuesta del servidor:', e.request);
                        } else {
                              // Ocurrió un e durante la configuración de la solicitud
                              console.error('Error durante la configuración de la solicitud:', e.message);
                        }
                  })



      }, [token, agregadoIngreso, reservasAventuras, reservasCabañas]);

      useEffect(() => {

            console.log("El tojken es " + token)

            axios.get(`${API_URL}/api/administrador/egresos/`, {

                  headers: {

                        Authorization: `${token}`

                  }

            })
                  .then(e => setEgresos(e.data.egresos))
                  .catch(e => console.log(e));

      }, [agregadoEgreso, token, reservasAventuras, reservasCabañas]);

      useEffect(() => {

            console.log("Aqui los ingresos")
            console.log(ingresos);

            const ingresosSort = ingresos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

            const ingresosPorSemana = ingresosSort.filter(ingreso => new Date(ingreso.fecha) > semanaPasada);

            setIngresosOrdenados(ingresosPorSemana);

            const agrupadoPorCategoria = ingresosPorSemana.reduce((acumulador, objeto) => {
                  const { categoria } = objeto;

                  if (!acumulador[categoria]) {
                        acumulador[categoria] = [];
                  }

                  acumulador[categoria].push(parseFloat(objeto.monto));

                  return acumulador;
            }, {});

            const sumasPorCategoria = {};

            for (const categoria in agrupadoPorCategoria) {

                  if (Object.prototype.hasOwnProperty.call(agrupadoPorCategoria, categoria)) {
                        const cantidades = agrupadoPorCategoria[categoria];

                        const totalPorCategoria = cantidades.reduce((total, cantidad) => total + cantidad, 0);

                        sumasPorCategoria[categoria] = totalPorCategoria;
                  }
            }

            const arregloModificado = Object.entries(sumasPorCategoria).map(([clave, valor]) => ({
                  name: clave,
                  value: valor
            }));

            setAgrupadosPorCategoria(arregloModificado);

      }, [ingresos]);

      useEffect(() => {

            const arregloCombinado = [...reservasCabañas, ...reservasAventuras];

            setArregloOrdenado(arregloCombinado.sort((a, b) => new Date(b.fecha_reservacion) - new Date(a.fecha_reservacion)))

            //  ===== ganancias por semana ===== //
            const ganancias = arregloCombinado.sort((a, b) => new Date(b.fecha_pago) - new Date(a.fecha_pago));

            // const fechaActual = new Date()
            // const semanaPasada = new Date(fechaActual);
            // semanaPasada.setDate(fechaActual.getDate() - 7);

            const elementosRecientes = ganancias.filter(ingreso => new Date(ingreso.fecha_de_pago) > semanaPasada);

            setGananciasByFechaPago(elementosRecientes);

            // ======  filtramos sobre el arreglo de aventuras ===== //            
            const aventurasAgrupado = reservasAventuras.reduce((acumulador, objeto) => {
                  const { nombre_servicio } = objeto;

                  // Si la categoría no existe en el acumulador, créala con un arreglo vacío
                  if (!acumulador[nombre_servicio]) {
                        acumulador[nombre_servicio] = [];
                  }

                  // Agrega el objeto al arreglo correspondiente a la categoría
                  acumulador[nombre_servicio].push(parseFloat(objeto.pago));

                  return acumulador;
            }, {});

            const sumasPorCategoria = {};

            for (const categoria in aventurasAgrupado) {

                  if (Object.prototype.hasOwnProperty.call(aventurasAgrupado, categoria)) {
                        const cantidades = aventurasAgrupado[categoria];

                        // Sumar las cantidades para obtener el total por categoría
                        const totalPorCategoria = cantidades.reduce((total, cantidad) => total + cantidad, 0);

                        // Guardar el total en el nuevo objeto
                        sumasPorCategoria[categoria] = totalPorCategoria;
                  }
            }

            const arregloModificado = Object.entries(sumasPorCategoria).map(([clave, valor]) => ({
                  name: clave,
                  value: valor
            }));

            setAventurasAgrupadoSemana(arregloModificado);

            // ======  filtramos sobre el arreglo de cabañas ===== // 

            const cabañaAgrupado = reservasCabañas.reduce((acumulador, objeto) => {
                  const { nombre_servicio } = objeto;

                  // Si la categoría no existe en el acumulador, créala con un arreglo vacío
                  if (!acumulador[nombre_servicio]) {
                        acumulador[nombre_servicio] = [];
                  }

                  // Agrega el objeto al arreglo correspondiente a la categoría
                  acumulador[nombre_servicio].push(parseFloat(objeto.pago));

                  return acumulador;
            }, {});

            const sumasPorCategoriaCabaña = {};

            for (const categoria in cabañaAgrupado) {

                  if (Object.prototype.hasOwnProperty.call(cabañaAgrupado, categoria)) {
                        const cantidades = cabañaAgrupado[categoria];

                        // Sumar las cantidades para obtener el total por categoría
                        const totalPorCategoria = cantidades.reduce((total, cantidad) => total + cantidad, 0);

                        // Guardar el total en el nuevo objeto
                        sumasPorCategoriaCabaña[categoria] = totalPorCategoria;
                  }
            }

            const arregloModificadoCabaña = Object.entries(sumasPorCategoriaCabaña).map(([clave, valor]) => ({
                  name: clave,
                  value: valor
            }));

            console.log(arregloModificadoCabaña)
            setCabañasAgrupadoSemana(arregloModificadoCabaña);

      }, [reservasCabañas, reservasAventuras]);

      useEffect(() => {

            // Objeto para almacenar los objetos agrupados
            const objetosAgrupados = {};

            // Iterar sobre cada objeto en el arreglo
            arregloOrdenado.forEach(objeto => {
                  // Crear una clave única basada en la fecha
                  const clave = objeto.fecha_reservacion;

                  // Verificar si la clave ya existe en objetosAgrupados
                  if (objetosAgrupados[clave]) {
                        // Si existe, agregar información adicional al objeto existente
                        const usuarioExistente = objetosAgrupados[clave].find(
                              usuario => usuario.nombre_de_usuario === objeto.nombre_de_usuario
                        );

                        if (usuarioExistente) {
                              // Si el usuario ya existe, agregar información al usuario existente
                              usuarioExistente.telefonos.push(objeto.telefono_usuario);
                              usuarioExistente.emails.push(objeto.email_usuario);
                              usuarioExistente.servicios.push(objeto.nombre_servicio);
                              usuarioExistente.pagos.push(objeto.pago);

                        } else {
                              // Si el usuario no existe, crear un nuevo usuario con la información
                              objetosAgrupados[clave].push({
                                    nombre_de_usuario: objeto.nombre_de_usuario,
                                    fecha_reservacion: [objeto.fecha_reservacion],
                                    telefonos: [objeto.telefono_usuario],
                                    emails: [objeto.email_usuario],
                                    servicios: [objeto.nombre_servicio],
                                    pagos: [objeto.pago]
                              });
                        }
                  } else {
                        // Si no existe, crear un nuevo objeto con la información inicial
                        objetosAgrupados[clave] = [
                              {
                                    nombre_de_usuario: objeto.nombre_de_usuario,
                                    fecha_reservacion: [objeto.fecha_reservacion],
                                    telefonos: [objeto.telefono_usuario],
                                    emails: [objeto.email_usuario],
                                    servicios: [objeto.nombre_servicio],
                                    pagos: [objeto.pago]
                              }
                        ];
                  }
            });

            // Convertir el objeto agrupado de nuevo a un arreglo
            setArregloAgrupadoByUser(Object.values(objetosAgrupados).flat());

      }, [arregloOrdenado])


      useEffect(() => {

            // const fechaActual = new Date()
            // const semanaPasada = new Date(fechaActual);
            // semanaPasada.setDate(fechaActual.getDate() - 7);
            const egresosSort = egresos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

            const egresosPorSemana = egresosSort.filter(egreso => {

                  const fechaEgreso = new Date(egreso.fecha);
                  fechaEgreso.setDate(fechaEgreso.getDate() + 1);
                  return fechaEgreso > semanaPasada;

            });

            setEgresosOrdenados(egresosPorSemana);

            const agrupadoPorCategoria = egresosPorSemana.reduce((acumulador, objeto) => {
                  const { categoria } = objeto;

                  if (!acumulador[categoria]) {
                        acumulador[categoria] = [];
                  }

                  acumulador[categoria].push(parseFloat(objeto.monto));

                  return acumulador;
            }, {});

            const sumasPorCategoria = {};

            for (const categoria in agrupadoPorCategoria) {
                  if (Object.prototype.hasOwnProperty.call(agrupadoPorCategoria, categoria)) {
                        const cantidades = agrupadoPorCategoria[categoria];

                        // Sumar las cantidades para obtener el total por categoría
                        const totalPorCategoria = cantidades.reduce((total, cantidad) => total + cantidad, 0);

                        // Guardar el total en el nuevo objeto
                        sumasPorCategoria[categoria] = totalPorCategoria;
                  }
            }

            const arregloModificado = Object.entries(sumasPorCategoria).map(([clave, valor]) => ({
                  name: clave,
                  value: valor
            }));

            console.log("Los egresos por semana son así: ")
            setEsgresosAgrupadosPorCategoria(arregloModificado);

      }, [egresos, token])

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
                  egresosOrdenados,
                  arregloAgrupadoByUser,
                  agrupadosPorCategoria,
                  egresosAgrupadosPorCategoria,
                  aventurasAgrupadoSemana,
                  cabañasAgrupadoSemana

            }}>

                  {props.children}

            </AdministradorContext.Provider>

      )
}