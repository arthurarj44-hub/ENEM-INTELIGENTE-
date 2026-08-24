"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function OffersSection() {
  const { ref: ref1, isVisible: v1 } = useScrollAnimation();
  const { ref: ref2, isVisible: v2 } = useScrollAnimation();
  const { ref: ref3, isVisible: v3 } = useScrollAnimation();
  const { ref: ref4, isVisible: v4 } = useScrollAnimation();

  return (
    <>
      {/* Initial Offer */}
      <section id="oferta-inicial" ref={ref1} className="py-20 sm:py-28 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 ${v1 ? "animate-fade-in" : "opacity-0"}`}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Acesso inicial
            </span>
          </div>
          <div className={`${v1 ? "animate-fade-in-up delay-100" : "opacity-0"} bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 premium-card-shadow`}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                <span className="text-sm font-bold text-gray-900">ENEM INTELIGENTE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                Comece a parar de estudar no escuro hoje.
              </h2>
            </div>
            <ul className="mt-8 space-y-3">
              {["Diagnóstico inicial", "Banco de questões", "Questões por matéria", "Questões por assunto", "Painel de desempenho", "Acompanhamento da evolução", "Recomendações de estudo", "Treinos direcionados"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-2">Pagamento único · Acesso imediato</p>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-5xl sm:text-6xl font-extrabold text-gray-900">R$ 16</span>
                <span className="text-2xl font-bold text-gray-900">,90</span>
              </div>
              <a href="https://pay.cakto.com.br/jjgaorz_1059575" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base font-bold text-white bg-blue-600 rounded-xl cta-shadow hover:bg-blue-700 transition-all duration-200 active:scale-[0.98]">
                QUERO COMEÇAR POR R$ 16,90
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upsells */}
      <section ref={ref2} className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight ${v2 ? "animate-fade-in-up" : "opacity-0"}`}>
              Agora que você sabe onde precisa melhorar...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Simulado */}
            <div className={`${v2 ? "animate-fade-in-up delay-100" : "opacity-0"} bg-surface rounded-3xl border border-gray-200 p-8 premium-card-shadow`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🚀</span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Upsell 01</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">SIMULADO INTELIGENTE</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Teste seu nível em condições de prova.
              </p>
              <ul className="space-y-2 mb-8">
                {["Simulados estilo ENEM", "Cronômetro", "Resultado por área", "Análise avançada", "Identificação de dificuldades", "Comparação entre simulados", "Recomendações pós-simulado"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold text-gray-900">R$ 22</span>
                <span className="text-lg font-bold text-gray-900">,90</span>
              </div>
              <a href="https://pay.cakto.com.br/6266zxo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-3 text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors">
                QUERO ADICIONAR OS SIMULADOS
              </a>
            </div>

            {/* Redação */}
            <div className={`${v2 ? "animate-fade-in-up delay-300" : "opacity-0"} bg-surface rounded-3xl border border-gray-200 p-8 premium-card-shadow`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">✍️</span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Upsell 02</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">REDAÇÃO 900+</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Transforme seus erros em pontos na redação.
              </p>
              <ul className="space-y-2 mb-8">
                {["Correção", "Análise por competência", "Identificação de erros", "Sugestões de melhoria", "Estrutura", "Treinamento por competência", "Exemplos e exercícios"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold text-gray-900">R$ 32</span>
                <span className="text-lg font-bold text-gray-900">,90</span>
              </div>
              <a href="https://pay.cakto.com.br/firq4nz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-3 text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors">
                QUERO TREINAR MINHA REDAÇÃO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Offer - Premium */}
      <section id="oferta-completa" ref={ref3} className="py-20 sm:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${v3 ? "animate-fade-in-up" : "opacity-0"} relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 overflow-hidden`}>
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  🏆 PACOTE COMPLETO · ACESSO VITALÍCIO
                </span>
              </div>
              <div className="text-center mt-6 mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  ENEM INTELIGENTE COMPLETO
                </h2>
                <p className="text-base text-gray-400 leading-relaxed">
                  A preparação completa para o ENEM em um único acesso.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-8">
                <div className="mb-4">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">🧠 ENEM INTELIGENTE</p>
                  {["Diagnóstico inteligente", "Banco de questões", "Treinos direcionados", "Painel de desempenho", "Sistema de evolução", "Recomendações de estudo"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">🚀 SIMULADO INTELIGENTE</p>
                  {["Simulados completos", "Cronômetro", "Análise avançada", "Comparação de desempenho"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 mt-5">✍️ REDAÇÃO 900+</p>
                  {["Correção", "Análise por competência", "Treinamento", "Exemplos e exercícios"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-6 text-center">
                + Outros conteúdos e materiais complementares que forem adicionados ao pacote.
              </p>

              <div className="text-center">
                <p className="text-sm text-gray-500 line-through mb-1">De R$ 197,00</p>
                <p className="text-sm text-gray-400 mb-2">por apenas:</p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-6xl sm:text-7xl font-extrabold text-white">R$ 59</span>
                  <span className="text-3xl font-bold text-white">,90</span>
                </div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">PAGAMENTO ÚNICO</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">ACESSO VITALÍCIO</span>
                </div>
                <a href="https://pay.cakto.com.br/u2zotwb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 text-base font-bold text-gray-900 bg-blue-400 rounded-xl hover:bg-blue-300 transition-all duration-200 active:scale-[0.98] cta-shadow">
                  QUERO A PREPARAÇÃO COMPLETA
                </a>
                <p className="text-xs text-gray-500 mt-4">
                  Sem mensalidade · Acesso imediato · Garantia de 7 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
