import React, { useMemo, useState } from "react";
import * as S from "./styles";
import Header from "../../components/Header";

type FAQ = {
  id: number;
  title: string;
  content: string;
  department: string;
  createdAt: string; // ISO
  viewCount: number;
  usefulCount: number;
  totalVotes: number;
};

const initialFaqs: FAQ[] = [
  {
    id: 1,
    title: "Como acessar o sistema pela primeira vez?",
    content: "Para acessar o sistema, use seu e-mail corporativo e a senha provisória enviada pelo RH.",
    department: "TI",
    createdAt: "2025-09-01T10:00:00.000Z",
    viewCount: 120,
    usefulCount: 90,
    totalVotes: 100,
  },
  {
    id: 2,
    title: "Quais documentos preciso para reembolso?",
    content: "Envie nota fiscal, comprovante de pagamento e justificativa para o financeiro.",
    department: "Financeiro",
    createdAt: "2025-08-25T09:30:00.000Z",
    viewCount: 88,
    usefulCount: 60,
    totalVotes: 70,
  },
  {
    id: 3,
    title: "Como solicitar admissão de novo colaborador?",
    content: "Abra uma solicitação via RH com dados do candidato, cargo e justificativa.",
    department: "RH",
    createdAt: "2025-08-20T14:20:00.000Z",
    viewCount: 200,
    usefulCount: 150,
    totalVotes: 170,
  },
  {
    id: 4,
    title: "Posso trabalhar remoto uma vez por semana?",
    content: "Consulte a política de trabalho remoto e alinhe com seu gestor.",
    department: "Operações",
    createdAt: "2025-07-12T07:10:00.000Z",
    viewCount: 45,
    usefulCount: 20,
    totalVotes: 30,
  },
];

const formatDateNice = (iso: string) => {
  const d = new Date(iso);
  const today = new Date();
  if (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  ) {
    return "hoje";
  }
  return d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
};

const FAQPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState<string>("Todos");
  const [sortBy, setSortBy] = useState<"recent" | "useful" | "viewed">("recent");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // For "add question" form
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newDepartment, setNewDepartment] = useState("TI");
  const [addMsg, setAddMsg] = useState<string | null>(null);

  // Departments list (dynamic)
  const departments = useMemo(() => {
    const deps = Array.from(new Set(faqs.map((f) => f.department)));
    return ["Todos", ...deps];
  }, [faqs]);

  // Filter + sort
  const filteredFaqs = useMemo(() => {
    const term = search.trim().toLowerCase();
    let list = faqs.filter((f) => {
      const matchesDept = department === "Todos" ? true : f.department === department;
      const matchesSearch =
        term === "" ||
        f.title.toLowerCase().includes(term) ||
        f.content.toLowerCase().includes(term);
      return matchesDept && matchesSearch;
    });

    if (sortBy === "recent") {
      list = list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    } else if (sortBy === "useful") {
      list = list.sort((a, b) => {
        const aPct = a.totalVotes ? a.usefulCount / a.totalVotes : 0;
        const bPct = b.totalVotes ? b.usefulCount / b.totalVotes : 0;
        return bPct - aPct;
      });
    } else if (sortBy === "viewed") {
      list = list.sort((a, b) => b.viewCount - a.viewCount);
    }

    return list;
  }, [faqs, search, department, sortBy]);

  const lastUpdated = useMemo(() => {
    if (faqs.length === 0) return "—";
    const latest = faqs.reduce((max, cur) =>
      +new Date(cur.createdAt) > +new Date(max.createdAt) ? cur : max
    );
    return formatDateNice(latest.createdAt);
  }, [faqs]);

  // Toggle expand and increment view when opening
  const toggleExpand = (id: number) => {
    setExpandedId((prev) => {
      const willOpen = prev !== id;
      if (willOpen) {
        setFaqs((prevFaqs) =>
          prevFaqs.map((f) => (f.id === id ? { ...f, viewCount: f.viewCount + 1 } : f))
        );
      }
      return willOpen ? id : null;
    });
  };

  const handleMarkUseful = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((f) =>
        f.id === id
          ? { ...f, usefulCount: f.usefulCount + 1, totalVotes: f.totalVotes + 1 }
          : f
      )
    );
  };

  const handleAddQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      setAddMsg("Preencha título e conteúdo.");
      return;
    }
    const newFaq: FAQ = {
      id: Date.now(),
      title: newTitle.trim(),
      content: newContent.trim(),
      department: newDepartment,
      createdAt: new Date().toISOString(),
      viewCount: 0,
      usefulCount: 0,
      totalVotes: 0,
    };
    setFaqs((prev) => [newFaq, ...prev]);
    setNewTitle("");
    setNewContent("");
    setNewDepartment("TI");
    setAddMsg("Pergunta enviada com sucesso!");
    setTimeout(() => setAddMsg(null), 3000);
  };

  return (
    <>
      <Header />
      <S.Container>
      <S.Header>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="nav-back">
          ← Voltar
        </a>
        <h1>Perguntas Frequentes</h1>
        <p>Encontre respostas rápidas ou envie sua dúvida</p>
      </S.Header>

      <S.Content>
        {/* Filters */}
        <S.FiltersSection>
          <S.SearchBox>
            <input
              type="text"
              placeholder="Buscar por palavras-chave..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </S.SearchBox>

          <S.DepartmentFilters>
            {departments.map((d) => (
              <button
                key={d}
                className={`filter-btn ${department === d ? "active" : ""}`}
                onClick={() => setDepartment(d)}
                type="button"
              >
                {d}
              </button>
            ))}
          </S.DepartmentFilters>
        </S.FiltersSection>

        {/* Stats + sort */}
        <S.StatsBar>
          <span>
            {filteredFaqs.length} pergunta{filteredFaqs.length !== 1 ? "s" : ""} encontrad
            {filteredFaqs.length !== 1 ? "as" : "a"} • Última atualização: {lastUpdated}
          </span>

          <div className="sort-options" style={{ display: "flex", gap: 8 }}>
            <button
              className={`sort-btn ${sortBy === "recent" ? "active" : ""}`}
              onClick={() => setSortBy("recent")}
              type="button"
            >
              Mais recente
            </button>
            <button
              className={`sort-btn ${sortBy === "useful" ? "active" : ""}`}
              onClick={() => setSortBy("useful")}
              type="button"
            >
              Mais útil
            </button>
            <button
              className={`sort-btn ${sortBy === "viewed" ? "active" : ""}`}
              onClick={() => setSortBy("viewed")}
              type="button"
            >
              Mais visto
            </button>
          </div>
        </S.StatsBar>

        {/* FAQ list */}
        <S.FaqList>
          {filteredFaqs.map((f) => {
            const usefulPct = f.totalVotes ? Math.round((f.usefulCount / f.totalVotes) * 100) : 0;
            return (
              <S.FaqItem key={f.id} className={expandedId === f.id ? "expanded" : ""}>
                <div className="faq-question" onClick={() => toggleExpand(f.id)}>
                  <div className="question-content">
                    <h3 className="question-title">{f.title}</h3>
                    <div className="question-meta">
                      <span className={`department-badge dept-${f.department.toLowerCase()}`}>
                        {f.department}
                      </span>
                      <span className="question-date">{formatDateNice(f.createdAt)}</span>
                    </div>
                    <div className="question-stats">
                      <span>👁️ {f.viewCount} visualizações</span>
                      <span>👍 {usefulPct}% útil</span>
                    </div>
                  </div>
                  <div className="expand-icon">{expandedId === f.id ? "−" : "+"}</div>
                </div>

                <div className="faq-answer">
                  <div className="faq-answer-content" style={{ padding: "1rem 1.5rem" }}>
                    <p className="answer-text">{f.content}</p>
                    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                      <button
                        type="button"
                        onClick={() => handleMarkUseful(f.id)}
                        style={{
                          background: "#e6f2ff",
                          border: "1px solid #bcdcff",
                          color: "#064e8a",
                          padding: "6px 10px",
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                      >
                        Marcar como útil
                      </button>
                    </div>
                  </div>
                </div>
              </S.FaqItem>
            );
          })}
        </S.FaqList>

        {/* Add new question form */}
        <div style={{ marginTop: 24 }}>
          <h3>Enviar nova pergunta</h3>
          {addMsg && <div style={{ marginBottom: 8, color: addMsg.includes("sucesso") ? "green" : "red" }}>{addMsg}</div>}
          <form onSubmit={handleAddQuestion}>
            <div style={{ display: "grid", gap: 8 }}>
              <input
                placeholder="Título"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
              <textarea
                placeholder="Detalhe sua dúvida..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={4}
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
              <select value={newDepartment} onChange={(e) => setNewDepartment(e.target.value)} style={{ padding: 10 }}>
                {departments.filter(d=> d !== "Todos").map(d => (<option key={d} value={d}>{d}</option>))}
              </select>
              <div style={{ display: "flex", gap: 8 }}>
                <button type="submit" style={{ padding: "10px 16px", background: "#4f46e5", color: "white", border: "none", borderRadius: 8 }}>
                  Enviar pergunta
                </button>
                <button type="button" onClick={() => { setNewTitle(""); setNewContent(""); setNewDepartment("TI"); }} style={{ padding: "10px 16px", borderRadius: 8 }}>
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </div>
      </S.Content>
    </S.Container>
    </>
  );
};

export default FAQPage;
