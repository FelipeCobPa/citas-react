
const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
        {children} {/* este es el promp de mensaje, componente padre(formulario) hijo este de aqui */}
    </div>
  )
}

export default Error
