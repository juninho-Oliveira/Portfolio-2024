import axios from "axios";

const URL = "https://serverportfolio-wgbs.onrender.com/Projetos"

const api = axios.create({
  baseURL: URL,
});

export default api;