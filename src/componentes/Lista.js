import Item from './Itens'

function List (){
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento ={1985} />
            <Item marca="Fiat" ano_lancamento ={1964}/>
            <Item marca="Renoult" />
        </ul>
        </>
    )
}

export default List