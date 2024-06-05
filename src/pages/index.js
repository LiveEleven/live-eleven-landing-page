import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Client from "@/components/Client";
import EquipmentService from "@/components/EquipmentService";
import EventOrganizer from "@/components/EventOrganizer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HybridEvent from "@/components/HybridEvent";
import LivePackages from "@/components/LivePackages";
import LiveService from "@/components/LiveService";
import LiveStream from "@/components/LiveStream";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import RecordLive from "@/components/RecordLive";
import SetUpLiveStreaming from "@/components/SetUpLiveStreaming";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <LiveStream />
      <LiveService />
      <OurWork />
      <RecordLive />
      <LivePackages />
      <EventOrganizer />
      <HybridEvent />
      <SetUpLiveStreaming />
      <EquipmentService />
      <AboutUs />
      <Client />
      <ContactUs />
      <Footer />
    </main>
  );
}
