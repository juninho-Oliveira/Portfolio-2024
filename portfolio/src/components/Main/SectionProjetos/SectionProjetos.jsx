
import './SectionProjetos.css'
import { Cards } from './Cards/Cards'

export function SectionProjetos() {

    const resultados = [
        {
            id: 1,
            imgSrc: 'https://images4.alphacoders.com/133/thumb-1920-1331483.png',
            titulo: "Nome do projeto",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
            tecnologias: "Tecnologias usadas no projeto",
            url: 'https://portfolio-2023-two-green.vercel.app/',
        },
        {
            id: 2,
            imgSrc: 'https://images2.alphacoders.com/564/thumb-1920-564835.jpg',
            titulo: "Nome do projeto",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
            tecnologias: "Tecnologias usadas no projeto",
            url: 'https://portfolio-2023-two-green.vercel.app/',
        },
    ]

    const quantidadeProjetos = resultados.length


    return (

        <section className="container-projetos" id="projetos">

            <div className="container-grid titulo">
                <h1>PROJETOS</h1>
                <p>Quantidade de projetos <span>{quantidadeProjetos}</span></p>
            </div>

            <div className="container-grid container-cards">

                {resultados.map((resp) => {
                    return (
                        <Cards
                            key={resp.id}
                            titulo={resp.titulo}
                            descricao={resp.descricao}
                            tecnologias={resp.tecnologias}
                            url={resp.url}
                            imagem={resp.imgSrc} />
                    )
                })}

            </div>

        </section>
    )
}