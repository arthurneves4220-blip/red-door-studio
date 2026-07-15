import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RED DOOR – Estúdio de Beleza e Bem-Estar | Mirandela, Portugal",
  description:
    "Abra a porta para a sua melhor versão. Serviços premium de beleza, bem-estar e transformação em Mirandela, Portugal. Cabeleireiro, coloração, maquiagem, estética e muito mais.",
  keywords: [
    "salão de beleza",
    "cabeleireiro",
    "coloração",
    "maquiagem",
    "estética",
    "bem-estar",
    "Mirandela",
    "Portugal",
    "luxo",
    "premium",
  ],
  openGraph: {
    title: "RED DOOR – Estúdio de Beleza e Bem-Estar",
    description: "Abra a porta para a sua melhor versão.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-elegant-black">
        {children}
      </body>
    </html>
  );
}
