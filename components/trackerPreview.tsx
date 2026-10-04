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
    Applied: "bg-stone-300 text-stone-700",
    Interviewing: "bg-slate-200 text-slate-700",
    Offer: "bg-green-700 text-white",
};

//Actual component
export default function TrackerPreview()
{
    return (
        <div
            aria-label="Example application tracker"
            className ="
                relative mx-auto w-full max-w-[556px]
                rounded-3xl border border-stone-200
                bg-stone-50 p-4 pb-28
                font-['Inter'] text-zinc-800
                shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                sm:p-6 sm:pb-28
                "
                >
                {/* Summary cards & application columns go here */}
                
                </div>
    );
}