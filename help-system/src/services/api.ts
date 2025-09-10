// src/services/api.ts
import axios from "axios";

// Criando instância do Axios
const api = axios.create({
  baseURL: "http://localhost:5000", // substitua pela URL do seu backend Flask
  headers: {
    "Content-Type": "application/json",
  },
});

// Função de login
export const login = async (email: string, senha: string) => {
  const response = await api.post("/login", { email, senha });
  return response.data; // normalmente retorna token ou dados do usuário
};

// Função de cadastro
interface RegisterData {
  nome: string;
  email: string;
  departamento?: string;
  cargo?: string;
  telefone?: string;
  senha: string;
}

export const register = async (data: RegisterData) => {
  const response = await api.post("/register", data);
  return response.data;
};

export default api;
