import Image from "next/image";

const LiveServicesCard = ({ data }) => {
  return (
    <div className="flex flex-col bg-black text-white items-center rounded-[80px] px-auto py-4 md:py-10 gap-5 text-center">
      <div className="relative w-[40px] h-[40px] lg:w-[66px] lg:h-[66px] ">
        <Image src={data.image} fill alt={data.title} />
      </div>
      <p className="text-xs lg:text-xl px-7">{data.title}</p>
    </div>
  );
};

export default LiveServicesCard;
