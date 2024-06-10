import Image from "next/image";

const HybridEvent = () => {
  return (
    <div
      className="h-auto flex flex-col items-center w-full justify-between px-5 lg:px-12 lg:flex-row 2xl:px-48"
      id="hybrid"
    >
      <Image
        data-aos="fade-right"
        data-aos-delay={200}
        data-aos-duration="500"
        src="/Carousel/6.png"
        width={600}
        height={200}
        alt="EventPic"
        className="rounded-xl my-10"
        style={{ width: "auto" }}
      />
      <div
        data-aos="fade-left"
        data-aos-delay={200}
        data-aos-duration="500"
        className="flex flex-col gap-5 mb-10 lg:gap-20 lg:mb-0 lg:pl-36"
      >
        <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold font-head lg:text-left">
          HYBRID EVENT
        </h1>
        <div>
          <p className="font-body text-xs text-black text-center md:text-3xl 2xl:text-4xl lg:text-left">
            ให้บริการจัดประชุมหรือจัดกิจกรรม ระหว่างออนไลน์และออฟไลน์(ในสถานที่)
            ให้สามารถโต้ตอบกันได้ เสมือนอยู่ในสถานที่เดียวกัน
          </p>
        </div>
      </div>
    </div>
  );
};

export default HybridEvent;
