import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #4f46e5, #3b82f6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const NavButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const NavButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? "white" : "rgba(255, 255, 255, 0.2)")};
  color: ${({ active }) => (active ? "#4f46e5" : "white")};
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? "white" : "rgba(255, 255, 255, 0.3)")};
  }
`;

export const Content = styled.main`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 600px;
  width: 100%;
`;

export const Section = styled.section`
  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
    color: #374151;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #374151;
  }

  input,
  select {
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 400px) {
    gap: 0.5rem;
  }
`;

export const SubmitButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #4338ca;
  }
`;

export const Alert = styled.div<{ type?: "success" | "error" }>`
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: ${({ type }) => (type === "success" ? "#166534" : "#b91c1c")};
  background: ${({ type }) => (type === "success" ? "#dcfce7" : "#fee2e2")};
  border: 1px solid ${({ type }) => (type === "success" ? "#bbf7d0" : "#fca5a5")};
  display: ${({ type }) => (type ? "block" : "none")};
`;

export const PasswordStrength = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;

  .strength-bar {
    height: 4px;
    background: #e5e7eb;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 0.25rem;
  }

  .strength-fill {
    height: 100%;
    width: 0;
    transition: width 0.3s ease;
    border-radius: 2px;
    background: #4f46e5; // muda de cor dependendo da força
  }
`;

export const UserCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);

  h3 {
    color: #4f46e5;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 0.25rem;
  }
`;
