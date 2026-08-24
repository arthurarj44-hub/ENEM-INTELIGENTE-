"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  "Estudar sem saber por onde começar",
  "Fazer centenas de questões sem entender seus erros",
  "Não saber quais assuntos priorizar",
  "Não conseguir medir sua evolução",
  "Montar cronogramas que não consegue seguir",
];

export default function PainSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Você não precisa estudar mais.{" "}
            <span className="text-blue-600">Precisa estudar melhor.</span>
          </h2>
          <p
            className={`mt-5 text-base sm:text-lg text-gray-500 leading-relaxed ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
          >
            Talvez você já tenha passado horas assistindo aulas, resolvendo
            questões e tentando montar cronogramas.
          </p>
          <p
            className={`mt-3 text-base sm:text-lg text-gray-500 leading-relaxed ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
          >
            O problema é que estudar sem saber suas prioridades faz você
            desperdiçar tempo. Você pode estar revisando aquilo que já domina
            enquanto deixa de lado assuntos que estão realmente derrubando sua
            pontuação.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 ${isVisible ? `animate-fade-in-up delay-${(i + 3) * 100}` : "opacity-0"}`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 leading-snug">
                {problem}
              </span>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in-up delay-800" : "opacity-0"}`}
        >
          <p className="text-lg sm:text-xl font-bold text-gray-900">
            O ENEM INTELIGENTE muda isso.
          </p>
        </div>
      </div>
    </section>
  );
}
