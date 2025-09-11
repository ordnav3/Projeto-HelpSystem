import React, { useState } from "react";
import * as S from "./styles";

type FAQ = {
  id: number;
  title: string;
  content: string;
  department: string;
  createdAt: string;
  viewCount: number;
  usefulCount: number;
  totalVotes: number;
  answer?: string;
};

const AdminFaqPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>(() => {
    const stored = localStorage.getItem("faqs");
    return stored ? JSON.parse(stored) : [];
  });

  const updateFaqs = (newFaqs: FAQ[]) => {
    setFaqs(newFaqs);
    localStorage.setItem("faqs", JSON.stringify(newFaqs));
  };

  const handleAnswer = (id: number, answer: string) => {
    const updated = faqs.map((f) =>
      f.id === id ? { ...f, answer } : f
    );
    updateFaqs(updated);
  };

  return (
    <S.Container>
      <S.Header>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
          className="nav-back"
        >
          ← Voltar
        </a>
        <h1>Admin • Responder Perguntas</h1>
        <p>Gerencie e responda às perguntas dos usuários</p>
      </S.Header>

      <S.Content>
        {faqs.length === 0 ? (
          <p>Nenhuma pergunta cadastrada ainda.</p>
        ) : (
          <S.FaqList>
            {faqs.map((f) => (
              <S.FaqItem key={f.id} className={f.answer ? "answered" : ""}>
                <div className="faq-question">
                  <div>
                    <h3>{f.title}</h3>
                    <p style={{ opacity: 0.7 }}>{f.content}</p>
                    <small>
                      Depto: {f.department} • {new Date(f.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>

                <div className="faq-answer" style={{ padding: "1rem" }}>
                  {f.answer ? (
                    <>
                      <p><b>Resposta:</b> {f.answer}</p>
                      <button
                        onClick={() => handleAnswer(f.id, "")}
                        className="remove-btn"
                      >
                        Remover resposta
                      </button>
                    </>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const input = form.elements.namedItem("answer") as HTMLInputElement;
                        handleAnswer(f.id, input.value.trim());
                        form.reset();
                      }}
                    >
                      <textarea
                        name="answer"
                        placeholder="Digite a resposta aqui..."
                        rows={3}
                      />
                      <button type="submit" className="submit-btn">
                        Enviar resposta
                      </button>
                    </form>
                  )}
                </div>
              </S.FaqItem>
            ))}
          </S.FaqList>
        )}
      </S.Content>
    </S.Container>
  );
};

export default AdminFaqPage;
