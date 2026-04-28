import PlausibleProvider from 'next-plausible'


import { Inter, Fraunces } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/style.scss";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata = {
  metadataBase: new URL("https://soschats-hautedordogne.fr"),
  title: {
    default: "SOS Chats Haute-Dordogne — Stérilisation et protection des chats errants",
    template: "%s — SOS Chats Haute-Dordogne",
  },
  description:
    "Association loi 1901 qui stérilise, soigne et place les chats errants de Haute-Dordogne depuis 2003. Bureau à La Bourboule, Puy-de-Dôme.",
  keywords: [
    "SOS Chats",
    "Haute-Dordogne",
    "La Bourboule",
    "chats errants",
    "stérilisation",
    "association",
    "protection animale",
    "Puy-de-Dôme",
  ],
  openGraph: {
    title: "SOS Chats Haute-Dordogne",
    description:
      `${new Date().getFullYear() - 2003} ans au service des chats errants : stérilisation, soins, placement et lutte contre la maltraitance.`,
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`} data-scroll-behavior="smooth">
      <head>
        <PlausibleProvider src="https://plausible.io/js/pa-6clx19siYp8S59ERoCif-.js" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
