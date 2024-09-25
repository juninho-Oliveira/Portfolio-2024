import './SectionSobre.css'
import { InstagramLogo, GithubLogo, LinkedinLogo, CloudArrowDown, EnvelopeSimple } from 'phosphor-react'

export function SectionSobre() {

  const Perfil = "https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/448795210_2178029879197218_7962828645894631869_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LQbjVPh8rpkQ7kNvgGENreh&_nc_ht=scontent-gru2-2.xx&_nc_gid=A-tVTRUHyCOITAgoBeg1fvm&oh=00_AYA0xxUE6-2DaujTyhF9DEIK5Zx3aU86aDM5709cDRuT3g&oe=66FA08FD";

  return (
    <section className="container-sobre" id="Sobre">

      <div className="container-grid container-texto-sobre">

        <div className="foto">
          <img src={Perfil} alt='Logotipo do App' />
        </div>

        <div className="texto-sobre">
          <h1>Sobre mim</h1>
          <p>Desenvolvedor Front-End com sólidos conhecimentos em HTML, CSS, JavaScript e React.

            Apaixonado por criar interfaces intuitivas e funcionais, com foco em performance e experiência do usuário.

            Tenho experiência prática em construção de aplicações web responsivas e escaláveis, sempre buscando expandir meu conhecimento com novas tecnologias e contribuir para projetos inovadores.

            Bolsista de programas de formação renomados como Ford e iFood.
          </p>


          <div className="redes-sociais">
            <a href="https://www.instagram.com/juninho_oliveirah/" target="_blank">< InstagramLogo size={32} /></a>
            <a href="https://www.linkedin.com/in/dami%C3%A3o-junior/" target="_blank">< LinkedinLogo size={32} /></a>
            <a href="https://github.com/juninho-Oliveira" target="_blank">< GithubLogo size={32} /></a>
          </div>

          <div className="curriculo">

            <div className="cards-redes Linkedin">
              <EnvelopeSimple size={32} />
              <a href="mailto:junior.oliveira05@icloud.com" > E-mail</a>
            </div>

            <div className="cards-redes Github">

              <CloudArrowDown size={32} />
              <a href="/assets/Damio-Junior-Oliveira.pdf" download="/assets/Damio-Junior-Oliveira.pdf"> Currículo</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}