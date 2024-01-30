
import Paciente from './Paciente'


const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">{/* este toma el resto que es 3/5, h-screen overflow-y-scroll con eso voy a tener un scroll de iun lado pero estatico del otro */}

        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
              <span className="text-emerald-600 font-bold">Pacientes y Citas</span>
              </p>
  
            {pacientes.map( (paciente) =>{ /* array para recorrer todos los que hay  */
            return (
              <Paciente 
                key={paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
              />
            )
              
            })} 
           </>
        ):(
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando pacientes {''}
              <span className="text-emerald-600 font-bold">y aparecerán en este lugar </span>
              </p>
          </>
        )}
    </div>
      
  )
}

export default ListadoPaciente
