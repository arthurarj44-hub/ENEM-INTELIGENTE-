"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const rows = [
  ["Saber o que estudar", false, "Parcial", true],
  ["Diagnóstico", false, "Parcial", true],
  ["Questões organizadas", false, true, true],
  ["Identificar pontos fracos", false, "Parcial", true],
  ["Recomendações", false, false, true],
  ["Painel de evolução", false, "Parcial", true],
  ["Treinos direcionados", false, "Parcial", true],
  ["Acompanhamento", false, "Parcial", true],
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <svg className="w-5 h-5 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  if (value === false)
    return (
      <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  return <span className="text-sm text-gray-500">{value}</span>;
}

export default function ComparisonTable() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            COMO O ENEM INTELIGENTE{" "}
            <span className="text-blue-600">SE DIFERENCIA.</span>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className={`hidden md:block rounded-2xl border border-gray-200 overflow-hidden ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <table className="w-full">
            <thead>
              <tr className="bg-surface">
                <th className="text-left text-sm font-semibold text-gray-500 px-6 py-4">Recurso</th>
                <th className="text-center text-sm font-semibold text-gray-500 px-4 py-4 w-36">Estudar sozinho</th>
                <th className="text-center text-sm font-semibold text-gray-500 px-4 py-4 w-36">Curso tradicional</th>
                <th className="text-center text-sm font-bold text-blue-600 px-4 py-4 w-44 bg-blue-50/50">ENEM INTELIGENTE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="text-sm font-medium text-gray-700 px-6 py-3.5">{row[0]}</td>
                  <td className="px-4 py-3.5"><Cell value={row[1] as boolean | string} /></td>
                  <td className="px-4 py-3.5"><Cell value={row[2] as boolean | string} /></td>
                  <td className="px-4 py-3.5 bg-blue-50/30"><Cell value={row[3] as boolean | string} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="p-4 rounded-xl bg-surface border border-gray-100">
              <p className="text-sm font-semibold text-gray-800 mb-3">{row[0]}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Cell value={row[1] as boolean | string} />
                  <span className="text-xs text-gray-400">Sozinho</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cell value={row[2] as boolean | string} />
                  <span className="text-xs text-gray-400">Curso</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cell value={row[3] as boolean | string} />
                  <span className="text-xs font-bold text-blue-600">EI</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
