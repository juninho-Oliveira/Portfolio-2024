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
      titulo: 'Ford Enter',
      data: "Maio 2024",
      descricao: "Participei como bolsista e me formei no Curso de Front-end da Ford Company com uma carga horária de 440 horas, realizado presencialmente no Senai do Ipiranga, na escola Conde José Vicente de Azevedo. O curso focou no desenvolvimento da interface gráfica de sites e aplicações, capacitando-me em habilidades como a criação de áreas de pesquisa e formulários interativos. Utilizei tecnologias como HTML, CSS, JavaScript, React, Bootstrap e Tailwind CSS. Além disso, tive acesso a treinamentos comportamentais, programa de mentoria, curso de inglês técnico e visitas a empresas de tecnologia.."
    },
    {
      id: 3,
      titulo: 'Vem Ser Tech',
      data: "Março 2024",
      descricao: "Participei como bolsista e me formei no Curso de Desenvolvimento Front-End, oferecido pelo iFood em parceria com a AdaTech, com uma carga horária de 324 horas. O curso abordou desde o desenvolvimento de front-end estático até a construção de front-end dinâmico com JavaScript Vanilla. Também incluiu tópicos como lógica de programação e programação orientada a objetos usando JavaScript e TypeScript. Além disso, explorei o uso do framework React, tanto em módulos básicos quanto avançados, proporcionando uma formação completa em desenvolvimento front-end."
    },
    {
      id: 4,
      titulo: 'Certificados',
      data: "Nov 2024-Atual",
      descricao: "Estou empolgado em compartilhar nossa jornada incrível durante o AdaHack 2024, organizado pela Ada Tech onde a equipe FE-3 se uniu"
    },
    {
      id: 5,
      titulo: 'Sobre o portfólio',
      data: "Nov 2024-Atual",
      descricao: "Desenvolvi o projeto do portfólio utilizando React e Vite, junto com a biblioteca Phosphor Icons para ícones. O projeto foi organizado em componentes como Header, Main e Footer, com cada seção do Main (Nome e Banner, Sobre, Experiência e Projetos) sendo separada e estilizada individualmente para evitar conflitos. Usei um arquivo db.json para armazenar os dados dos projetos e fiz o deploy no Render, simulando uma API que é consumida com Axios. Os dados são exibidos no componente Card, que atualiza seu estado com as informações da API. Também criei uma segunda API para a seção de Experiência, gerenciada em um arquivo separado. Todo o projeto segue boas práticas com commits semânticos."
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
            <li onClick={() => handleClick('Ford Enter')}><a>Ford Enter</a></li>
            <li onClick={() => handleClick('Vem Ser Tech')}><a>Vem Ser Tech</a></li>
            <li onClick={() => handleClick('Certificados')}><a>Certificados</a></li>
            <li onClick={() => handleClick('Sobre o portfólio')}><a>Sobre o portfólio</a></li>
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