import Image from "next/image";

const LiveStream = () => {
  return (
    <div className="flex flex-col justify-center">
      <Image
        src="/BodyTop.png"
        width={3840}
        height={200}
        alt="BodyTop"
        className="mb-16"
      />
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-center lg:text-left  text-black font-bold font-head">
          LIVE STREAM
        </h1>
      </div>
      <hr class="w-32 h-1 mx-auto my-6 bg-primary-color border-0 rounded md:my-16 md:w-40 lg:w-48" />
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 px-8 md:gap-10 md:px-6 lg:gap-18">
          <h2 className="font-semibold font-body text-xs text-center md:text-3xl lg:text-4xl lg:text-left">
            บริการ Live Streaming ครบวงจรทุกแพลตฟอร์ม
          </h2>
          <div className="flex flex-col">
            <p className="font-body text-xs indent-5 md:indent-20 md:text-3xl lg:text-3xl">
              เชื่อมต่อกับผู้ชมของคุณบนทุกแพลตฟอร์มยอดนิยม ไม่ว่าจะเป็น
              Facebook, Shopee, Lazada, TikTok,
            </p>
            <p className="font-body text-xs md:text-3xl lg:text-3xl ">
              YouTube, Instagram, ZOOM หรือ Microsoft Teams
              พร้อมรองรับการสตรีมทั้งในแนวตั้งและแนวนอน
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-body text-xs indent-5 md:indent-20 md:text-3xl ">
              เราพร้อมให้บริการงานสตรีมมิ่งทุกรูปแบบ ตั้งแต่งานขนาดเล็ก กลาง
              จนถึงงานขนาดใหญ่ ไม่ว่าคุณจะจัดอีเวนต์
            </p>
            <p className="font-body text-xs md:text-3xl">
              งานประชุม เปิดตัวสินค้า หรือกิจกรรมพิเศษอื่นๆ
              ทีมงานมืออาชีพของเราพร้อมจะดูแลและสนับสนุนคุณในทุกขั้นตอน
            </p>
            <p className="font-body text-xs md:text-3xl">
              เพื่อให้การสตรีมมิ่งของคุณสมบูรณ์แบบและประสบความสำเร็จ
            </p>
          </div>
        </div>
      </div>
      <hr class="w-32 h-1 mx-auto mt-10 bg-primary-color border-0 rounded md:mt-20 md:w-40 lg:w-48" />
      <Image
        src="/BodyBottom.png"
        width={3840}
        height={200}
        alt="BodyTop"
        className="mt-14"
      />
    </div>
  );
};

export default LiveStream;
