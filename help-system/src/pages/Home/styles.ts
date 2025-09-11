import styled from "styled-components";

export const PageWrapper = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #111827;
`;

/* Header / Nav */
export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.6rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #374151;

  h2 {
    font-size: 1.1rem;
    margin: 0;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: #6b7280;
    font-weight: 500;
  }
`;

export const LogoImage = styled.img`
  display: block;
  max-height: 56px;
  width: auto;
  margin-right: 8px;
  border-radius: 8px;
`;

/* Nav menu */
export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    color: #374151;
    font-weight: 600;
    padding: 0.45rem 0.9rem;
    border-radius: 25px;
    transition: all 0.25s ease;
  }
  a:hover {
    background: linear-gradient(45deg,#4f46e5,#7c3aed);
    color: white;
    transform: translateY(-2px);
  }
`;

/* Login button on nav */
export const LoginButton = styled.a`
  background: linear-gradient(45deg,#4f46e5,#7c3aed);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.25s ease;
`;

/* Hero section */
export const HeroSection = styled.section`
  margin-top: 92px; /* header fixed */
  padding: 4rem 1.25rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 320px;

  &::before {
    /* fallback if JS parallax doesn't run */
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.08)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.06)"/></svg>') no-repeat center;
    animation: float 30s linear infinite;
    opacity: 0.22;
    pointer-events: none;
  }

  @keyframes float {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

/* we use a real DOM element for the moving background so JS can transform it */
export const HeroBackground = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.08)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.06)"/></svg>') no-repeat center;
  opacity: 0.12;
  pointer-events: none;
  transform-origin: center;
  transition: transform 0.12s linear;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 35px auto 0;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
    line-height: 1.05;
  }

  p {
    font-size: 1.15rem;
    opacity: 0.92;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 { font-size: 2.2rem; }
    p { font-size: 1rem; }
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
`;

/* Buttons */
export const PrimaryButton = styled.a`
  background: rgba(255,255,255,0.18);
  border: 2px solid rgba(255,255,255,0.25);
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.25s ease;
`;

export const SecondaryButton = styled.a`
  background: white;
  color: #4f46e5;
  padding: 0.9rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
`;

/* Services section */
export const ServicesSection = styled.section`
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  margin: 2.5rem 1.25rem;
  padding: 2.5rem 1.25rem;
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(0,0,0,0.08);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-bottom: 1.5rem;
`;

export const ServiceCard = styled.article`
  background: white;
  padding: 1.6rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.06);
  border: 1px solid #e5e7eb;
  text-align: center;

  h3 { margin: 0.5rem 0; color: #374151; }
  p { color: #6b7280; line-height: 1.6; }
`;

export const ServiceIcon = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 1rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  background: linear-gradient(45deg,#4f46e5,#7c3aed);
  color: white;
`;

/* Stats */
export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg,#4f46e5,#7c3aed);
  color: white;
  padding: 1.25rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(79,70,229,0.2);

  h3 { font-size: 1.8rem; margin: 0 0 0.4rem; }
  p { margin: 0; opacity: 0.95; }
`;

/* About */
export const AboutSection = styled.section`
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  margin: 2.5rem 1.25rem;
  padding: 2.5rem 1.25rem;
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(0,0,0,0.08);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  .about-features { list-style: none; padding: 0; margin-top: 1rem; }
  .about-features li { display:flex; align-items:center; gap:0.6rem; padding: 0.45rem 0; color: #374151; font-weight: 500; }
  .about-features li::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: linear-gradient(45deg,#4f46e5,#7c3aed);
    color: white;
    border-radius: 50%;
    font-size: 0.85rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled.div`
  h2 { color: #374151; font-size: 1.6rem; margin-bottom: 0.5rem; }
  p { color: #6b7280; line-height: 1.6; font-size: 1rem; }
`;

export const AboutImage = styled.div`
  .image-placeholder {
    width: 100%;
    height: 260px;
    background: linear-gradient(135deg,#e5e7eb,#f3f4f6);
    border-radius: 16px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#9ca3af;
    font-size: 3rem;
    border: 2px dashed #d1d5db;
  }
`;

/* Contact */
export const ContactSection = styled.section`
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  margin: 2.5rem 1.25rem 3rem;
  padding: 2.5rem 1.25rem;
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(0,0,0,0.08);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const ContactItem = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
  text-align: left;

  h4 { color: #4f46e5; margin-bottom: 0.6rem; }
  p { color: #6b7280; line-height: 1.5; margin: 0; }
`;
