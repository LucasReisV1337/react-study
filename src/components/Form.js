function Form() { 
    function cadastarUsuario(e) { 
        e.preventDefault()
        alert("Usuário cadastrado")
    }


    return (
       <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
       </div>
   ) 
}

export default Form