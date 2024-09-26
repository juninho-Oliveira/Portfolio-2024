
import './SectionProjetos.css'
import { Cards } from './Cards/Cards'

export function SectionProjetos() {

    const id = 2;
    const imgSrc = 'https://t4.ftcdn.net/jpg/07/23/14/93/360_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg' 

    return (

        <section className="container-projetos" id="projetos">

            <div className="container-grid titulo">
                <h1>PROJETOS</h1>
            </div>

            <div className="container-grid container-cards">

                <Cards
                    key={id}
                    titulo="Nome do projeto"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius."
                    tecnologias="Tecnologias usadas no projeto"
                    url='https://portfolio-2023-two-green.vercel.app/'
                    imagem={imgSrc} />

            </div>

        </section>
    )
}