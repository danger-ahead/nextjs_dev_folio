import "../styles/globals.css";
import "../styles/component.bouncingtext.css";
import "../styles/component.navbar.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
