
import { useState } from 'react'
import './Header.css'
import { List, XCircle } from 'phosphor-react'


export function Header() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu)
  };

  return (
    <header>
      <div className="container-menu container-grid">
        <h1>Portfólio</h1>

        <nav className="links">

          <ul className={menu ? 'active' : ''}>
            <li><a href="#Home" onClick={handleClick}>Home</a></li>
            <li><a href="#Sobre" onClick={handleClick}>Sobre mim</a></li>
            <li><a href="#experiencia" onClick={handleClick}>Experiência</a></li>
            <li><a href="#projetos" onClick={handleClick}>Projetos</a></li>
          </ul>

          <div className="menu-icon" onClick={handleClick}>
            {menu ? <XCircle size={32} color='white' />
              : <List size={32} color='white' />}
          </div>
        </nav>
      </div>
    </header>
  )
}