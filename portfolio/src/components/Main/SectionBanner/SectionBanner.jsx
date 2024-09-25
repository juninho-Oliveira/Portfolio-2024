
import './SectionBanner.css'

export function SectionBanner() {
    return (
        <section className="container-nome-user" id="Home">

            <div className="container-grid container-nome">
                <div className="nome-do-portfolio">
                    <h4>Olá, eu sou</h4>
                    <h1>Junior Oliveira</h1>
                    <p>Desenvolvedor Front-end & UI Designer.</p>
                </div>


                <div className="redes-sociais">

                    <div className="cards-redes Linkedin">
                        {/* <img src="/imagem/linkedin.png" alt="Linkedin"> */}
                        <a href="https://www.linkedin.com/in/dami%C3%A3o-junior-6568531ab/" target="_blank"> Linkedin</a>
                    </div>

                    <div className="cards-redes Github">
                        {/* <img src="/imagem/Vector.png" alt="Github"> */}
                        <a href="https://github.com/juninho-Oliveira" target="_blank"> Github</a>
                    </div>

                </div>
            </div>
        </section>
    )
}