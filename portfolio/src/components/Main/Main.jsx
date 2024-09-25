import './Main.css'


export function Main () {
    return (
        <main>

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
{/* <!--segunda parte do main sobre mim--> */}
    <section className="container-sobre" id="Sobre">

      <div className="container-grid container-texto-sobre">

          <div className="foto">
            {/* <img src="/imagem/perfil.jpg" alt="foto do user"> */}
          </div>

          <div className="texto-sobre">
            <h1>Sobre mim</h1>
            <h4>Guarantã, Brasil</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit.</p>
          

          <div className="redes-sociais">
            {/* <img src="/imagem/twitter.png" alt="twitter">
            <img src="/imagem/twitch.png" alt="twitch">
            <img src="/imagem/youtube.png" alt="youtube">
            <img src="/imagem/figma.png" alt="figma">
            <img src="/imagem/codepen.png" alt="codepen">
            <img src="/imagem/facebook.png" alt="facebook"> */}
          </div>

          <div className="curriculo">

              <div className="cards-redes Linkedin">
                {/* <img src="/imagem/mail.png" alt="Currículo"> */}
                <a href="#" target="_blank"> E-mail</a>
              </div>

            <div className="cards-redes Github">
              {/* <img src="/imagem/download-cloud.png" alt="E-mail"> */}
              <a href="#" target="_blank"> Currículo</a>
            </div>
          
          </div>
          
          </div>
          
        </div>
    </section>

    {/* <!--terceira parte EXPERIÊNCIA--> */}

    <section className="container-grid container-cor" id="experiencia">

      <div className="experiencia">
        <h1>experiência</h1>
        <div className="container-experiencia">
          <ul>
            <li><a href="#" id="digital-house">Digital House</a></li>
            <li><a href="#">Código Fonte TV</a></li>
            <li><a href="#">Zuplae</a></li>
            <li><a href="#">ContWeb</a></li>
            <li><a href="#">iuricode</a></li>
            <li><a href="#">Freelancer</a></li>
          </ul>
        </div>
      </div>

      <div className="professor">

        <div className="texto-professor">
          <h3>Professor conteudista em Frontend</h3>
          <p>Nov 2021-Atual</p>
        </div>

        <p><span>Digital House</span></p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.</p>
      </div>

    </section>

    {/* <!--quarta parte do main projetos--> */}
    <section className="container-projetos" id="projetos">

      <div className="container-grid titulo">
        <h1>PROJETOS</h1>
      </div>

      <div className="container-grid container-cards">

        <div className="cards-projetos">

          <div className="imagem-projetos">
            <h1>FOTO</h1>
          </div>

          <div className="texto-projetos">
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <p><span>Tecnologias usadas no projeto</span></p>
          </div>
          
          <div className="cards-redes Linkedin" id="botao-cards">
            {/* <img src="/imagem/link.png" alt="E-mail"> */}
            <a href="#" target="_blank"> Visualizar</a>
          </div>
        </div>

        <div className="cards-projetos">

          <div className="imagem-projetos">
            <h1>FOTO</h1>
          </div>

          <div className="texto-projetos">
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <p><span>Tecnologias usadas no projeto</span></p>
          </div>
          
          <div className="cards-redes Linkedin" id="botao-cards">
            {/* <img src="/imagem/link.png" alt="E-mail"> */}
            <a href="#" target="_blank"> Visualizar</a>
          </div>
        </div>

        <div className="cards-projetos">

          <div className="imagem-projetos">
            <h1>FOTO</h1>
          </div>

          <div className="texto-projetos">
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <p><span>Tecnologias usadas no projeto</span></p>
          </div>
          
          <div className="cards-redes Linkedin" id="botao-cards">
            {/* <img src="/imagem/link.png" alt="E-mail"> */}
            <a href="#" target="_blank"> Visualizar</a>
          </div>
        </div>

        <div className="cards-projetos">

          <div className="imagem-projetos">
            <h1>FOTO</h1>
          </div>

          <div className="texto-projetos">
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <p><span>Tecnologias usadas no projeto</span></p>
          </div>
          
          <div className="cards-redes Linkedin" id="botao-cards">
            {/* <img src="/imagem/link.png" alt="E-mail"> */}
            <a href="#" target="_blank"> Visualizar</a>
          </div>
        </div>

      </div>

    </section>
  </main>
  
    )
}