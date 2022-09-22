function Saudacao({ nome }) {
    
    function gerarSaudacao(algumNome) {
        return `Ola,${algumNome}`
    }


    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao