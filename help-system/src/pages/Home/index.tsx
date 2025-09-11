import React, { useEffect, useRef } from "react";
import * as S from "./styles";

const services = [
  { icon: "🚚", title: "Transporte Rodoviário", text: "Frota moderna e rastreada 24h para entregas seguras e pontuais em todo território nacional." },
  { icon: "📦", title: "Armazenagem", text: "Centros de distribuição estratégicos com sistemas WMS para gestão eficiente do seu estoque." },
  { icon: "🌎", title: "Logística Integrada", text: "Soluções end-to-end com planejamento, execução e controle de toda cadeia de suprimentos." },
  { icon: "📡", title: "Rastreamento Online", text: "Acompanhe suas cargas em tempo real através do nosso portal e receba notificações automáticas." },
  { icon: "⏱️", title: "Express", text: "Entregas urgentes com prazos reduzidos para atender suas necessidades mais críticas." },
  { icon: "🧸", title: "Cargas Especiais", text: "Transporte especializado para cargas perigosas, refrigeradas e de grandes dimensões." },
];

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "500+", label: "Clientes Satisfeitos" },
  { value: "98%", label: "Entregas no Prazo" },
  { value: "24/7", label: "Monitoramento" },
];

const TransportHome: React.FC = () => {
  const heroBgRef = useRef<HTMLDivElement | null>(null);
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Parallax effect (moves hero background)
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${scrolled * 0.15}px) rotate(${scrolled * 0.006}deg)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for animating cards and contact items
  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px",
    };

    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          animObserver.unobserve(entry.target);
        }
      });
    }, options);

    const animatedEls = document.querySelectorAll(".service-card, .stat-card, .contact-item");
    animatedEls.forEach((el) => {
      const h = el as HTMLElement;
      h.style.opacity = "0";
      h.style.transform = "translateY(20px)";
      h.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      animObserver.observe(el);
    });

    return () => animObserver.disconnect();
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (!statsSectionRef.current) return;

    const animateCounter = (element: HTMLElement, start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const text = element.textContent ?? "";
      const hasPlus = text.includes("+");
      const hasPercent = text.includes("%");

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.innerHTML = `${value}${hasPlus ? "+" : ""}${hasPercent ? "%" : ""}`;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".stat-card h3");
          counters.forEach((counter) => {
            const el = counter as HTMLElement;
            const raw = el.textContent ?? "";
            const num = parseInt(raw.replace(/[^\d]/g, ""), 10) || 0;
            // animate from 0 to num in 1500-2200ms
            animateCounter(el, 0, num, 1800);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    statsObserver.observe(statsSectionRef.current);

    return () => {
      // Clean up all observers
      statsObserver.disconnect();
    };
  }, []);

  return (
    <S.PageWrapper>
      <S.Header>
        <S.NavContainer>
          <S.LogoArea>
            <S.LogoImage src="/images/transportadora_.png" alt="Rápido e Seguro" onError={(e)=>{ (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div>
              <h2>Rápido e Seguro</h2>
              <p>Sua Carga, Nossa Responsabilidade</p>
            </div>
          </S.LogoArea>

          <nav>
            <S.NavMenu>
              <li><a href="#home" onClick={(e) => handleNavClick(e, "home")}>Início</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "services")}>Serviços</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>Sobre</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contato</a></li>
            </S.NavMenu>
          </nav>

          <S.LoginButton href="/registerlogin
" aria-label="Portal do Colaborador">Portal do Colaborador</S.LoginButton>
        </S.NavContainer>
      </S.Header>

      <S.HeroSection id="home" role="region" aria-label="Hero">
        <S.HeroBackground ref={heroBgRef} aria-hidden />
        <S.HeroContent>
          <h1>Logística que Move o Brasil</h1>
          <p>Rápido e Seguro, rápido e confiável para sua empresa. Com mais de 10 anos de experiência, conectamos seu negócio aos principais centros do país com eficiência e qualidade.</p>
          <S.HeroButtons>
            <S.PrimaryButton href="#services" onClick={(e)=>handleNavClick(e,"services")}>Nossos Serviços</S.PrimaryButton>
            <S.SecondaryButton href="#contact" onClick={(e)=>handleNavClick(e,"contact")}>Solicitar Cotação</S.SecondaryButton>
          </S.HeroButtons>
        </S.HeroContent>
      </S.HeroSection>

      <S.ServicesSection id="services">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>Soluções completas em transporte e logística para atender todas as suas necessidades</p>
        </div>

        <S.ServicesGrid>
          {services.map((s, i) => (
            <S.ServiceCard key={i} className="service-card" role="article">
              <S.ServiceIcon>{s.icon}</S.ServiceIcon>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>

        <S.StatsSection ref={statsSectionRef}>
          {stats.map((st, i) => (
            <S.StatCard key={i} className="stat-card">
              <h3>{st.value}</h3>
              <p>{st.label}</p>
            </S.StatCard>
          ))}
        </S.StatsSection>
      </S.ServicesSection>

      <S.AboutSection id="about">
        <S.AboutContent>
          <S.AboutText>
            <h2>Quem Somos</h2>
            <p>A Rápido e Seguro é uma empresa brasileira especializada em soluções logísticas, fundada em 2014 com o objetivo de revolucionar o transporte de cargas no país.</p>
            <p>Nossa missão é conectar empresas e pessoas através de um transporte eficiente, seguro e sustentável, contribuindo para o desenvolvimento econômico do Brasil.</p>

            <ul className="about-features">
              <li>Frota própria com mais de 200 veículos</li>
              <li>Cobertura nacional com filiais estratégicas</li>
              <li>Certificações ISO 9001 e 14001</li>
              <li>Seguro total da carga</li>
              <li>Equipe especializada 24/7</li>
              <li>Compromisso com sustentabilidade</li>
            </ul>

            <S.PrimaryButton href="#contact" onClick={(e)=>handleNavClick(e,"contact")}>Fale Conosco</S.PrimaryButton>
          </S.AboutText>

          <S.AboutImage>
            <div className="image-placeholder">🚛</div>
          </S.AboutImage>
        </S.AboutContent>
      </S.AboutSection>

      <S.ContactSection id="contact">
        <div className="section-title">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender sua empresa com as melhores soluções em transporte</p>
        </div>

        <S.ContactGrid>
          <S.ContactItem className="contact-item">
            <h4>Central de Atendimento</h4>
            <p><strong>0800 123 4567</strong><br/>Segunda a sexta: 8h às 18h<br/>Sábados: 8h às 12h</p>
          </S.ContactItem>

          <S.ContactItem className="contact-item">
            <h4>Email</h4>
            <p><strong>contato@translogexpress.com.br</strong><br/>Cotações e informações gerais<br/><br/><strong>comercial@translogexpress.com.br</strong><br/>Parcerias e grandes volumes</p>
          </S.ContactItem>

          <S.ContactItem className="contact-item">
            <h4>Matriz</h4>
            <p><strong>São Paulo - SP</strong><br/>Av. das Nações, 1000<br/>Vila Olímpia - CEP: 04578-000<br/>Tel: (11) 3456-7890</p>
          </S.ContactItem>

          <S.ContactItem className="contact-item">
            <h4>Portal do Cliente</h4>
            <p>Acesse nossa plataforma para:<br/>• Rastrear encomendas<br/>• Solicitar coletas<br/>• Emitir relatórios<br/>• Acompanhar faturas</p>
          </S.ContactItem>
        </S.ContactGrid>
      </S.ContactSection>
    </S.PageWrapper>
  );
};

export default TransportHome;
