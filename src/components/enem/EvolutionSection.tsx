"use client";

import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const weeks = [
  { label: "Semana 1", value: 48 },
  { label: "Semana 2", value: 56 },
  { label: "Semana 3", value: 63 },
  { label: "Semana 4", value: 71 },
];

export default function EvolutionSection() {
  const { ref, isVisible } = useScrollAnimation();
  const evolution = useCountUp(23, isVisible, 1400);

  const maxVal = 100;

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Você não está apenas estudando.
            <br />
            <span className="text-blue-600">Você está vendo sua evolução.</span>
          </h2>
        </div>

        <div className={`${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"} dashboard-shadow rounded-2xl border border-gray-200/80 bg-white overflow-hidden`}>
          <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-gray-500">Evolução semanal</span>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">+{evolution}%</span>
          </div>
          <div className="p-6">
            <div className="flex items-end justify-between gap-4 h-48">
              {weeks.map((w, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-sm font-bold text-gray-900 tabular-nums">{w.value}%</span>
                  <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden" style={{ height: "100%" }}>
                    <div
                      className={`absolute bottom-0 left-0 right-0 rounded-t-lg ${i === 3 ? "bg-blue-500" : "bg-blue-200"} animate-bar-grow`}
                      style={{ height: `${(w.value / maxVal) * 100}%`, animationDelay: `${(i + 1) * 200}ms` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{w.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
