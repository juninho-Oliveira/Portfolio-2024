import { useState } from 'react'
import './SectionExperiencia.css'

export function SectionExperiencia() {

  const [texto, setTexto] = useState([{
    id: 1,
    titulo: 'Hackathon',
    data: "Nov 2024-Atual",
    descricao: "Participei do AdaHack 2024, onde minha equipe FE-3 desenvolveu uma plataforma que promove a diversidade, inclusão e melhora a cultura organizacional nas empresas. A plataforma permite que colaboradores acompanhem vagas de emprego, forneçam feedback sobre os processos de recrutamento e inclusão, enquanto recrutadores podem gerenciar candidaturas e acessar esses feedbacks para aprimorar suas práticas. Utilizamos dados analíticos para identificar áreas de melhoria nas empresas. Nossa solução foi elogiada pela banca avaliadora, composta por empresas como Cognizant e Scania Brasil, e o código-fonte está disponível no meu GitHub."
  }])

  const respostas = [
    {
      id: 1,
      titulo: 'Hackathon',
      data: "Nov 2024-Atual",
      descricao: "Participei do AdaHack 2024, onde minha equipe FE-3 desenvolveu uma plataforma que promove a diversidade, inclusão e melhora a cultura organizacional nas empresas. A plataforma permite que colaboradores acompanhem vagas de emprego, forneçam feedback sobre os processos de recrutamento e inclusão, enquanto recrutadores podem gerenciar candidaturas e acessar esses feedbacks para aprimorar suas práticas. Utilizamos dados analíticos para identificar áreas de melhoria nas empresas. Nossa solução foi elogiada pela banca avaliadora, composta por empresas como Cognizant e Scania Brasil, e o código-fonte está disponível no meu GitHub."
    },
    {
      id: 2,
      titulo: 'Ford',
      data: "Nov 2024-Atual",
      descricao: "Estou empolgado em compartilhar nossa jornada incrível durante o AdaHack 2024, organizado pela Ada Tech onde a equipe FE-3 se uniu"
    },
    {
      id: 3,
      titulo: 'vemSerTech',
      data: "Nov 2024-Atual",
      descricao: "Estou empolgado em compartilhar nossa jornada incrível durante o AdaHack 2024, organizado pela Ada Tech onde a equipe FE-3 se uniu"
    },
    {
      id: 4,
      titulo: 'certificados',
      data: "Nov 2024-Atual",
      descricao: "Estou empolgado em compartilhar nossa jornada incrível durante o AdaHack 2024, organizado pela Ada Tech onde a equipe FE-3 se uniu"
    },
    {
      id: 5,
      titulo: 'sobre',
      data: "Nov 2024-Atual",
      descricao: "Estou empolgado em compartilhar nossa jornada incrível durante o AdaHack 2024, organizado pela Ada Tech onde a equipe FE-3 se uniu"
    }
  ]

  let nome = []

  const handleClick = (valor) => {
    nome = respostas.filter((ele) => ele.titulo === valor)
    setTexto(nome)

  };

  //console.log(texto.map(ele => ele.titulo))


  return (

    <section className="container-grid container-cor" id="experiencia">

      <div className="experiencia">
        <h1>experiência</h1>
        <div className="container-experiencia">
          <ul>
            <li onClick={() => handleClick('Hackathon')}>AdaHack 2024</li>
            <li onClick={() => handleClick('Ford')}>Ford Enter</li>
            <li onClick={() => handleClick('vemSerTech')}>Vem Ser Tech</li>
            <li onClick={() => handleClick('certificados')}>Certificados</li>
            <li onClick={() => handleClick('sobre')}>Sobre o portfólio</li>
          </ul>
        </div>
      </div>

      <div className="professor">

        {texto.map((ele) =>
        (
          <>
            <div key={ele.id} className="texto-professor">
              <h3>{ele.titulo}</h3>
              <p >{ele.data}</p>
            </div>

            <p>{ele.descricao}</p>
          </>

        )
        )}

      </div>

    </section>
  )
}