
import './Header.css'
import { List, XCircle } from 'phosphor-react'


export function Header() {
  return (
    <header>
      <div className="container-menu container-grid">
        <h1>Portfólio</h1>

        <nav className="links" id="menuLinks">
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Sobre">Sobre mim</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>

          <div className="menu-icon">
            <List size={32} color='white' />
            {/* <XCircle size={32} color='white'/> */}
          </div>
        </nav>
      </div>
    </header>
  )
}