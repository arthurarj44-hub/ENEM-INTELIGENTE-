"use client";

import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

function SubjectBar({ name, percentage }: { name: string; percentage: number }) {
  const color =
    percentage >= 70
      ? "bg-blue-500"
      : percentage >= 50
      ? "bg-amber-400"
      : "bg-red-400";
  const textColor =
    percentage >= 70
      ? "text-blue-600"
      : percentage >= 50
      ? "text-amber-600"
      : "text-red-500";

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-28 flex-shrink-0">{name}</span>
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} animate-bar-grow`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className={`text-sm font-bold tabular-nums w-10 text-right ${textColor}`}>
        {percentage}%
      </span>
    </div>
  );
}

export default function ProductDemo() {
  const { ref, isVisible } = useScrollAnimation();
  const acertos = useCountUp(73, isVisible, 1000);
  const questoes = useCountUp(248, isVisible, 1200);
  const sequencia = useCountUp(7, isVisible, 800);
  const evolucao = useCountUp(18, isVisible, 1000);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className={`inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Veja na prática
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            ASSIM SE PARECE O SEU{" "}
            <span className="text-blue-600">PAINEL.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Screen 1: Performance */}
          <div className={`dashboard-shadow rounded-2xl border border-gray-200/80 bg-white overflow-hidden ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-gray-500">Seu desempenho</span>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surface rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">Acertos</p>
                  <p className="text-3xl font-extrabold text-gray-900 tabular-nums">{acertos}<span className="text-lg text-gray-400">%</span></p>
                </div>
                <div className="bg-surface rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">Respondidas</p>
                  <p className="text-3xl font-extrabold text-gray-900 tabular-nums">{questoes}</p>
                </div>
                <div className="bg-surface rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">Sequência</p>
                  <p className="text-3xl font-extrabold text-gray-900 tabular-nums">{sequencia}<span className="text-sm text-gray-400 ml-0.5">dias</span></p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-blue-600 mb-1">Evolução</p>
                  <p className="text-3xl font-extrabold text-blue-600 tabular-nums">+{evolucao}<span className="text-lg">%</span></p>
                </div>
              </div>
              {/* Mini chart bars */}
              <div className="flex items-end gap-1.5 h-16">
                {[40, 48, 52, 45, 58, 62, 55, 67, 71, 68, 75, 73].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-blue-100 hover:bg-blue-200 transition-colors"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-gray-300">Jan</span>
                <span className="text-[10px] text-gray-300">Jun</span>
                <span className="text-[10px] text-gray-300">Dez</span>
              </div>
            </div>
          </div>

          {/* Screen 2: Subjects */}
          <div className={`dashboard-shadow rounded-2xl border border-gray-200/80 bg-white overflow-hidden ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
            <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-gray-500">Seus assuntos</span>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Matemática</p>
              <div className="space-y-4">
                <SubjectBar name="Porcentagem" percentage={82} />
                <SubjectBar name="Funções" percentage={64} />
                <SubjectBar name="Geometria" percentage={51} />
                <SubjectBar name="Probabilidade" percentage={43} />
              </div>
              <div className="mt-5 pt-4 border-t border-gray-50">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Linguagens</p>
                <div className="space-y-4">
                  <SubjectBar name="Interpretação" percentage={38} />
                  <SubjectBar name="Figuras de linguagem" percentage={71} />
                  <SubjectBar name="Concordância" percentage={59} />
                </div>
              </div>
              {/* Legend */}
              <div className="flex items-center gap-4 mt-5 pt-3 border-t border-gray-50">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-[10px] text-gray-400">Domínio</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] text-gray-400">Atenção</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="text-[10px] text-gray-400">Prioridade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 3: Recommendations */}
          <div className={`dashboard-shadow rounded-2xl border border-gray-200/80 bg-white overflow-hidden ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
            <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-gray-500">O que estudar agora?</span>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                {/* Priority 1 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50/60 border border-red-100">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm font-bold text-red-500">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Interpretação de texto</p>
                    <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-semibold text-red-600 bg-red-100">
                      Prioridade alta
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                {/* Priority 2 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/60 border border-amber-100">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-sm font-bold text-amber-600">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Probabilidade</p>
                    <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-semibold text-amber-600 bg-amber-100">
                      Prioridade média
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                {/* Priority 3 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/40 border border-amber-100/60">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-sm font-bold text-amber-600">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Geometria</p>
                    <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-semibold text-amber-600 bg-amber-100">
                      Prioridade média
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
              <a
                href="#oferta-inicial"
                onClick={(e) => { e.preventDefault(); document.getElementById('oferta-inicial')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                className="mt-5 w-full inline-flex items-center justify-center py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors cta-shadow"
              >
                VER PLANOS E PREÇOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
