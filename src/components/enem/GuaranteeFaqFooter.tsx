"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const faqs = [
  { q: "O ENEM INTELIGENTE é um curso?", a: "Não. O ENEM INTELIGENTE é uma plataforma de preparação com diagnóstico, banco de questões organizado, painel de desempenho, recomendações de estudo e treinos direcionados. Não é um curso de videoaulas." },
  { q: "Preciso estudar todos os dias?", a: "Não. Você pode usar a plataforma no seu ritmo. O sistema registra seu desempenho e atualiza suas recomendações a cada treino que você realizar." },
  { q: "Como funciona o diagnóstico?", a: "Você responde a questões e o sistema analisa seus acertos e erros por área, matéria e assunto. A partir disso, gera um mapa do seu desempenho atual." },
  { q: "As questões são organizadas por assunto?", a: "Sim. O banco de questões permite filtrar por área do conhecimento, matéria, assunto, nível de dificuldade e pelo seu próprio desempenho." },
  { q: "A plataforma mostra onde estou errando?", a: "Sim. O painel de desempenho detalha seus acertos e erros por matéria e assunto, permitindo que você identifique exatamente onde precisa melhorar." },
  { q: "O sistema recomenda o que estudar?", a: "Sim. Com base no seu desempenho, o sistema indica quais assuntos merecem mais atenção e sugere o próximo treino." },
  { q: "O acesso é pelo celular?", a: "Sim. A plataforma é acessível pelo navegador do celular, tablet e computador." },
  { q: "Existe mensalidade?", a: "Não. O acesso é por pagamento único. Não há cobranças recorrentes." },
  { q: "O que está incluído no pacote de R$ 59,90?", a: "O pacote completo inclui ENEM INTELIGENTE (diagnóstico, banco de questões, treinos, painel de desempenho, recomendações), Simulado Inteligente e Redação 900+. Acesso vitalício." },
  { q: "Qual a diferença entre R$ 16,90 e R$ 59,90?", a: "O plano de R$ 16,90 inclui o ENEM INTELIGENTE (diagnóstico, questões, painel e recomendações). O plano de R$ 59,90 inclui tudo isso mais o Simulado Inteligente e a Redação 900+, com acesso vitalício." },
  { q: "O acesso é vitalício?", a: "Sim, no pacote completo de R$ 59,90 o acesso é vitalício. Inclui também atualizações e novos conteúdos que forem adicionados." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para conhecer a plataforma. Se decidir que não é para você, basta solicitar o reembolso dentro desse prazo." },
];

const footerLinks = ["Termos de Uso", "Política de Privacidade", "Suporte", "Contato"];

export default function GuaranteeFaqFooter() {
  const { ref: refG, isVisible: vG } = useScrollAnimation();
  const { ref: refF, isVisible: vF } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Guarantee */}
      <section ref={refG} className="py-20 sm:py-28 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${vG ? "animate-fade-in-up" : "opacity-0"} bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 premium-card-shadow`}>
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6 text-3xl">
              🛡️
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              GARANTIA DE 7 DIAS
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Você tem 7 dias para conhecer o ENEM INTELIGENTE.
              <br />
              Se decidir que não é para você, basta solicitar o reembolso dentro do prazo da garantia.
            </p>
            <a href="#oferta-inicial" onClick={(e) => { e.preventDefault(); document.getElementById('oferta-inicial')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-blue-600 rounded-xl cta-shadow hover:bg-blue-700 transition-all duration-200">
              VER PLANOS E PREÇOS
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={refF} className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight ${vF ? "animate-fade-in-up" : "opacity-0"}`}>
              PERGUNTAS <span className="text-blue-600">FREQUENTES.</span>
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border border-gray-100 rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? "bg-surface" : "bg-white hover:border-gray-200"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-gray-800 pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight ${vF ? "animate-fade-in-up" : "opacity-0"}`}>
            VOCÊ PODE CONTINUAR ESTUDANDO NO ESCURO.
          </h2>
          <p className={`mt-5 text-base sm:text-lg text-gray-400 leading-relaxed ${vF ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            Ou pode descobrir exatamente onde está, o que precisa melhorar e qual deve ser seu próximo passo.
          </p>
          <a
            href="#oferta-inicial"
            onClick={(e) => { e.preventDefault(); document.getElementById('oferta-inicial')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            className={`mt-10 inline-flex items-center justify-center px-12 py-4 text-base font-bold text-gray-900 bg-blue-400 rounded-xl hover:bg-blue-300 transition-all duration-200 cta-shadow ${vF ? "animate-fade-in-up delay-200" : "opacity-0"}`}
          >
            VER PLANOS E PREÇOS
          </a>
          <p className={`mt-4 text-sm text-gray-600 ${vF ? "animate-fade-in delay-300" : "opacity-0"}`}>
            Acesso imediato · Pagamento único · Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-base font-bold text-white">ENEM INTELIGENTE</p>
              <p className="text-xs text-gray-500 mt-1">Preparação mais inteligente para o ENEM.</p>
            </div>
            <div className="flex items-center gap-6">
              {footerLinks.map((link, i) => (
                <a key={i} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
