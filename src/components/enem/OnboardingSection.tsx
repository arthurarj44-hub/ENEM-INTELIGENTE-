"use client";

import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "1", title: "Faça seu diagnóstico", desc: "Responda às primeiras questões." },
  { num: "2", title: "Receba seu mapa", desc: "Veja suas áreas fortes e fracas." },
  { num: "3", title: "Descubra sua prioridade", desc: "O sistema mostra o que merece sua atenção." },
  { num: "4", title: "Comece a evoluir", desc: "Treine, acompanhe e repita." },
];

export default function OnboardingSection() {
  const { ref, isVisible } = useScrollAnimation();
  const score = useCountUp(67, isVisible, 1400);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className={`inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Primeiro acesso
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            EM POUCOS MINUTOS VOCÊ{" "}
            <span className="text-blue-600">DESCOBRE ONDE REALMENTE ESTÁ.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 ${isVisible ? `animate-fade-in-up delay-${(i + 2) * 100}` : "opacity-0"}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostic Result Mockup */}
          <div className={`${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
            <div className="dashboard-shadow rounded-2xl border border-gray-200/80 bg-white overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-semibold text-gray-500">SEU DIAGNÓSTICO</span>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-xs text-gray-400 mb-1">Nível geral</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-extrabold text-gray-900 tabular-nums">{score}</span>
                    <span className="text-xl text-gray-400 mb-1">/100</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium text-gray-700">Matemática</span>
                    </div>
                    <span className="text-sm font-bold text-blue-600">72%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="text-sm font-medium text-gray-700">Humanas</span>
                    </div>
                    <span className="text-sm font-bold text-amber-600">61%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="text-sm font-medium text-gray-700">Natureza</span>
                    </div>
                    <span className="text-sm font-bold text-amber-600">69%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-red-50/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="text-sm font-medium text-gray-700">Linguagens</span>
                    </div>
                    <span className="text-sm font-bold text-red-500">53%</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Seu maior ponto de atenção:</p>
                  <p className="text-sm font-bold text-gray-900">Interpretação de texto</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    Recomendação: Faça o treino de interpretação de texto antes de avançar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
