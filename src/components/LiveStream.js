import Image from "next/image";

const LiveStream = () => {
  return (
    <div className="flex flex-col justify-center" id="live">
      <div className="bg-customTopGradient h-[200px]"></div>
      <div className="flex justify-center">
        <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold font-head">
          LIVE STREAM
        </h1>
      </div>
      <hr class="w-32 h-1 mx-auto my-6 bg-primary-color border-0 rounded md:my-16 md:w-40 lg:w-48" />
      <div className="flex justify-center">
        <div className="flex flex-col lg:hidden gap-6 px-8 md:gap-10 md:px-6">
          <h2 className="font-semibold font-body text-sm sss:text-[15px] text-center md:text-3xl">
            บริการ Live Streaming ครบวงจรทุกแพลตฟอร์ม
          </h2>

          <p className="font-body indent-5 md:indent-20 xs:text-xs ss:text-sm sss:text-[15px] md:text-xl">
            เชื่อมต่อกับผู้ชมของคุณบนทุกแพลตฟอร์มยอดนิยม ไม่ว่าจะเป็น Facebook,
            Shopee, Lazada, TikTok, YouTube, Instagram, ZOOM หรือ Microsoft
            Teams พร้อมรองรับ การสตรีมทั้งในแนวตั้งและแนวนอน
          </p>

          <p className="font-body xs:text-xs ss:text-sm sss:text-[15px] indent-5 md:indent-20 md:text-xl">
            เราพร้อมให้บริการงานสตรีมมิ่งทุกรูปแบบ ตั้งแต่งานขนาดเล็ก กลาง
            จนถึงงานขนาดใหญ่ ไม่ว่าคุณจะจัดอีเวนต์ งานประชุม เปิดตัวสินค้า
            หรือกิจกรรมพิเศษอื่นๆ เพื่อให้การ
            สตรีมมิ่งของคุณสมบูรณ์แบบและประสบความสำเร็จ
            ทีมงานมืออาชีพของเราพร้อมจะดูแลและสนับสนุนคุณในทุกขั้นตอน
          </p>
        </div>

        <div className="hidden lg:flex flex-col gap-6 px-8 md:gap-10 md:px-6 lg:gap-18">
          <h2 className="font-semibold font-body text-xs text-center md:text-2xl lg:text-3xl lg:text-left">
            บริการ Live Streaming ครบวงจรทุกแพลตฟอร์ม
          </h2>
          <div className="flex flex-col">
            <p className="font-body indent-5 md:indent-20 text-xs  md:text-xl lg:text-2xl">
              เชื่อมต่อกับผู้ชมของคุณบนทุกแพลตฟอร์มยอดนิยม ไม่ว่าจะเป็น
              Facebook, Shopee, Lazada, TikTok,
            </p>
            <p className="font-body text-xs md:text-xl lg:text-2xl">
              YouTube, Instagram, ZOOM หรือ Microsoft Teams
              พร้อมรองรับการสตรีมทั้งในแนวตั้งและแนวนอน
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-body text-xs indent-5 md:indent-20 md:text-xl lg:text-2xl">
              เราพร้อมให้บริการงานสตรีมมิ่งทุกรูปแบบ ตั้งแต่งานขนาดเล็ก กลาง
              จนถึงงานขนาดใหญ่ ไม่ว่าคุณจะจัดอีเวนต์
            </p>
            <p className="font-body text-xs md:text-xl lg:text-2xl">
              งานประชุม เปิดตัวสินค้า หรือกิจกรรมพิเศษอื่นๆ
              ทีมงานมืออาชีพของเราพร้อมจะดูแลและสนับสนุนคุณในทุกขั้นตอน
            </p>
            <p className="font-body text-xs md:text-xl lg:text-2xl">
              เพื่อให้การสตรีมมิ่งของคุณสมบูรณ์แบบและประสบความสำเร็จ
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto mt-7">
        <div className="flex items-center justify-center ">
          <div className="flex justify-center items-center">
            <Image
              src={"/Brand/Facebook-brand.png"}
              width={200}
              height={200}
              alt="facebook-brand"
            />
          </div>
          <div className="relative w-auto h-auto  flex justify-center items-center">
            <Image
              src={"/Brand/Instagram-brand3.png"}
              width={200}
              height={200}
              alt="instagram-brand"
            />
          </div>
          <div className="relative w-auto h-auto  flex justify-center items-center">
            <Image
              src={"/Brand/Tiktok-brand.png"}
              width={200}
              height={200}
              alt="tiltok-brand"
            />
          </div>
          <div className="relative w-auto h-auto  flex justify-center items-center">
            <Image
              src={"/Brand/Youtube-brand.png"}
              width={200}
              height={200}
              alt="youtube-brand"
            />
          </div>
          <div className="relative w-auto h-auto  flex justify-center items-center">
            <Image
              src={"/Brand/Lazada-brand.png"}
              width={200}
              height={200}
              alt="lazada-brand"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <div className="relative w-[80px]  sss:w-[130px] md:w-auto h-200   flex justify-center items-center">
            <Image
              src={"/Brand/Shopee-brand.png"}
              width={200}
              height={200}
              alt="shopee-brand"
            />
          </div>
          <div className="relative w-[110px] h-auto sss:w-[130px] md:w-auto flex justify-center items-center">
            <Image
              src={"/Brand/Teams-brand.png"}
              width={200}
              height={200}
              alt="teams-brand"
            />
          </div>
          <div className="relative w-[80px] h-auto   sss:w-[130px] md:w-auto flex justify-center items-center">
            <Image
              src={"/Brand/Zoom-brand.png"}
              width={200}
              height={200}
              alt="zoom-brand"
            />
          </div>
        </div>
      </div>
      <hr class="w-32 h-1 mx-auto mt-5 bg-primary-color border-0 rounded md:mt-14 md:w-40 lg:w-48" />
      <div className="bg-customBottomGradient h-[200px]"></div>
    </div>
  );
};

export default LiveStream;

