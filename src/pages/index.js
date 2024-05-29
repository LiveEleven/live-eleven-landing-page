import AboutUs from "@/components/AboutUs";
import EventOrganizer from "@/components/EventOrganizer";
import Header from "@/components/Header";
import LivePackages from "@/components/LivePackages";
import LiveService from "@/components/LiveService";
import LiveStream from "@/components/LiveStream";
import Navbar from "@/components/Navbar";
import RecordLive from "@/components/RecordLive";
import SetUpLiveStreaming from "@/components/SetUpLiveStreaming";

export default function Home() {
  return (
    <main>
      <Header />
      <LiveStream />
      <LiveService />
      <RecordLive />
      <LivePackages />
      <EventOrganizer />
      <SetUpLiveStreaming />
      <AboutUs />
    </main>
  );
}
