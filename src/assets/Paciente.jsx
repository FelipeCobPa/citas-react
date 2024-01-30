
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente')

        if(respuesta){
            eliminarPaciente(id)
        }
    }

   const {nombre, propietario, email, fecha, sintomas, id } = paciente /* aplicar distructuring */
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"> {/* px-5 va agregar un pading de 5 a la izquierda y derecha */}
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} {/* mb-magin botton de 3 */}
              <span className="font-normal normal-case">{nombre}</span> {/* normal-case es para que no este en mayusculas */}
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''} {/* mb-magin botton de 3 */}
              <span className="font-normal normal-case">{propietario}</span> {/* normal-case es para que no este en mayusculas */}
          </p>
          
          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} {/* mb-magin botton de 3 */}
              <span className="font-normal normal-case">{email}</span> {/* normal-case es para que no este en mayusculas */}
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''} {/* mb-magin botton de 3 */}
              <span className="font-normal normal-case">{fecha}</span> {/* normal-case es para que no este en mayusculas */}
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''} {/* mb-magin botton de 3 */}
              <span className="font-normal normal-case">{sintomas}</span> {/* normal-case es para que no este en mayusculas */}
          </p>

          <div className="flex justify-between mt-10">
            <button type="button"
            className="py-2 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase rounded-lg"
            onClick={() => {
                setPaciente(paciente)
            }}
            >Editar</button>

            <button type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}
            >Eliminar</button>
            </div>
    </div>
  )
}

export default Paciente
