// import { useState } from "react";
// import { Resend } from "resend";

const ContactUs = () => {
  //   const [name, setName] = useState("");
  //   const [companyName, setCompanyName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [tel, setTel] = useState("");
  //   const [numOfBroadcasts, setNumOfBroadcasts] = useState("");
  //   const [numOfParticipants, setNumOfParticipants] = useState("");
  //   const [dayOfBroadcast, setDayOfBroadcast] = useState("");
  //   const [detail, setDetail] = useState("");

  //   async function send() {
  //     const resend = new Resend("re_SLtEyGNm_DBhn3mcQNr3MTB5nGmNqRHgT");

  //     const { data } = await resend.emails.send({
  //       //   from: `${email}`,
  //       from: "afilmstorybypeet@gmail.com",
  //       to: "werapatsaejong@gmail.com",
  //       subject: "Work",
  //       //   html: `<p><p>${name}</p>
  //       // <p>${companyName}</p>
  //       // <p>${email}</p>
  //       // <p>${tel}</p>
  //       // <p>${numOfBroadcasts}</p>
  //       // <p>${numOfParticipants}</p>
  //       // <p>${dayOfBroadcast}</p>
  //       // <p>${detail}</p>
  //       // </p>`,
  //       html: "Hello",
  //     });

  //     console.log(data);
  //   }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <form id="contact">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-black font-bold font-head">
          CONTACT US
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="ชื่อ - นามสกุล"
          required
          className="xs:w-[200px] md:w-[500px] rounded-md border border-baseColor bg-transparent pl-3 h-12"
        />

        <input
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="ชื่อบริษัท"
          required
          className="xs:w-[200px] md:w-[500px] rounded-md border border-baseColor bg-transparent pl-3 h-12"
        />

        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="อีเมล"
          required
          className="xs:w-[200px] md:w-[500px] rounded-md border border-baseColor bg-transparent pl-3 h-12"
        />

        <input
          type="text"
          onChange={(e) => setTel(e.target.value)}
          placeholder="เบอร์ติดต่อ"
          required
          className="xs:w-[200px] md:w-[500px] rounded-md border border-baseColor bg-transparent pl-3 h-12"
        />

        <input
          type="text"
          onChange={(e) => setNumOfBroadcasts(e.target.value)}
          placeholder="จำนวนผู้ออกอากาศ"
          required
          className="xs:w-[200px] md:w-[500px] rounded-md border border-baseColor bg-transparent pl-3 h-12"
        />

        <input
          type="text"
          onChange={(e) => setNumOfParticipants(e.target.value)}
          placeholder="จำนวนผู้เข้าร่วม(ถ้ามี)"
          required
          className="xs:w-[200px] md:w-[500px] rounded-md border border-baseColor bg-transparent pl-3 h-12"
        />

        <input
          type="text"
          onChange={(e) => setDayOfBroadcast(e.target.value)}
          placeholder="วันออกอากาศ"
          required
          className="xs:w-[200px] md:w-[500px] rounded-md border border-baseColor bg-transparent pl-3 h-12"
        />

        <textarea
          onChange={(e) => setDetail(e.target.value)}
          placeholder="รายละเอียด(เพิ่มเติม)"
          required
          className="xs:w-[200px] md:w-[500px] h-auto min-h-[10rem] max-h-[20rem] rounded-md border border-baseColor bg-transparent pl-3 pt-3"
        />
        <button
          type="submit"
          className="text-black p-4 px-10 hover:before:border-black relative rounded-lg delay-0 duration-300 overflow-hidden border-2 border-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
        >
          <h1 className="relative z-10 text-2xl xl:text-4xl font-head font-semibold">
            Submit
          </h1>
        </button>
      </div>
    </form>
  );
};

export default ContactUs;
