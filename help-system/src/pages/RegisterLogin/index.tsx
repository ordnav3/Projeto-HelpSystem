import { useState } from "react";
import * as S from "./styles";
import { login } from "../../services/api";


const RegisterLogin = () => {
  const [activeSection, setActiveSection] = useState<"login" | "cadastro">("login");


  const handleLogin = async () => {
    try {
      const data = await login("teste@email.com", "12345678");
      console.log("Login OK", data);
    } catch (err) {
      console.error("Erro no login", err);
    }
  };


  return (
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
            <form>
              <S.FormGroup>
                <label htmlFor="loginEmail">Email *</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  placeholder="seu.email@empresa.com"
                  required
                />
              </S.FormGroup>

              <S.FormGroup>
                <label htmlFor="loginSenha">Senha *</label>
                <input
                  type="password"
                  id="loginSenha"
                  name="senha"
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
            <form>
              <S.FormGrid>
                <S.FormGroup>
                  <label htmlFor="nome">Nome Completo *</label>
                  <input type="text" id="nome" name="nome" required placeholder="João Silva" />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="email">Email Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="joao.silva@empresa.com"
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="departamento">Departamento</label>
                  <select id="departamento" name="departamento">
                    <option value="">Selecione...</option>
                    <option value="TI">Tecnologia da Informação</option>
                    <option value="RH">Recursos Humanos</option>
                    <option value="Financeiro">Financeiro</option>
                  </select>
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="cargo">Cargo</label>
                  <input type="text" id="cargo" name="cargo" placeholder="Analista, Dev..." />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="senha">Senha *</label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    required
                    placeholder="Mínimo 8 caracteres"
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label htmlFor="confirmarSenha">Confirmar Senha *</label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    required
                    placeholder="Confirme sua senha"
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

