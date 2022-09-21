import Button from './evento/Button'

function Evento() { 
    function meuEvento() { 
        alert(`Ativado evento 1!`)
    }
   

    function segundoEvento() { 
        alert(`Ativado evento 2!`)
    }

    return (
        <div>
            <p>Clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro envento" />
            <Button event={segundoEvento} text="Segundo envento"/>
        </div>
    )
}

export default Evento