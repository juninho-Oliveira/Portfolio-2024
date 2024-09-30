import { useState } from 'react'
import './SectionExperiencia.css'

export function SectionExperiencia() {

  const [texto, setTexto] = useState([{
    id: 1,
    titulo: 'Hackathon',
    data: "Abril 2024",
    descricao: "Participei do AdaHack 2024, onde minha equipe FE-3 desenvolveu uma plataforma que promove a diversidade, inclusão e melhora a cultura organizacional nas empresas. A plataforma permite que colaboradores acompanhem vagas de emprego, forneçam feedback sobre os processos de recrutamento e inclusão, enquanto recrutadores podem gerenciar candidaturas e acessar esses feedbacks para aprimorar suas práticas. Utilizamos dados analíticos para identificar áreas de melhoria nas empresas. Nossa solução foi elogiada pela banca avaliadora, composta por empresas como Cognizant e Scania Brasil, e o código-fonte está disponível no meu GitHub."
  }])

  const respostas = [
    {
      id: 1,
      titulo: 'Hackathon',
      data: "Abril 2024",
      descricao: "Participei do AdaHack 2024, onde minha equipe FE-3 desenvolveu uma plataforma que promove a diversidade, inclusão e melhora a cultura organizacional nas empresas. A plataforma permite que colaboradores acompanhem vagas de emprego, forneçam feedback sobre os processos de recrutamento e inclusão, enquanto recrutadores podem gerenciar candidaturas e acessar esses feedbacks para aprimorar suas práticas. Utilizamos dados analíticos para identificar áreas de melhoria nas empresas. Nossa solução foi elogiada pela banca avaliadora, composta por empresas como Cognizant e Scania Brasil, e o código-fonte está disponível no meu GitHub."
    },
    {
      id: 2,
      titulo: 'Ford',
      data: "Maio 2024",
      descricao: "Participei e me formei no Curso de Front-end da Ford Company com uma carga horária de 440 horas, realizado presencialmente no Senai do Ipiranga, na escola Conde José Vicente de Azevedo. O curso focou no desenvolvimento da interface gráfica de sites e aplicações, capacitando-me em habilidades como a criação de áreas de pesquisa e formulários interativos. Utilizei tecnologias como HTML, CSS, JavaScript, React, Bootstrap e Tailwind CSS. Além disso, tive acesso a treinamentos comportamentais, programa de mentoria, curso de inglês técnico e visitas a empresas de tecnologia.."
    },
    {
      id: 3,
      titulo: 'vemSerTech',
      data: "Março 2024",
      descricao: "Participei como bolsista no Curso de Desenvolvimento Front-End, oferecido pelo iFood em parceria com a AdaTech, com uma carga horária de 324 horas. O curso abordou desde o desenvolvimento de front-end estático até a construção de front-end dinâmico com JavaScript Vanilla. Também incluiu tópicos como lógica de programação e programação orientada a objetos usando JavaScript e TypeScript. Além disso, explorei o uso do framework React, tanto em módulos básicos quanto avançados, proporcionando uma formação completa em desenvolvimento front-end."
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
            <li onClick={() => handleClick('Hackathon')}><a>AdaHack 2024</a></li>
            <li onClick={() => handleClick('Ford')}><a>Ford Enter</a></li>
            <li onClick={() => handleClick('vemSerTech')}><a>Vem Ser Tech</a></li>
            <li onClick={() => handleClick('certificados')}><a>Certificados</a></li>
            <li onClick={() => handleClick('sobre')}><a>Sobre o portfólio</a></li>
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