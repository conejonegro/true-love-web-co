import { Lato } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "True Love Web Co — Desarrollo web con corazón",
  description:
    "Agencia de desarrollo web en Guadalajara, Jalisco. Creamos sitios y aplicaciones web para todo tipo de negocios, con diseño profesional y código de calidad.",
  openGraph: {
    title: "True Love Web Co — Desarrollo web con corazón",
    description:
      "Agencia de desarrollo web en Guadalajara, Jalisco. Sitios y apps web para todo tipo de negocios.",
    locale: "es_MX",
    type: "website",
    images: [{ width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lato.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
