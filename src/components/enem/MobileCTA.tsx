"use client";

import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("oferta-inicial")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3">
        <a
          href="#oferta-inicial"
          onClick={scrollToOffers}
          className="flex items-center justify-center w-full py-3.5 text-sm font-bold text-white bg-blue-600 rounded-xl cta-shadow active:scale-[0.98] transition-transform"
        >
          VER PLANOS A PARTIR DE R$ 16,90
        </a>
      </div>
    </div>
  );
}
