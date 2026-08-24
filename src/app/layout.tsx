import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENEM INTELIGENTE — Pare de Estudar no Escuro",
  description:
    "Descubra exatamente onde voc\u00ea est\u00e1 errando, quais assuntos precisa priorizar e o que estudar a seguir — tudo em um \u00fanico painel de prepara\u00e7\u00e3o para o ENEM.",
  keywords: [
    "ENEM",
    "prepara\u00e7\u00e3o ENEM",
    "estudo inteligente",
    "diagn\u00f3stico ENEM",
    "banco de quest\u00f5es",
    "simulado ENEM",
  ],
  openGraph: {
    title: "ENEM INTELIGENTE — Plataforma Inteligente de Prepara\u00e7\u00e3o",
    description:
      "Pare de estudar no escuro. Diagn\u00f3stico, prioridades e treinos direcionados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
