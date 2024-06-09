import Image from "next/image";
// import { Carousel } from "flowbite-react";
import CustomCarousel from "./CustomCarousel";

const OurWork = () => {
  return (
    <div>
      <div className="bg-customTopGradient h-[200px]"></div>
      <div className="flex justify-center">
        <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold font-head">
          OUR WORK
        </h1>
      </div>
      <hr class="w-32 h-1 mx-auto mt-6 bg-primary-color border-0 rounded md:mt-16 md:w-40 lg:w-48" />
      <div className="mx-auto xs:h-[290px] xs:w-[340px] ss:h-[320px] ss:w-[370px] md:h-[500px] md:w-[700px] lg:h-[1050px] lg:w-[1350px] 2xl:h-[1200px] 2xl:w-[1600px]">
        <CustomCarousel>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-5">
            <div>
              <Image src="/Carousel/1.png" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Carousel/2.png" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Carousel/3.png" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Carousel/4.png" alt="." width={1000} height={1000} />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-5">
            <div>
              <Image src="/Carousel/5.png" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Carousel/6.png" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Carousel/7.png" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Carousel/8.png" alt="." width={1000} height={1000} />
            </div>
          </div>

          {/* <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-5">
            <div>
              <Image
                src="/Carousel/9.HEIC"
                alt="."
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <Image
                src="/Carousel/10.jpg"
                alt="."
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <Image
                src="/Carousel/11.jpg"
                alt="."
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <Image
                src="/Carousel/12.jpg"
                alt="."
                width={1000}
                height={1000}
              />
            </div>
          </div> */}
        </CustomCarousel>
      </div>
      <hr class="w-32 h-1 mx-auto mt-10 bg-primary-color border-0 rounded md:mt-20 md:w-40 lg:w-48" />
      <div className="bg-customBottomGradient h-[200px]"></div>
    </div>
  );
};

export default OurWork;

