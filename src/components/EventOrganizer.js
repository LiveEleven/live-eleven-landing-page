import Image from "next/image";

const EventOrganizer = () => {
  return (
    <div
      className="bg-primary-color h-auto flex flex-col items-center w-full justify-between px-5 lg:px-12 lg:flex-row-reverse 2xl:px-48"
      id="event"
    >
      <Image
        data-aos="fade-left"
        data-aos-delay={200}
        data-aos-duration="1000"
        src="/Event.jpg"
        width={600}
        height={200}
        alt="EventPic"
        className="rounded-xl my-10"
      />
      <div
        data-aos="fade-right"
        data-aos-delay={200}
        data-aos-duration="1000"
        className="flex flex-col gap-5 mb-10 lg:gap-20 lg:mb-0"
      >
        <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold font-head lg:text-left">
          EVENT ORGANIZER
        </h1>
        <div className="mb-5">
          <p className="font-body text-xs text-white text-center md:text-3xl 2xl:text-4xl lg:text-left">
            ให้บริการจัดงานอีเวนท์ขนาดเล็ก กลาง ใหญ่ งานเปิดตัวสินค้า
          </p>
          <p className="font-body text-xs text-white text-center md:text-3xl 2xl:text-4xl lg:text-left">
            งาน fanmeet งานมอบรางวัล และงานพิธีการต่างๆ
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventOrganizer;
