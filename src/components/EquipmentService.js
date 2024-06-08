import Image from "next/image";
import React from "react";

const EquipmentService = () => {
  return (
    <div className="flex flex-col justify-center" id="equipment">
      <div className="bg-customTopGradient h-[200px]"></div>
      <div className="flex justify-center">
        <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold font-head">
          EQUIPMENT SERVICES
        </h1>
      </div>
      <hr class="w-32 h-1 mx-auto my-6 bg-primary-color border-0 rounded md:my-16 md:w-40 lg:w-48" />
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 px-8 md:gap-10 md:px-6 lg:gap-18">
          <div className="flex flex-col">
            <p className="font-body text-xs indent-5 md:indent-20 md:text-3xl lg:text-3xl">
              บริการจัดหาอุปกรณ์สำหรับการ live
              ที่มีคุณภาพและเหมาะสมในแต่ละขนาดของการ live บริการให้เช่าอุปกรณ์
              live อุปกรณ์การประชุม ไมค์ ลำโพง
            </p>
          </div>
        </div>
      </div>
      <hr class="w-32 h-1 mx-auto mt-10 bg-primary-color border-0 rounded md:mt-20 md:w-40 lg:w-48" />
      <div className="bg-customBottomGradient h-[200px]"></div>
    </div>
  );
};

export default EquipmentService;
