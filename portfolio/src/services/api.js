import axios from "axios";

const api = axios.create({
  baseURL: "https://serverportfolio-wta1.onrender.com/Projetos",
});

export default api;