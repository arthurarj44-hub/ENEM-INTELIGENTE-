"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "DIAGNOSTIQUE",
    desc: "Responda questões e descubra seu nível atual.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "PRIORIZE",
    desc: "Identifique os assuntos que mais precisam da sua atenção.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "PRATIQUE",
    desc: "Receba treinos focados nos seus pontos de melhoria.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "EVOLUA",
    desc: "Acompanhe seus resultados e veja seu progresso.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const flowItems = ["QUESTÃO", "ERRO", "DIAGNÓSTICO", "PRIORIDADE", "TREINO", "EVOLUÇÃO"];

export default function MechanismSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Como funciona
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            SEU ESTUDO AGORA TEM{" "}
            <span className="text-blue-600">UM SISTEMA.</span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg text-gray-500 leading-relaxed ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            O ENEM INTELIGENTE transforma seus resultados em um mapa de
            preparação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative group ${isVisible ? `animate-fade-in-up delay-${(i + 2) * 100}` : "opacity-0"}`}
            >
              <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-300 tracking-wider">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {/* Connector arrow (desktop) */}
              {i < 3 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 text-blue-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow */}
        <div className={`overflow-x-auto pb-4 ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 min-w-max px-4">
            {flowItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-blue-50 border border-blue-100 text-xs sm:text-sm font-semibold text-blue-700">
                  {item}
                </span>
                {i < flowItems.length - 1 && (
                  <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
