import Image from "next/image";

const LiveServicesCard = ({ data }) => {
  return (
    <div className="flex flex-col bg-black text-white items-center rounded-[80px] px-auto py-4 md:py-10 gap-5 text-center">
      <div className="relative w-[60px] h-[60px] lg:w-[132px] lg:h-[132px] ">
        <Image src={data.image} fill alt={data.title} />
      </div>
      <p className="text-base lg:text-xl px-7">{data.title}</p>
    </div>
  );
};

export default LiveServicesCard;
