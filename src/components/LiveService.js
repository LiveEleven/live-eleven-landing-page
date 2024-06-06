import { liveServicesData } from "@/data/liveServices";
import LiveServicesCard from "./LiveServicesCard";
const LiveService = () => {
  return (
    <div className="flex flex-col bg-primary-color h-auto items-center ">
      <h2 className="text-white font-bold font-head text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl items-center mt-5">
        LIVE STREAM SERVICES
      </h2>
      <hr class="w-32 h-1 mx-auto my-6 bg-white border-0 rounded md:my-16 md:w-40 lg:w-48" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-11 mx-8 ">
        {liveServicesData.map((data) => {
          return <LiveServicesCard key={data.title} data={data} />;
        })}
      </div>
      <hr class="w-32 h-1 mx-auto mt-10 bg-white border-0 rounded md:mt-20 md:w-40 lg:w-48" />
    </div>
  );
};

export default LiveService;
