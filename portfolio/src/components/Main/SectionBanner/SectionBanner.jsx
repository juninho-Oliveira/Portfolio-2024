
import './SectionBanner.css'

import { LinkedinLogo, GithubLogo } from "phosphor-react"

export function SectionBanner() {
    return (
        <section className="container-nome-user" id="Home">

            <div className="container-grid container-nome">
                <div className="nome-do-portfolio">
                    <h4>Olá, eu sou</h4>
                    <h1>Junior Oliveira</h1>
                    <p>Desenvolvedor Front-end.</p>
                </div>


                <div className="redes-sociais">

                    <div className="cards-redes Linkedin">
                        <LinkedinLogo size={32} color='white'/>
                        <a href="https://www.linkedin.com/in/dami%C3%A3o-junior-6568531ab/" target="_blank"> Linkedin</a>
                    </div>

                    <div className="cards-redes Github">
                        <GithubLogo size={32} color='white'/>
                        <a href="https://github.com/juninho-Oliveira" target="_blank"> Github</a>
                    </div>

                </div>
            </div>
        </section>
    )
}