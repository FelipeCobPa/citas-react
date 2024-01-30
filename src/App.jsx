import {useState, useEffect} from 'react'
import Formulario from "./assets/Formulario"
import Header from "./assets/Header"
import ListadoPaciente from "./assets/ListadoPaciente"



function App() {

  const [pacientes, setPacientes] = useState([]) /* este es un arreglo con objetos de pacientes */
  const [paciente, setPaciente] = useState({}) /* como el otro esta ñlleno de objetos pues este es un objeto porque vamos a tomar uno solo */

  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; /* convertir un arrglo a objeto, javascript no entiende arreglo pero los da como objetos */
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, []) /* cuando le pasas un arreglo vacio significa que solo se va a ejecutar un vez */ 

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id) /* va a traer los demas porque esos son los que se van a quedar  */
    setPacientes(pacientesActualizados)
  }

  return ( 
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex"> {/* en el tamaño mediano aplicale un media query */}
          <Formulario 
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            paciente = {paciente}
            setPaciente = {setPaciente}
          />
          <ListadoPaciente
            pacientes = {pacientes}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
           />   
        </div>
        
      </div>
      

    </>
  )
}

export default App
