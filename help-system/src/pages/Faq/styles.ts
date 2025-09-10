import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
`;

export const Header = styled.header`
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }

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

export const FiltersSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const SearchBox = styled.div`
  flex: 1;
  min-width: 300px;
  position: relative;

  input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: 2px solid #e5e7eb;
    border-radius: 50px;
    font-size: 1rem;
  }

  &::before {
    content: "🔍";
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
  }
`;

export const DepartmentFilters = styled.div`
  display: flex;
  gap: 0.5rem;

  .filter-btn {
    background: white;
    border: 2px solid #e5e7eb;
    color: #374151;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
  }

  .filter-btn.active {
    background: #4f46e5;
    color: white;
  }
`;

export const StatsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
  padding: 1rem;
  border-radius: 15px;
  margin-bottom: 2rem;
`;

export const FaqList = styled.div``;

export const FaqItem = styled.div`
  background: white;
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.3s ease;

  .faq-question {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    background: #f8fafc;
  }

  &.expanded .faq-answer {
    max-height: 500px;
  }
`;
