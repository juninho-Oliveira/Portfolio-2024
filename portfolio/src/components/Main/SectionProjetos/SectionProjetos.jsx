
import './SectionProjetos.css'
import { Cards } from './Cards/Cards'

export function SectionProjetos() {

    const id = 2;
    const imgSrc = 'https://images4.alphacoders.com/133/thumb-1920-1331483.png'
    const titulo = "Nome do projeto"
    const descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius."
    const tecnologias = "Tecnologias usadas no projeto"
    const url = 'https://portfolio-2023-two-green.vercel.app/'

    const quantidadeProjetos = 20


    return (

        <section className="container-projetos" id="projetos">

            <div className="container-grid titulo">
                <h1>PROJETOS</h1>
                <p>Quantidade de projetos <span>{quantidadeProjetos}</span></p>
            </div>

            <div className="container-grid container-cards">

                <Cards
                    key={id}
                    titulo={titulo}
                    descricao={descricao}
                    tecnologias={tecnologias}
                    url={url}
                    imagem={imgSrc} />


                <Cards
                    key={id}
                    titulo={titulo}
                    descricao={descricao}
                    tecnologias={tecnologias}
                    url={url}
                    imagem={imgSrc} />

            </div>

        </section>
    )
}