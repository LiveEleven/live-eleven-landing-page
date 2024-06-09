import Image from "next/image";
import CustomCarousel from "./CustomCarousel";
import { useState } from "react";

const OurWork = () => {
  const [modalSrc, setModalSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = (src) => {
    setModalSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/1.png")}
            >
              <Image src="/Carousel/1.png" alt="." width={1000} height={1000} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/2.png")}
            >
              <Image src="/Carousel/2.png" alt="." width={1000} height={1000} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/3.png")}
            >
              <Image src="/Carousel/3.png" alt="." width={1000} height={1000} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/4.png")}
            >
              <Image src="/Carousel/4.png" alt="." width={1000} height={1000} />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-5">
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/5.png")}
            >
              <Image src="/Carousel/5.png" alt="." width={1000} height={1000} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/6.png")}
            >
              <Image src="/Carousel/6.png" alt="." width={1000} height={1000} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/7.png")}
            >
              <Image src="/Carousel/7.png" alt="." width={1000} height={1000} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => onClick("/Carousel/8.png")}
            >
              <Image src="/Carousel/8.png" alt="." width={1000} height={1000} />
            </div>
          </div>
        </CustomCarousel>
      </div>

      <hr class="w-32 h-1 mx-auto mt-10 bg-primary-color border-0 rounded md:mt-20 md:w-40 lg:w-48" />

      <div className="bg-customBottomGradient h-[200px]"></div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative p-3 lg:p-0">
            <button
              className="absolute top-0 right-0 mt-2 mr-5 text-secondary-color text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={modalSrc}
              alt="Modal Content"
              className="w-full h-full shadow-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWork;
