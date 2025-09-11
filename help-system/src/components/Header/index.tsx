import * as S from "./styles";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.NavContainer>
        <S.LogoArea>
          <S.LogoImage src="/images/transportadora_.png" alt="Rápido e Seguro" />
          <h2>Rápido e Seguro</h2>
        </S.LogoArea>

        <nav>
          <S.NavMenu>
            <li><Link to="/">Home</Link></li>
          </S.NavMenu>
        </nav>
      </S.NavContainer>
    </S.Header>
  );
};

export default Header;

