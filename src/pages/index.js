import AboutUs from "@/components/AboutUs";
import EquipmentService from "@/components/EquipmentService";
import EventOrganizer from "@/components/EventOrganizer";
import Header from "@/components/Header";
import HybridEvent from "@/components/HybridEvent";
import LivePackages from "@/components/LivePackages";
import LiveService from "@/components/LiveService";
import LiveStream from "@/components/LiveStream";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import RecordLive from "@/components/RecordLive";
import SetUpLiveStreaming from "@/components/SetUpLiveStreaming";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <main>
      <Header />
      <LiveStream />
      <LiveService />
      <OurWork />
      <RecordLive />
      <LivePackages />
      <EquipmentService />
      <EventOrganizer />
      <HybridEvent />
      <SetUpLiveStreaming />
      <AboutUs />
    </main>
  );
}

