import './SectionSobre.css'
import Perfil from '../../../../public/assets/Perfil.png'
import { InstagramLogo, GithubLogo, LinkedinLogo, CloudArrowDown, EnvelopeSimple } from 'phosphor-react'

export function SectionSobre() {

  //const Perfil = "https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/448795210_2178029879197218_7962828645894631869_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LQbjVPh8rpkQ7kNvgGENreh&_nc_ht=scontent-gru2-2.xx&_nc_gid=A-tVTRUHyCOITAgoBeg1fvm&oh=00_AYA0xxUE6-2DaujTyhF9DEIK5Zx3aU86aDM5709cDRuT3g&oe=66FA08FD";

  return (
    <section className="container-sobre" id="Sobre">

      <div className="container-grid container-texto-sobre">

        <section className='secao-sobre'>
          <div className="foto">
            <img src={Perfil} alt='Logotipo do App' />
          </div>

          <div className="texto-sobre">

            <div className='Sobre'>
              <h1>Sobre mim</h1>
              <p>🚀 Desenvolvedor Front-End | React | TypeScript | JavaScript | HTML | CSS <br />

                Sou um Desenvolvedor Front-End em constante evolução, com foco em construir interfaces modernas, acessíveis e com excelente performance. Tenho experiência prática com React, TypeScript, JavaScript, HTML e CSS, desenvolvendo aplicações responsivas e escaláveis com atenção especial à experiência do usuário. <br />

                🎯 Busco oportunidades em empresas de tecnologia onde eu possa aplicar meus conhecimentos, colaborar em equipe e continuar aprendendo com projetos desafiadores e inovadores.<br />

                🧠 Estudo continuamente as melhores práticas do mercado, versionamento com Git, consumo de APIs, componentização, hooks e tipagem com TypeScript. Atualmente, também estou aprendendo Python na faculdade, expandindo meu leque de conhecimentos e fortalecendo minha lógica de programação.<br />

                💼 Fui bolsista em programas de formação oferecidos por empresas como <a href="https://www.ford.com.br/sobre-a-ford/ford-enter/" target="_blank"> Ford</a> e <a href="https://ada.tech/sou-aluno/programas/ifood-vem-ser-tech" target="_blank">iFood.</a>, onde tive contato com projetos reais e ampliei minha visão sobre desenvolvimento ágil e trabalho em equipe.<br />

                👨‍💻 Stack principal: React, TypeScript, JavaScript (ES6+), HTML5, CSS3 (Sass/SCSS), Git, GitHub e Python.<br />

                📫 Aberto a novas oportunidades, projetos desafiadores e conexões com profissionais da área de tecnologia.
              </p>
            </div>


            <div className="redes-sociais">
              <a href="https://www.instagram.com/juninho_oliveirah/" target="_blank">< InstagramLogo size={32} /></a>
              <a href="https://www.linkedin.com/in/dami%C3%A3o-junior/" target="_blank">< LinkedinLogo size={32} /></a>
              <a href="https://github.com/juninho-Oliveira" target="_blank">< GithubLogo size={32} /></a>
            </div>

            <div className="curriculo">

              <div className="cards-redes Linkedin">
                <a href="mailto:junior.oliveira05@icloud.com" > <EnvelopeSimple size={32} /> E-mail</a>
              </div>

              <div className="cards-redes Github">
                <a href="/assets/Damio-Junior-Oliveira.pdf" download="/assets/Damio-Junior-Oliveira.pdf"> <CloudArrowDown size={32} /> Currículo</a>
              </div>

            </div>

          </div>
        </section>

      </div>
    </section>
  )
}