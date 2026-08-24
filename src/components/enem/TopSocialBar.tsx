"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: "🎯", text: "Mais direção nos estudos" },
  { icon: "📚", text: "Mais prática" },
  { icon: "📈", text: "Acompanhamento da evolução" },
  { icon: "🧠", text: "Preparação estratégica" },
];

export default function TopSocialBar() {
  const { ref, isVisible } = useScrollAnimation(0.01);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-950"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Stars */}
        <div
          className={`flex justify-center mb-5 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <span className="text-amber-400 text-xl sm:text-2xl tracking-widest">
            ★★★★★
          </span>
        </div>

        {/* Headline */}
        <div
          className={`text-center mb-3 ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            MAIS DE 2.000 ALUNOS JÁ FAZEM PARTE
            <br className="hidden sm:block" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              DESSA JORNADA
            </span>
          </h2>
        </div>

        {/* Subheadline */}
        <div
          className={`text-center max-w-2xl mx-auto mb-6 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Estudantes estão usando o ENEM Inteligente para organizar seus estudos,
            identificar pontos de melhoria, praticar questões e se preparar com mais
            estratégia para o ENEM.
          </p>
        </div>

        {/* Impact phrase */}
        <div
          className={`text-center mb-8 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <p className="text-base sm:text-lg font-semibold text-white italic">
            &ldquo;Quem quer conquistar uma vaga começa entendendo onde precisa melhorar.&rdquo;
          </p>
        </div>

        {/* Tag line */}
        <div
          className={`text-center mb-8 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase">
            Estudantes em busca de uma preparação mais inteligente
          </span>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] ${
                isVisible
                  ? `animate-fade-in-up delay-${(i + 4) * 100}`
                  : "opacity-0"
              }`}
            >
              <span className="text-lg sm:text-xl flex-shrink-0">{b.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
