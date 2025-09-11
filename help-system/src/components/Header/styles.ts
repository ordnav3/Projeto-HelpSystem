import styled from "styled-components";

export const Header = styled.header`
  background: #4f46e5;
  padding: 1rem 2rem;
  color: white;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-size: 1.2rem;
    margin: 0;
    color: white;
  }
`;

export const LogoImage = styled.img`
  height: 40px;
  border-radius: 8px;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

