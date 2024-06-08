import Image from "next/image";

const LivePackages = () => {
  return (
    <div id="livePackages">
      <div className="bg-customTopGradient h-[200px]"></div>
      <div className="flex justify-center">
        <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold font-head">
          LIVE PACKAGES
        </h1>
      </div>
      <hr class="w-32 h-1 mx-auto my-6 bg-primary-color border-0 rounded md:my-16 md:w-40 lg:w-48" />

      <div
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration="1000"
        className="flex flex-col mx-0 lg:flex-row lg:mx-10 2xl:mx-40"
      >
        <div className="flex flex-col items-center mx-auto px-5 border-2 border-primary-color rounded-lg mt-10 shadow-column lg:shadow-row">
          <h2 className="font-head text-md font-bold mt-6 md:text-xl lg:text-2xl">
            Package Live [S]
          </h2>
          <h3 className="font-head text-4xl font-bold my-12 md:text-5xl lg:text-7xl">
            15,000 ฿
          </h3>
          <div>
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Mirrorless Camera
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Wireless Microphone
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Router Internet 5G
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Live System
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Final Monitor
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              Stream Duration 1 hr.
            </p>
          </div>
          <p className="font-body text-center mt-56 mb-6 text-[7px] md:text-xs">
            *เป็นราคาเบื้องต้นอาจมีการปรับเปลี่ยนตามขอบเขตและรายละเอียดของงาน
          </p>
        </div>

        <div className="flex flex-col items-center mx-auto px-5 border-2 border-primary-color rounded-lg mt-10 shadow-column lg:shadow-row">
          <h2 className="font-head text-md font-bold mt-6 md:text-xl lg:text-2xl">
            Package Live [M]
          </h2>
          <h3 className="font-head text-4xl font-bold my-12 md:text-5xl lg:text-7xl">
            25,000 ฿
          </h3>
          <div>
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              2 Mirrorless Camera
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              2 Wireless Microphone
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Camera Switcher
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Router Internet 5G
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Live System
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Final Monitor
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              Stream Duration {">"} 2 hrs.
            </p>
          </div>
          <p className="font-body text-center mt-28 mb-6 text-[7px] md:text-xs">
            *เป็นราคาเบื้องต้นอาจมีการปรับเปลี่ยนตามขอบเขตและรายละเอียดของงาน
          </p>
        </div>

        <div className="flex flex-col items-center mx-auto px-5 border-2 border-primary-color rounded-lg mt-10 shadow-column lg:shadow-row">
          <h2 className="font-head text-md font-bold mt-6 md:text-xl lg:text-2xl">
            Package Live [L]
          </h2>
          <h3 className="font-head text-4xl font-bold my-12 md:text-5xl lg:text-7xl">
            35,000 ฿
          </h3>
          <div>
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              3 Mirrorless Camera
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              2 Wireless Microphone
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Camera Switcher
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Router Internet 5G
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Live System
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              1 Final Monitor
            </p>
            <hr class="w-44 h-0.5 mx-auto my-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
            <p className="font-head text-sm text-center font-semibold md:text-lg">
              Stream Duration {">"} 2 hrs.
            </p>
          </div>
          <p className="font-body text-center mt-28 mb-6 text-[7px] md:text-xs">
            *เป็นราคาเบื้องต้นอาจมีการปรับเปลี่ยนตามขอบเขตและรายละเอียดของงาน
          </p>
        </div>
      </div>
      <hr class="w-32 h-1 mx-auto mt-10 bg-primary-color border-0 rounded md:mt-20 md:w-40 lg:w-48" />
    </div>
  );
};

export default LivePackages;
