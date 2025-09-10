import axios from "axios";

// URL base da sua API Python
const API_BASE_URL = "http://localhost:5000"; // muda para onde sua API estiver rodando

// Cria uma instância do Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Exemplo de funções para suas rotas

// Login
export const login = async (email: string, senha: string) => {
  const response = await api.post("/login", { email, senha });
  return response.data;
};

// Registro de usuário
export const registerUser = async (userData: any) => {
  const response = await api.post("/register", userData);
  return response.data;
};