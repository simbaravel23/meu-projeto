import PropTypes from 'prop-types'

function Itens({marca, ano_lancamento}){
    return(
        <>
          <li>
            {marca} - {ano_lancamento}</li>

        </>
    )
}


Itens.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
    
}
Itens.defaultProps = {
    marca: ' Faltaou a marca',
    ano_lancamento: 0,
}
export default Itens