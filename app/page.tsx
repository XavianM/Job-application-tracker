import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1462px] h-[1145px] pb-[481px] relative bg-white inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="w-[1462px] h-16 pl-[360px] pt-4 pb-5 bg-zinc-300 outline outline-1 outline-neutral-400 inline-flex items-center gap-60">
          <div className="justify-center text-black text-sm font-bold font-['DM_Sans'] leading-5">Job Tracker </div>
          <div className="justify-center text-black text-sm font-bold font-['DM_Sans'] leading-5">Analytics </div>
          <div className="justify-center text-black text-sm font-bold font-['DM_Sans'] leading-5">Calendar </div>
          <div className="justify-center text-black text-sm font-bold font-['DM_Sans'] leading-5">Settings </div>
      </div>
      
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-[964px] mt-[-50px] justify-start text-black text-[130px] font-normal font-['Crimson_Text'] leading-[136px]">The go-to <br/>place to track<br/>your applications</div>
        <div className="w-[1037px] mt-10 justify-start text-black text-[30px] font-normal font-['Crimson_Text'] leading-10">Easily track job applications, monitor interviews, stay on top of deadlines, and gain insights into your job search - all from one dashboard.</div>
      </main>
    </div>
  );
}
