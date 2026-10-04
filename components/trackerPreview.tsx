// Type definitions, shows what values code accepts

type Status = "Applied" | "Interviewing" | "Offer";


//Structure of a tracker column 
type previewColumn = {
    status: Status;
    count: number;

    jobs: {
        company: string;
        role: string;
        date: string;
        source: string;

    }[]; //The brackets mean column can contain multiple jobs
}

//Random Preview Data to Show
const columns: previewColumn[] = [
    // Column for applied jobs
    {
        status: "Applied",
        count: 4,
        jobs: 
        [
            {
            company: "Stripe",
            role: "Product Designer",
            date: "Mar 12",
            source: "AI synced",
            },
            {
            company: "Linear",
            role: "Senior Product Designer",
            date: "Mar 10",
            source: "Manual",
            },
        ],
    },
    // Column for interviewing jobs
    {
        status: "Interviewing",
        count: 2,
        jobs: [
            {
            company: "Symbotic",
            role: "Robotics Engineer",
            date: "Mar 14",
            source: "AI synced",
            },
            {
            company: "Notion",
            role: "Growth Marketing Lead",
            date: "April 08",
            source: "Email",
            }
        ],
    },
    // Column for offered jobs
    {
        status: "Offer",
        count: 1,
        jobs: [
            {
            company: "Vercel",
            role: "Platform Engineer",
            date: "Mar 16",
            source: "AI synced",
            },
        ],
    },
];

//Lookup table, giving each table status individual colors
// Keys must be values in status, must be a string
const statusStyles: Record<Status, string> = {
    Applied: "bg-[#D6C9AE] text-stone-700",
    Interviewing: "bg-[#99C2A8] text-[#315C49] border border-[#E8E0D5]",
    Offer: "bg-[#337A4D] text-[#FFFFFF] border border-[#E8E0D5]",
};

// Actual component
export default function TrackerPreview() {
  return (
    <div
      aria-label="Example application tracker"
      className="
        relative mx-auto w-full max-w-[556px]
        rounded-3xl border border-stone-200
        bg-stone-50 p-4 pb-28
        font-['Inter'] text-zinc-800
        shadow-[0_18px_40px_rgba(0,0,0,0.08)]
        sm:p-6 sm:pb-28
      "
    >
      {/* Summary cards */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        {columns.map((column) => (
          <div
            key={column.status}
            className={`rounded-2xl p-3 ${statusStyles[column.status]}`}
          >
            <p className="text-xs font-semibold">
              {column.status}
            </p>

            <p className="mt-1 font-['Humane'] text-4xl font-bold">
              {column.count}
            </p>
          </div>
        ))}
      </div>

      {/* Application columns */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {columns.map((column) => (
          <div key={column.status} className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-1">
              <h3 className="text-[10px] font-semibold sm:text-xs">
                {column.status}
              </h3>

              <span
                className={`rounded-full px-2 py-1 text-[10px] font-semibold ${statusStyles[column.status]}`}
              >
                {column.count}
              </span>
            </div>

            <div className="space-y-3">
              {column.jobs.map((job) => (
                <article
                  key={job.company}
                  className="rounded-2xl border border-stone-200 bg-white p-2 sm:p-3"
                >
                  <div className="flex flex-wrap items-center gap-1">
                    <span
                      className={`rounded-full px-2 py-1 text-[9px] font-semibold ${statusStyles[column.status]}`}
                    >
                      {column.status}
                    </span>

                    <span className="text-[9px] text-neutral-500">
                      {job.date}
                    </span>
                  </div>

                  <span className="mt-2 inline-block rounded-full border border-stone-200 bg-stone-50 px-2 py-1 text-[9px] font-semibold">
                    {job.source}
                  </span>

                  <h4 className="mt-3 break-words text-sm font-semibold">
                    {job.company}
                  </h4>

                  <p className="mt-1 text-[10px] leading-4 text-neutral-500 sm:text-xs">
                    {job.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* AI automation notification */}
<div
  className="
    absolute bottom-4 right-4
    flex w-[min(290px,calc(100%_-_32px))] gap-3
    rounded-2xl border border-[#E8E0D5]
    bg-white p-3
    shadow-[0_10px_24px_rgba(0,0,0,0.07)]
  "
>
  {/* Green accent bar */}
  <span
    aria-hidden="true"
    className="w-2 shrink-0 rounded-full bg-[#337A4D]"
  />

  <div>
    <p className="text-xs font-semibold text-[#337A4D]">
      AI automation
    </p>

    <p className="mt-1 text-xs leading-4 text-zinc-800">
      Interview detected — Symbotic moved to Interviewing
    </p>
  </div>
</div>
    </div>
  );
}