import "../styles/globals.css";
import "../styles/elastic.css";
import "../styles/component.navbar.css";
import "../styles/component.transition.css";

import type { AppProps } from "next/app";
import { JetBrains_Mono, La_Belle_Aurore } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Transition from "../components/Transition";

const mono = JetBrains_Mono({ subsets: ["latin"], style: ["normal", "italic"] });
const cursive = La_Belle_Aurore({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-mono: ${mono.style.fontFamily};
          --font-cursive: ${cursive.style.fontFamily};
        }
      `}</style>
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Analytics />
    </>
  );
}
