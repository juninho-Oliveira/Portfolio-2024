
import './SectionBanner.css'
import { Typewriter } from 'react-simple-typewriter';

import { LinkedinLogo, GithubLogo } from "phosphor-react"
import { useState, useEffect } from 'react';

export function SectionBanner() {

    const [showH1, setShowH1] = useState(false);
    const [showP, setShowP] = useState(false);

    // Controla a sequência de exibição
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowH1(true);
        }, 1500); // Espera o h4 terminar de digitar (ajuste conforme necessário)

        const timer2 = setTimeout(() => {
            setShowP(true);
        }, 3000); // Espera o h1 terminar de digitar (ajuste conforme necessário)

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <section className="container-nome-user" id="Home">

            <div className="container-grid container-nome">
                <div className="nome-do-portfolio">
                    <h4>
                        <Typewriter
                            words={['Olá, eu sou']}
                            loop={1}
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h4>
                    {showH1 && (
                        <h1>
                            <Typewriter
                                words={['Damião Junior']}
                                loop={1}
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                    )}
                    {showP && (
                        <p>
                            <Typewriter
                                words={['Desenvolvedor Front-end.']}
                                loop={1}
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
                    )}
                </div>

                <div className="redes-sociais">

                    <div className="cards-redes Linkedin">

                        <a href="https://www.linkedin.com/in/dami%C3%A3o-junior-6568531ab/" target="_blank"> <LinkedinLogo size={32} color='white' /> Linkedin</a>
                    </div>

                    <div className="cards-redes Github">

                        <a href="https://github.com/juninho-Oliveira" target="_blank"> <GithubLogo size={32} color='white' /> Github</a>
                    </div>

                </div>
            </div>
        </section>
    )
}