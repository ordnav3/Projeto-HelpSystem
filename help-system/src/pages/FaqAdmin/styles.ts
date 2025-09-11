import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
`;

export const Header = styled.header`
  background: linear-gradient(90deg, #7c3aed, #4f46e5);
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;

  .nav-back {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
  }
`;

export const Content = styled.main`
  padding: 2rem;
`;

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FaqItem = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;

  &.answered {
    border-left: 5px solid #22c55e;
  }

  h3 {
    margin: 0;
  }

  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    margin-top: 0.5rem;
    resize: vertical;
  }

  .submit-btn {
    margin-top: 0.5rem;
    background: #4f46e5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
  }

  .remove-btn {
    margin-top: 0.5rem;
    background: #fee2e2;
    border: 1px solid #fca5a5;
    color: #991b1b;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
