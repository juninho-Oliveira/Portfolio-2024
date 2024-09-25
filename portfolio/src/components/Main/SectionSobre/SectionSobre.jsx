import './SectionSobre.css'

export function SectionSobre () {
    return (
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
    )
}