"use client";

import { Fragment } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const rows = [
  ["Diagnóstico", true, true],
  ["Banco de questões", true, true],
  ["Painel de evolução", true, true],
  ["Recomendações", true, true],
  ["Simulados completos", false, true],
  ["Análise avançada", false, true],
  ["Redação 900+", false, true],
  ["Treinamento de redação", false, true],
  ["Pacote completo", false, true],
  ["Acesso vitalício", false, true],
];

export default function PlanComparison() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            COMPARE OS <span className="text-blue-600">PLANOS.</span>
          </h2>
        </div>

        {/* Desktop */}
        <div className={`hidden md:grid grid-cols-3 gap-0 rounded-2xl border border-gray-200 overflow-hidden ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {/* Header */}
          <div className="p-6 bg-surface border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-500">Recurso</p>
          </div>
          <div className="p-6 bg-surface border-b border-gray-200 text-center">
            <p className="text-sm font-semibold text-gray-500">Inicial</p>
            <p className="text-2xl font-extrabold text-gray-900 mt-1">R$ 16<span className="text-lg">,90</span></p>
          </div>
          <div className="p-6 bg-blue-600 text-center relative">
            <span className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 rounded-full bg-amber-400 text-xs font-bold text-gray-900">
              ⭐ MAIS COMPLETO
            </span>
            <p className="text-sm font-semibold text-blue-100">Completo</p>
            <p className="text-2xl font-extrabold text-white mt-1">R$ 59<span className="text-lg">,90</span></p>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <Fragment key={i}>
              <div className={`px-6 py-3.5 text-sm text-gray-700 border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}>{row[0]}</div>
              <div className={`px-6 py-3.5 text-center border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}>
                {row[1] ? (
                  <svg className="w-5 h-5 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <span className="text-gray-300">—</span>
                )}
              </div>
              <div className={`px-6 py-3.5 text-center border-b border-gray-100 ${i % 2 === 0 ? "bg-blue-50/50" : "bg-blue-50/30"}`}>
                {row[2] ? (
                  <svg className="w-5 h-5 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <span className="text-gray-300">—</span>
                )}
              </div>
            </Fragment>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface border border-gray-100">
              <span className="text-sm font-medium text-gray-700">{row[0]}</span>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                  {row[1] ? (
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <span className="text-gray-300 text-sm">—</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  {row[2] ? (
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <span className="text-gray-300 text-sm">—</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center gap-6 pt-2">
            <div className="text-center">
              <p className="text-xs text-gray-400">Inicial</p>
              <p className="text-lg font-extrabold text-gray-900">R$ 16,90</p>
            </div>
            <div className="text-center">
              <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-[10px] font-bold text-amber-700 mb-1">⭐ MAIS COMPLETO</span>
              <p className="text-lg font-extrabold text-blue-600">R$ 59,90</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
