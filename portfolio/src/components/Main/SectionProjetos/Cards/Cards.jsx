import './Cards.css'
import PropTypes from 'prop-types'
import { Link } from 'phosphor-react'

Cards.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    tecnologias: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

};

export function Cards ({titulo, descricao, tecnologias, url}) {
    return (
        <div className="cards-projetos">

        <div className="imagem-projetos">
            <h1>FOTO</h1>
        </div>

        <div className="texto-projetos">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <p><span>{tecnologias}</span></p>
        </div>

        <div className="cards-redes Linkedin" id="botao-cards">
            <Link size={32} color='white' />
            <a href={url} target="_blank"> Visualizar</a>
        </div>
    </div>
    )
}


