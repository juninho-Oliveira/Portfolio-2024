import './SectionExperiencia.css'

export function SectionExperiencia () {
    return (

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
    )
}