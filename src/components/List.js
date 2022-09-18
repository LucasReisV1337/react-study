import Item from "./Item"

function List() { 
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={2018}/>
                <Item marca="BMW" lancamento={2012}/>
                <Item marca="Audi" lancamento={2021} />
            </ul>
        </>
    )
}

export default List

// Utilizando fragments <>