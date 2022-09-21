import { useState} from 'react'

function Condicional() { 

    const [email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()




    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)

    }


    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input
                    type="email"
                    placeholder='Digite o seu e-mail...'
                    onChange={(e) =>
                    setEmail(e.target.value)}
                />
                <button type='submit' onClick={enviarEmail}>
                    Enviar e-mail
                </button>
                {userEmail && (
                    <div>
                        <p>o e-mail do usuário é: {userEmail}</p>

                    </div>
                )}
            </form>
        </div>
    )
}

    
export default Condicional