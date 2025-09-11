import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <S.Footer>
      <p>
        &copy; {year} - Rápido e Seguro. Todos os direitos reservados. | CNPJ:
        00.000.001/0001-01 | Desenvolvido com tecnologia e dedicação
      </p>
    </S.Footer>
  );
};

export default Footer;
