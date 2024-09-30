import axios from "axios";

const URL = "https://serverportfolio-ze76.onrender.com/Projetos"

const experiencia = axios.create({
  baseURL: URL,
});

export default experiencia;