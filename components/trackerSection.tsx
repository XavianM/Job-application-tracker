import DashboardPreview from "./dashboardPreview";

export default function TrackerSection() {
  return (
    // Centers the section and adds space around it
    <section
      id="tracker"
      aria-labelledby="tracker-title"
      className="mx-auto max-w-[1660px] px-4 py-20 sm:px-8"
    >
      {/* Heading and description */}
      <div className="mb-10">
        <h2
          id="tracker-title"
          className="
            font-['DM_Sans'] text-3xl font-bold
            leading-tight text-white sm:text-5xl
          "
        >
          Everything in one place.
        </h2>

        <p
          className="
            mt-4 max-w-[980px] font-['DM_Sans']
            text-lg leading-7 text-[#EBE0CC] sm:text-xl
          "
        >
          See every application, update, and next step without
          digging through emails or spreadsheets.
        </p>
      </div>

      {/* Rounded background and border for the dashboard */}
      <div
        className="
          overflow-hidden rounded-3xl
          border border-[#E8E0D5] bg-[#FDF9F4]
          font-['Inter'] text-zinc-800
          shadow-[0_24px_80px_rgba(5,46,26,0.2)]
        "
      >
        {/* Dashboard content will go here */}
        <DashboardPreview />
      </div>
    </section>
  );
}