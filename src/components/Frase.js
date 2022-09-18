import styles from './Frase.module.css'

function Frase() { 
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Componente com uma frase para testar CSS!</p>
        </div>
    )
}

export default Frase