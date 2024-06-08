import Image from "next/image";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div
      id="header"
      className="bg-primary-color h-screen flex items-center flex-col lg:flex-row-reverse mt-14 lg:mt-20"
    >
      <div
        data-aos="fade-left"
        data-aos-delay={200}
        data-aos-duration="1000"
        className="right w-full lg:w-1/2 h-[500px] lg:h-screen relative"
      >
        <Image
          src="/Header.jpg"
          fill={true}
          alt="header-pic"
          className="md:hidden lg:block lg:rounded-tl-3xl"
        />
        <Image
          src="/HeaderTab.jpg"
          fill={true}
          alt="header-pic"
          className="xs:hidden md:block lg:hidden"
        />
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
        <div className="flex justify-center mt-2 md:mt-5 xl:mt-11">
          <button class="text-black p-4 px-10 hover:before:border-black relative rounded-lg delay-0 duration-300 overflow-hidden border-2 border-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-2xl xl:text-4xl font-head font-semibold"
            >
              <span class="relative z-10">Contact Us</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
