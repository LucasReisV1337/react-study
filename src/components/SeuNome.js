function SeuNome({setNome }) { 
    
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input
                type="text"
                name="text"
                placeholder="Qual e o seu nome?"
                onChange={(e) => setNome(e.target.value)}  
            />
        </div>
    )
}

export default SeuNome