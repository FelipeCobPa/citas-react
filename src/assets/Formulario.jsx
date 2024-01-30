import {useState, useEffect} from 'react';
/* el State es en que estador esta nuestra aplicación  */
/* rafce */
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => { /* aplicaos destructuring para extraiga los datos */

  const [nombre, setNombre] = useState('') /* nombre de la variable = valor inicial */
  const [propietario, setPropietario] = useState('') /* nombre de la variable = valor inicial */
  const [email, setEmail] = useState('') /* nombre de la variable = valor inicial */
  const [fecha, setFecha] = useState('') /* nombre de la variable = valor inicial */
  const [sintomas, setSintomas] = useState('') /* nombre de la variable = valor inicial */

  const [error, setError] = useState(false)

  useEffect( () => { /* escuchar por los cambios que sucedan en alguna parte de nuestro state */
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])/* esta leyendo los cambios en el objeto de paciente */

  /* este es para tener un id unico y que se pueda diferenciar de los otra¿s y no salga el error  */
  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
      e.preventDefault()

      //Validacion de formulario
      if([nombre, propietario, email, fecha, sintomas]. includes('')) { //si uno de estos campos incluye un campo vacio
        console.log('Hay al menos un campo vacio')  
        
        setError(true)
        return
      }
 
      setError(false) /* para que la variable pase a false, para que se desaparezca la alerta */
      //Objeto de pacientes
      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
      }

      if(paciente.id){
        //Editando el registro
        objetoPaciente.id = paciente.id /* este objeto paciente es el que tiene el actualizado */
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === /* va a iterar en cada objeto y compara si es iagual el id de state del que se agg con el que esta en el formulario pues se ejecuta el codigo de objetopaciente actualizado*/
          paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)

        setPaciente({})

      }else{ /* se pasa hacie el else porque es un nuevo registro */
      objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente]) /* tomamos un copia de los qu ehay en pacientes y le pasamso el nuevo arreglo que se asigna a setpacientes */
      }

      

      //reiniciar el form 
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5"> {/* lg tamaño mas grande del media query, -2/5 quiere decir 40% */}
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-emerald-600 font-bold">Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"> {/* shadow, sombra mediana */}

        {/* ---Mensaje de error-- */}
        {error && <Error> 
            <p>Todos los campos son obligatorios</p>
            {/* se puede pasar multiple codigo html para asi no tener muchos propms  */} 
        </Error>} {/* && es si, error es true se muestra el mensaje */}  

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota
          </label>

          <input
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /* w-full, va hacer que tome todo el ancho */
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)  } /* es como un addeventListener, cada que esta cambiando */
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario
          </label>

          <input
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /* w-full, va hacer que tome todo el ancho */
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)  }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email
          </label>

          <input
              id="email"
              type="email"
              placeholder="Email contacto"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /* w-full, va hacer que tome todo el ancho */
              value={email}
              onChange={ (e) => setEmail(e.target.value)  }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">ALTA
          </label>

          <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /* w-full, va hacer que tome todo el ancho */
              value={fecha}
              onChange={ (e) => setFecha(e.target.value)  }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas
          </label>
          <textarea 
            id="sintomas" 
            className="border-2 w-full  p-2 mt-2 block text-gray-700  font-bold"
            placeholder="Describe los sintomas"
            value={sintomas}
              onChange={ (e) => setSintomas(e.target.value)  }
            />

        </div>

        <input type="submit"
        className="bg-emerald-600 w-full p-3 text-white uppercase font-bold hover:bg-emerald-700 cursor-pointer"
        value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        

         />
      </form>

    </div>
  )
}

export default Formulario
