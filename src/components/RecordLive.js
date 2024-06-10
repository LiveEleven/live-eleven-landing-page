const RecordLive = () => {
  return (
    <div className="bg-primary-color flex flex-col items-center text-white w-full md:h-[600px] lg:flex-row xl:h-[800px] lg:px-14 py-6">
      <div
        data-aos="fade-right"
        data-aos-delay={200}
        data-aos-duration="1000"
        className="left w-full h-1/2 lg:h-3/5 flex justify-center "
      >
        <iframe
          src="https://www.youtube.com/embed/KANuFdMOhDM?autoplay=1&mute=1&autohide=1"
          className="w-[266px] h-full md:w-[470px] lg:w-[700px] lg:h-[394px] kk:w-[800px]"
          allow="autoplay"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay={200}
        data-aos-duration="1000"
        className="right w-full h-1/2 mt-6"
      >
        <h2 className="font-bold font-head text-center xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Record Live
        </h2>
        <p className="font-body px-4 text-white text-center xs:text-xs ss:text-sm md:text-xl 2xl:text-4xl lg:text-left mt-4 lg:px-6 lg:indent-14 ">
          การบันทึกการถ่ายทอดสด (Record Live)
          เป็นบริการที่ช่วยให้คุณเก็บทุกช่วงเวลาสำคัญ ในระหว่างการสตรีมมิ่ง
          เพื่อให้คุณสามารถนำวีดีโอที่บันทึกไว้ไปใช้ประโยชน์ในภายหลังได้ตามต้องการ
          ไม่ว่าจะเป็นการเผยแพร่ซ้ำ การแบ่งปันบนโซเชียลมีเดีย
          หรือการวิเคราะห์และการปรับปรุงการสตรีมมิ่ง ครั้งถัดไป
        </p>
      </div>
    </div>
  );
};

export default RecordLive;
