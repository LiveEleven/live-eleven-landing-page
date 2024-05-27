import Header from "@/components/Header";
import LiveService from "@/components/LiveService";
import LiveStream from "@/components/LiveStream";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Header />
      <LiveStream />
      {/* <LiveService /> */}
    </main>
  );
}
