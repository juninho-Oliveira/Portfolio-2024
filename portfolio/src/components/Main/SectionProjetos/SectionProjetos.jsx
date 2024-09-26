
import './SectionProjetos.css'
import { Cards } from './Cards/Cards'

import { useEffect, useState } from 'react'
import api from '../../../services/api'

export function SectionProjetos() {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [arr , setArr] = useState([])


    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await api.get('/');
                setUser(response.data)
                setLoading(false) 
                setArr(response.data)  
            } catch (error) {
                console.log(error)
            } 
        }

        fetchDate();

    }, [])


    const quantidadeProjetos = arr.length

    let status = loading;

    return (

        <section className="container-projetos" id="projetos">

            <div className="container-grid titulo">
                <h1>PROJETOS</h1>
                <p>Quantidade de projetos <span>{quantidadeProjetos}</span></p>
            </div>

            <div className="container-grid container-cards">

                { 
                status ? <div className='carregando'><p>Carregando...</p></div> : user.map((resp) => {
                    return (
                        <Cards
                            key={resp.id}
                            titulo={resp.titulo}
                            descricao={resp.descricao}
                            tecnologias={resp.tecnologias}
                            url={resp.url}
                            imagem={resp.imgSrc} />
                    )
                })}

            </div>

        </section>
    )
}