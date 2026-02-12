import { useState } from 'react'
import './SectionExperiencia.css'

export function SectionExperiencia() {

  const [texto, setTexto] = useState([{
    id: 1,
    titulo: 'Hackathon',
    data: "Abril 2024",
    descricao: "Participei do AdaHack 2024, onde minha equipe FE-3 desenvolveu uma plataforma que promove a diversidade, inclusão e melhora a cultura organizacional nas empresas. A plataforma permite que colaboradores acompanhem vagas de emprego, forneçam feedback sobre os processos de recrutamento e inclusão, enquanto recrutadores podem gerenciar candidaturas e acessar esses feedbacks para aprimorar suas práticas. Utilizamos dados analíticos para identificar áreas de melhoria nas empresas. Nossa solução foi elogiada pela banca avaliadora, composta por empresas como Cognizant e Scania Brasil, e o código-fonte está disponível no meu GitHub."
  }])

  const [certificado, setCertificado] = useState([{
    id: 1,
    titulo: 'Certificados',
    data: "Março 2024",
    descricao: "Certificado VemSerTech Ifood",
    img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/ada-tech1.jpg'
  }])

  const [nomeFun, setNomeFun] = useState('')

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
      titulo: 'Sobre o portfólio',
      data: "Setembro 2024-Atual",
      descricao: "Desenvolvi o projeto do portfólio utilizando React e Vite, junto com a biblioteca Phosphor Icons para ícones. O projeto foi organizado em componentes como Header, Main e Footer, com cada seção do Main (Nome e Banner, Sobre, Experiência e Projetos) sendo separada e estilizada individualmente para evitar conflitos. Usei um arquivo db.json para armazenar os dados dos projetos e fiz o deploy no Render, simulando uma API que é consumida com Axios. Os dados são exibidos no componente Card, que atualiza seu estado com as informações da API. Também criei uma segunda API para a seção de Experiência, gerenciada em um arquivo separado. Todo o projeto segue boas práticas com commits semânticos."
    }
  ]

  const certi = [
    {
      id: 1,
      titulo: 'Certificados',
      data: "Outubro 2023",
      descricao: "Trilha | Ifood | Front-end | 11hrs Assícronas",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/Trilha%20%20Ifood%20%20Front-end.jpeg'
    },
    {
      id: 2,
      titulo: 'Certificados',
      data: "Julho 2022",
      descricao: "Udemy Curso de algoritmo e lógica de programação, Udemy",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/udemy.jpg'
    },
    {
      id: 3,
      titulo: 'Certificados',
      data: "Janeiro 2023",
      descricao: "Trilha Conectar Rocketseat",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/discover-rocke.png'
    },
    {
      id: 4,
      titulo: 'Certificados',
      data: "Maio 2024",
      descricao: "Trilha Conectar Rocketseat",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/Rocketseat-2.jpg'
    },
    {
      id: 5,
      titulo: 'Certificados',
      data: "Maio 2024",
      descricao: "Trila Fundamentar Rocketseat",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/Rocketseat-1.jpg'
    },
    {
      id: 6,
      titulo: 'Certificados',
      data: "Dezembro 2024",
      descricao: "Power BI - Escola Senai Conde José Vicente Azevedo",
      img: 'https://res.cloudinary.com/dtkdjcmi2/image/upload/v1770935051/Certificado_Power_B-1_almxas.jpg'
    },
    {
      id: 7,
      titulo: 'Certificados',
      data: "Outubro 2022",
      descricao: "Kenzie Curso de desenvolvimento web front-end",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/Kenzie.jpg'
    },
    {
      id: 8,
      titulo: 'Certificados',
      data: "Outubro 2023",
      descricao: "ESG, o que todo profissional deve saber",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/Inbs-ESG.jpg'
    },
    {
      id: 9,
      titulo: 'Certificados',
      data: "Abril 2024",
      descricao: "Ada tech ifood hackathon",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/ada-Hack-tech.png'
    },
    {
      id: 10,
      titulo: 'Certificados',
      data: "Março 2024",
      descricao: "Certificado VemSerTech Ifood",
      img: 'https://portfolio-2023-two-green.vercel.app/certificados/imgs/ada-tech1.jpg'
    },
    {
      id: 11,
      titulo: 'Certificados',
      data: "Maio 2024",
      descricao: "Certificado Programador Front-end Ford Enter",
      img: 'https://res.cloudinary.com/dtkdjcmi2/image/upload/v1770934951/Certificado_PROGRAMADOR_FRONT-EN-1_nnrv2h.jpg'
    },
    {
      id: 12,
      titulo: 'Certificados',
      data: "Janeiro 2024",
      descricao: "Certificado Inglês Técnico ",
      img: 'https://res.cloudinary.com/dtkdjcmi2/image/upload/v1770935117/Certificado_Ingl%C3%AAs_T%C3%A9cnic-1_vceepl.jpg'
    },
    {
      id: 13,
      titulo: 'Certificados',
      data: "Outubro 2024",
      descricao: "Certificado Imprantação de Serviços em Nuvem - Google Cloud Foundations",
      img: 'https://res.cloudinary.com/dtkdjcmi2/image/upload/v1770935212/Certificado_Implanta%C3%A7%C3%A3o_de_Servi%C3%A7os_em_Nuvem_-_Google_Cloud_Foundation-1_ivinmj.jpg'
    },
    {
      id: 14,
      titulo: 'Certificados',
      data: "Maio 2023",
      descricao: "Excel Escola Senai Conde José Vicente Azevedo",
      img: 'https://res.cloudinary.com/dtkdjcmi2/image/upload/v1770934993/Certificado_Excel_B%C3%A1sic-1_jyyc2r.jpg'
    }
  ]

  let nome = [];

  const handleClick = (valor) => {
    nome = respostas.filter((ele) => ele.titulo === valor)
    setTexto(nome)
    setNomeFun("")
  };

  const handleClickCertificado = (valor) => {
    nome = certi.filter((ele) => ele.titulo === valor)
    setCertificado(nome)
    setNomeFun("Certificados")
  };

  //console.log(texto.map(ele => ele.titulo))
  //console.log(certificado)
  console.log(nome)

  return (

    <section className="container-grid container-cor" id="experiencia">

      <div className="experiencia">
        <h1>experiência</h1>
        <div className="container-experiencia">
          <ul>
            <li onClick={() => handleClick('Hackathon')}><a>AdaHack 2024</a></li>
            <li onClick={() => handleClick('Ford Enter')}><a>Ford Enter</a></li>
            <li onClick={() => handleClick('Vem Ser Tech')}><a>Vem Ser Tech</a></li>
            <li onClick={() => handleClickCertificado('Certificados')}><a>Certificados</a></li>
            <li onClick={() => handleClick('Sobre o portfólio')}><a>Sobre o portfólio</a></li>
          </ul>
        </div>
      </div>

      <div className="professor">
        <div className="certificados">

          {nomeFun === "Certificados" ? certificado.map((ele) => (
            <>
              <div className='tst'>
                <a href={ele.img} target='_blank'>
                  <img src={ele.img} alt={ele.descricao} />
                </a>
              </div>
            </>
          )) : texto.map((ele) =>
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

      </div>

    </section>
  )
}