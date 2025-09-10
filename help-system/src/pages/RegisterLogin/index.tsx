import { useState } from "react";
import * as S from "./styles";
import { login, register } from "../../services/api";

const RegisterLogin = () => {
  const [activeSection, setActiveSection] = useState<"login" | "cadastro">("login");

  // Inputs de Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  const [loginError, setLoginError] = useState("");

  // Inputs de Registro
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  // Função para login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    try {
      const data = await login(loginEmail, loginSenha);
      localStorage.setItem("token", data.token); // salva token
      alert("Login bem-sucedido!");
      console.log("Login OK", data);
    } catch (err: any) {
      setLoginError(err.response?.data?.message || "Erro no login");
    }
  };

  // Função para registrar usuário
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");

    if (senha !== confirmarSenha) {
      setRegisterError("As senhas não conferem");
      return;
    }

    try {
      const data = await register({ nome, email, departamento, cargo, telefone, senha });
      setRegisterSuccess("Cadastro realizado com sucesso!");
      setNome("");
      setEmail("");
      setDepartamento("");
      setCargo("");
      setTelefone("");
      setSenha("");
      setConfirmarSenha("");
      console.log("Registro OK", data);
    } catch (err: any) {
      setRegisterError(err.response?.data?.message || "Erro ao cadastrar");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <h1>Sistema de Ajuda</h1>
        <p>Conectando colaboradores através da colaboração mútua</p>
        <S.NavButtons>
          <S.NavButton active={activeSection === "login"} onClick={() => setActiveSection("login")}>
            Login
          </S.NavButton>
          <S.NavButton active={activeSection === "cadastro"} onClick={() => setActiveSection("cadastro")}>
            Cadastro
          </S.NavButton>
        </S.NavButtons>
      </S.Header>

      <S.Content>
        {activeSection === "login" && (
          <S.Section>
            <h2>Acesso ao Sistema</h2>
            {loginError && <S.Alert className="error">{loginError}</S.Alert>}
            <form onSubmit={handleLogin}>
              <S.FormGroup>
                <label htmlFor="loginEmail">Email *</label>
                <input
                  type="email"
                  id="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="seu.email@empresa.com"
                  required
                />
              </S.FormGroup>

              <S.FormGroup>
                <label htmlFor="loginSenha">Senha *</label>
                <input
                  type="password"
                  id="loginSenha"
                  value={loginSenha}
                  onChange={(e) => setLoginSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                />
              </S.FormGroup>

              <S.SubmitButton type="submit">Entrar no Sistema</S.SubmitButton>
            </form>
          </S.Section>
        )}

        {activeSection === "cadastro" && (
          <S.Section>
            <h2>Novo Cadastro</h2>
            {registerError && <S.Alert className="error">{registerError}</S.Alert>}
            {registerSuccess && <S.Alert className="success">{registerSuccess}</S.Alert>}
            <form onSubmit={handleRegister}>
              <S.FormGrid>
                <S.FormGroup>
                  <label htmlFor="nome">Nome Completo *</label>
                  <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="email">Email Corporativo *</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="departamento">Departamento</label>
                  <select id="departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
                    <option value="">Selecione...</option>
                    <option value="TI">Tecnologia da Informação</option>
                    <option value="RH">Recursos Humanos</option>
                    <option value="Financeiro">Financeiro</option>
                  </select>
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="cargo">Cargo</label>
                  <input type="text" id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="senha">Senha *</label>
                  <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="confirmarSenha">Confirmar Senha *</label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                  />
                </S.FormGroup>
              </S.FormGrid>

              <S.SubmitButton type="submit">Criar Conta</S.SubmitButton>
            </form>
          </S.Section>
        )}
      </S.Content>
    </S.Container>
  );
};

export default RegisterLogin;
