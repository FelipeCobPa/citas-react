/* los componentes deben ser nombraso con la pimer letra en mayuscula
   se utiliza vite en este caso por eso, jsx */
function Header(){

    return(

            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimineto Pacientes {''}
                <span className="text-emerald-600">Veterinaria</span>
            </h1> 
       
    )

}

export default Header;