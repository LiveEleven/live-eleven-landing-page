import Image from "next/image";
// import { Carousel } from "flowbite-react";
import CustomCarousel from "./CustomCarousel";

const OurWork = () => {
  return (
    <div>
      <Image
        src="/BodyTop.png"
        width={3840}
        height={200}
        alt="BodyTop"
        className="mb-16"
      />
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-black font-bold font-head">
          OUR WORK
        </h1>
      </div>
      <hr class="w-32 h-1 mx-auto my-6 bg-primary-color border-0 rounded md:my-16 md:w-40 lg:w-48" />
      <div className="mx-auto h-[300px] w-[300px] md:h-[700px] md:w-[700px] lg:h-[1350px] lg:w-[1350px] 2xl:h-[1600px] 2xl:w-[1600px]">
        <CustomCarousel>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
            <div>
              <Image src="/Event.jpg" alt="." width={1000} height={1000} />
            </div>
          </div>
        </CustomCarousel>
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

export default OurWork;
