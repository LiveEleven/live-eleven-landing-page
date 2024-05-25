import "@/styles/globals.css";
import { Noto_Sans_Thai, Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const notoSansThai = Noto_Sans_Thai({
  variable: "--noto-sans-font",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className={`${notoSansThai.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

