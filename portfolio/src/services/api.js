import axios from "axios";

const URL = "https://serverportfolio-ze76.onrender.com/Projetos"

const api = axios.create({
  baseURL: URL,
});

export default api;