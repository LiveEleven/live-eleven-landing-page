import Image from "next/image";
const Header = () => {
  return (
    <div className="bg-primary-color h-screen flex items-center flex-col lg:flex-row-reverse">
      <div
        data-aos="fade-left"
        data-aos-delay={200}
        data-aos-duration="1000"
        className="right w-full lg:w-1/2 h-[500px] lg:h-screen relative"
      >
        <picture className=" mx-auto">
          <source media="(min-width: 900px)" srcset="header-pic.png" />
          <Image
            src="/hero.png"
            fill={true}
            alt="header-pic"
            className="object-obtain"
          />
        </picture>
      </div>
      <div
        className="left w-auto flex flex-col gap-6 lg:gap-10 mx-auto my-8 "
        data-aos="fade-right"
        data-aos-delay={200}
        data-aos-duration="1000"
      >
        <h1
          className=" text-white font-bold font-body text-center text-3xl md:text-5xl lg:text-6xl items-center"
          style={{ textShadow: "10px 0px 13px black" }}
        >
          ทำให้ทุกการสตรีมมิ่ง
          <br />
          เป็นมืออาชีพกับ
        </h1>
        <div className="flex justify-center lg:justify-end">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-center lg:text-left  text-white font-bold font-head  text-shadow-head-black"
            style={{ textShadow: "10px 0px 13px black" }}
          >
            ELEVEN
            <br />
            MEDIA LIFE
          </h2>
        </div>
        <div className="flex justify-center xl:mt-11">
          <button className="p-4  text-black hover:bg-black hover:text-white rounded-lg ring-1 ring-black font-light text-2xl xl:text-6xl mb-4 delay-0 duration-300 ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
