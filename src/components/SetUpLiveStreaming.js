import { useWindowSize } from "@/hooks/useWindowSize";
import { EmblaCarousel } from "./EmblaCarousel";

const SetUpLiveStreaming = () => {
  const size = useWindowSize();
  return (
    <div className="bg-primary-color xs:py-10 md:py-20" id="setup">
      <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold font-head">
        SET UP LIVE STREAM
      </h1>
      <hr class="w-32 h-1 mx-auto my-6 bg-white border-0 rounded md:my-16 md:w-40 lg:w-48" />

      <p className="font-body text-[10px] text-center text-white md:text-xl lg:text-3xl 2xl:text-4xl">
        ให้บริการและคำแนะนำการ set ระบบ live และการใช้งานอุปกรณ์
      </p>
      <p className="font-body text-[10px] text-center text-white md:text-xl lg:text-3xl 2xl:text-4xl">
        สำหรับคนที่ต้องการทำ live ด้วยตัวเอง หรืออยากเพิ่มคุณภาพการ live
      </p>
      <p
        className="font-body text-[10px] text-center text-white md:text-xl lg:text-3xl 2xl:text-4xl"
        id="setUpLivePackages"
      >
        จากโทรศัพท์มือถือมาเป็นกล้อง เพื่อให้ได้ภาพที่คมชัดและสมูทมากยิ่งขึ้น
      </p>
      <p className="font-body text-[10px] text-center text-white md:text-xl lg:text-3xl 2xl:text-4xl">
        แถมยังสามารถขึ้น Art work โชว์ราคาสินค้า โปรโมชั่น ให้เป็น professional
        ได้อีกด้วย
      </p>

      {size.width > 1024 ? (
        <div className="flex flex-col mx-0 lg:mx-72 2xl:mx-96 kk:mx-[700px] lg:flex-row">
          <div className="bg-white flex flex-col items-center mx-auto px-5 border-2 border-primary-color rounded-lg mt-10 shadow-column lg:shadow-row">
            <h2 className="font-head text-md font-bold mt-6 md:text-xl lg:text-2xl">
              Online Set
            </h2>
            <h3 className="font-head text-4xl font-bold my-8 md:text-5xl lg:text-7xl">
              10,000 ฿
            </h3>
            <div>
              <hr class="w-44 h-0.5 mx-auto mt-2 mb-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                เช็คอุปกรณ์ที่มีและขาดเหลือผ่าน
              </p>
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                ระบบonline chat / video call
              </p>
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                ถ่ายพื้นที่หน้างาน
              </p>
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                พร้อมให้คำปรึกษา
              </p>
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                การใช้ software ต่างๆ
              </p>
            </div>
            <p className="font-body text-center mt-14 mb-6 text-[9px] md:text-xs">
              *เป็นราคาเบื้องต้นอาจมีการปรับเปลี่ยนตามขอบเขตและรายละเอียดของงาน
            </p>
          </div>

          <div className="bg-white flex flex-col items-center mx-auto px-5 border-2 border-primary-color rounded-lg mt-10 shadow-column lg:shadow-row">
            <h2 className="font-head text-md font-bold mt-6 md:text-xl lg:text-2xl">
              On-Lo Set
            </h2>
            <h2 className="font-head text-md font-bold md:text-xl lg:text-2xl"></h2>
            <h3 className="font-head text-4xl font-bold my-8 md:text-5xl lg:text-7xl">
              15,000 ฿
            </h3>
            <div>
              <hr class="w-44 h-0.5 mx-auto mt-2 mb-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                Everything in Online set
              </p>
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                เดินทางไปสถานที่พร้อม set up อุปกรณ์
              </p>
              <p className="font-head text-sm text-center font-semibold md:text-lg">
                รวมถึงการให้คำปรึกษาทั้งระบบ
              </p>
            </div>
            <p className="font-body text-center mt-28 mb-6 text-[9px] md:text-xs">
              *เป็นราคาเบื้องต้นอาจมีการปรับเปลี่ยนตามขอบเขตและรายละเอียดของงาน
            </p>
          </div>
        </div>
      ) : (
        <EmblaCarousel>
          <div className="embla__slide">
            <div className="bg-white flex flex-col items-center mx-auto px-5 border-2 border-primary-color rounded-lg mt-10 shadow-column lg:shadow-row ">
              <h2 className="font-head text-md font-bold mt-6 md:text-xl lg:text-2xl">
                Online Set
              </h2>
              <h3 className="font-head text-4xl font-bold my-8 md:text-5xl lg:text-7xl">
                10,000 ฿
              </h3>
              <div>
                <hr class="w-44 h-0.5 mx-auto mt-2 mb-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  เช็คอุปกรณ์ที่มีและขาดเหลือผ่าน
                </p>
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  ระบบonline chat / video call
                </p>
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  ถ่ายพื้นที่หน้างาน
                </p>
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  พร้อมให้คำปรึกษา
                </p>
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  การใช้ software ต่างๆ
                </p>
              </div>
              <p className="font-body text-center mt-16 md:mt-14 mb-6 text-[9px] md:text-xs">
                *เป็นราคาเบื้องต้นอาจมีการปรับเปลี่ยนตามขอบเขตและรายละเอียดของงาน
              </p>
            </div>
          </div>
          <div className="embla__slide">
            <div className="bg-white flex flex-col items-center mx-auto px-5 border-2 border-primary-color rounded-lg mt-10 shadow-column lg:shadow-row">
              <h2 className="font-head text-md font-bold mt-6 md:text-xl lg:text-2xl">
                On-Lo Set
              </h2>
              <h2 className="font-head text-md font-bold md:text-xl lg:text-2xl"></h2>
              <h3 className="font-head text-4xl font-bold my-8 md:text-5xl lg:text-7xl">
                15,000 ฿
              </h3>
              <div>
                <hr class="w-44 h-0.5 mx-auto mt-2 mb-6 bg-secondary-color border-0 rounded md:my-10 md:w-64 lg:w-48" />
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  Everything in Online set
                </p>
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  เดินทางไปสถานที่พร้อม set up อุปกรณ์
                </p>
                <p className="font-head text-sm text-center font-semibold md:text-lg">
                  รวมถึงการให้คำปรึกษาทั้งระบบ
                </p>
              </div>
              <p className="font-body text-center mt-[104px] md:mt-28 mb-6 text-[9px] md:text-xs">
                *เป็นราคาเบื้องต้นอาจมีการปรับเปลี่ยนตามขอบเขตและรายละเอียดของงาน
              </p>
            </div>
          </div>
        </EmblaCarousel>
      )}
      <hr class="w-32 h-1 mx-auto mt-10 bg-white border-0 rounded md:mt-20 md:w-40 lg:w-48" />
    </div>
  );
};

export default SetUpLiveStreaming;
