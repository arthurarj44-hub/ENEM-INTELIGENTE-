"use client";

import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

function ProgressBar({
  label,
  percentage,
  color,
  delay,
}: {
  label: string;
  percentage: number;
  color: string;
  delay: string;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-gray-600">{label}</span>
        <span className="text-xs font-semibold text-gray-800">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} ${delay} animate-bar-grow`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const score = useCountUp(67, isVisible, 1500);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Badge */}
        <div
          className={`flex justify-center mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            PLATAFORMA INTELIGENTE DE PREPARAÇÃO PARA O ENEM
          </span>
        </div>

        {/* Headline */}
        <div
          className={`text-center max-w-3xl mx-auto mb-6 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.08]">
            PARE DE ESTUDAR PARA O{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              ENEM NO ESCURO.
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
        >
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Descubra exatamente onde você está errando, quais assuntos precisa
            priorizar e o que estudar a seguir — tudo em um único painel de
            preparação.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col items-center gap-3 mb-6 ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}
        >
          <a
            href="#oferta-inicial"
            onClick={(e) => { e.preventDefault(); document.getElementById('oferta-inicial')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl cta-shadow hover:bg-blue-700 transition-all duration-200 active:scale-[0.98]"
          >
            QUERO COMEÇAR AGORA
          </a>
          <p className="text-sm text-gray-400">
            Acesso imediato · Pagamento único · Garantia de 7 dias
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div
          className={`max-w-4xl mx-auto mt-12 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}
        >
          <div className="dashboard-shadow rounded-2xl border border-gray-200/80 bg-white overflow-hidden">
            {/* Dashboard header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-blue-400" />
              </div>
              <span className="text-xs font-medium text-gray-400">
                ENEM INTELIGENTE
              </span>
              <div className="w-16" />
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left - Score + Progress */}
                <div className="md:col-span-2 space-y-5">
                  {/* Score Card */}
                  <div className="bg-surface rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-500">
                        Seu nível ENEM
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Você está evoluindo!
                      </span>
                    </div>
                    <div className="flex items-end gap-2 mt-2">
                      <span className="text-5xl font-extrabold text-gray-900 tabular-nums">
                        {score}
                      </span>
                      <span className="text-xl font-medium text-gray-400 mb-1">
                        /100
                      </span>
                    </div>

                    <div className="mt-5 space-y-1">
                      <ProgressBar
                        label="Matemática"
                        percentage={72}
                        color="bg-blue-500"
                        delay="delay-500"
                      />
                      <ProgressBar
                        label="Ciências da Natureza"
                        percentage={69}
                        color="bg-blue-400"
                        delay="delay-600"
                      />
                      <ProgressBar
                        label="Ciências Humanas"
                        percentage={61}
                        color="bg-amber-400"
                        delay="delay-700"
                      />
                      <ProgressBar
                        label="Linguagens"
                        percentage={53}
                        color="bg-red-400"
                        delay="delay-800"
                      />
                    </div>
                  </div>
                </div>

                {/* Right - Focus Card */}
                <div>
                  <div className="bg-white rounded-xl p-5 border border-blue-200 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-sm">
                        🎯
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        Seu próximo foco
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Interpretação de texto
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Este assunto apresentou maior índice de erros nos seus
                        últimos treinos.
                      </p>
                    </div>
                    <button className="mt-4 w-full py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                      COMEÇAR TREINO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
