
import './Style.css'


export function Header () {
    return (
        <header>
        <div className="container-menu container-grid">
          <h1>Portfólio</h1>
    
          <nav className="links" id="menuLinks">
            <ul>
              <li>Home</li>
              <li>Sobre mim</li>
              <li>Experiência</li>
              <li>Projetos</li>
            </ul>
            
            <div className="menu-icon">
              <h1>Logo</h1>
          </div>
          </nav>
        </div>
      </header>
    )
}