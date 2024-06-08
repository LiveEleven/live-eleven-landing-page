import Image from "next/image";

const LiveServicesCard = ({ data }) => {
  return (
    <div className="flex flex-col bg-black text-white items-center rounded-3xl px-auto py-4 md:py-10 gap-5 text-center relative group">
      <div className="relative w-[40px] h-[40px] lg:w-[66px] lg:h-[66px] ">
        <Image src={data.image} fill alt={data.title} />
      </div>
      <p className="text-xs lg:text-xl px-7">{data.title}</p>
      <div className="absolute w-full bg-black flex items-center justify-center top-0 h-full rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm px-5">{data.description}</p>
      </div>
    </div>
  );
};

export default LiveServicesCard;
