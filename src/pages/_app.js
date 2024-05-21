import "@/styles/globals.css";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={notoSansThai.className}>
      <Component {...pageProps} />
    </main>
  );
}

