const AboutUs = () => {
  return (
    <div
      className="bg-primary-color h-auto flex flex-col items-center w-full"
      id="aboutus"
    >
      <h1 className=" mt-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-center text-white font-bold font-head lg:text-left">
        ABOUT US
      </h1>
      <hr class="w-32 h-1 mx-auto my-6 bg-white border-0 rounded md:my-16 md:w-40 lg:w-48" />
      <p className="font-body text-[10px] text-center text-white md:text-xl lg:text-3xl 2xl:text-4xl">
        Eleven Media Live เราคือ Live Production ที่มีบริการแบบ One Stop Service
      </p>
      <p className="font-body text-[10px] text-center text-white md:text-xl lg:text-3xl 2xl:text-4xl">
        โดยทีมงานที่มากประสบการณ์พร้อมด้วย Hardware & Software
        ที่มีคุณภาพระดับสากล
      </p>
      <p className="font-body text-[10px] text-center text-white md:text-xl lg:text-3xl 2xl:text-4xl">
        เราใส่ใจทุกกระบวนการเพื่อให้ได้ผลลัพธ์ที่พึงพอใจที่สุดสำหรับคุณ
      </p>
      <hr class="w-32 h-1 mx-auto mt-10 bg-white border-0 rounded md:mt-20 md:w-40 lg:w-48 mb-5" />
    </div>
  );
};

export default AboutUs;

