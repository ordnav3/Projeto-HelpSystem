import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <- import necessário
import * as S from "./styles";
import Header from "../../components/Header";

type User = {
  nome: string;
  email: string;
  departamento?: string;
  cargo?: string;
  telefone?: string;
  senha: string;
};

const RegisterLogin = () => {
  const navigate = useNavigate(); // <- inicializa navigate
  const [activeSection, setActiveSection] = useState<"login" | "cadastro">("login");

  // ----- Login -----
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");

  // ----- Cadastro -----
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // ----- Local Storage helpers -----
  const getUsers = (): User[] => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  };

  const saveUsers = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  // ----- Handlers -----
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find(u => u.email === loginEmail && u.senha === loginSenha);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert(`Login realizado com sucesso! Bem-vindo, ${user.nome}`);
      navigate("/faq"); // <- redireciona para a página de FAQ
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    const users = getUsers();
    if (users.find(u => u.email === email)) {
      alert("Email já cadastrado!");
      return;
    }
    const newUser: User = {
      nome,
      email,
      departamento,
      cargo,
      telefone,
      senha,
    };
    saveUsers([...users, newUser]);
    alert("Cadastro realizado com sucesso!");
    setActiveSection("login");
    // Limpar campos
    setNome("");
    setEmail("");
    setDepartamento("");
    setCargo("");
    setTelefone("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <h1>Sistema de Ajuda</h1>
          <p>Conectando colaboradores através da colaboração mútua</p>
          <S.NavButtons>
            <S.NavButton
              active={activeSection === "login"}
              onClick={() => setActiveSection("login")}
            >
              Login
            </S.NavButton>
            <S.NavButton
              active={activeSection === "cadastro"}
              onClick={() => setActiveSection("cadastro")}
            >
              Cadastro
            </S.NavButton>
          </S.NavButtons>
        </S.Header>

        <S.Content>
          {activeSection === "login" && (
            <S.Section>
              <h2>Acesso ao Sistema</h2>
              <form onSubmit={handleLogin}>
                <S.FormGroup>
                  <label>Email *</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <label>Senha *</label>
                  <input
                    type="password"
                    value={loginSenha}
                    onChange={(e) => setLoginSenha(e.target.value)}
                    required
                  />
                </S.FormGroup>
                <S.SubmitButton type="submit">Entrar</S.SubmitButton>
              </form>
            </S.Section>
          )}

          {activeSection === "cadastro" && (
            <S.Section>
              <h2>Novo Cadastro</h2>
              <form onSubmit={handleRegister}>
                <S.FormGrid>
                  <S.FormGroup>
                    <label>Nome Completo *</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <label>Email Corporativo *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <label>Departamento</label>
                    <select
                      value={departamento}
                      onChange={(e) => setDepartamento(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option value="TI">Tecnologia da Informação</option>
                      <option value="RH">Recursos Humanos</option>
                      <option value="Financeiro">Financeiro</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Vendas">Vendas</option>
                      <option value="Operacoes">Operações</option>
                      <option value="Juridico">Jurídico</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </S.FormGroup>

                  <S.FormGroup>
                    <label>Cargo</label>
                    <input
                      type="text"
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <label>Telefone</label>
                    <input
                      type="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <label>Senha *</label>
                    <input
                      type="password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <label>Confirmar Senha *</label>
                    <input
                      type="password"
                      value={confirmarSenha}
                      onChange={(e) => setConfirmarSenha(e.target.value)}
                      required
                    />
                  </S.FormGroup>
                </S.FormGrid>

                <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
              </form>
            </S.Section>
          )}
        </S.Content>
      </S.Container>
    </>
  );
};

export default RegisterLogin;

