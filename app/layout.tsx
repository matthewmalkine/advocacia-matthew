import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = { title: "Escritório de Advocacia", description: "Soluções jurídicas estratégicas, atendimento próximo e compromisso com resultados." };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="pt-BR" className={inter.variable}><body>{children}</body></html>;
}
