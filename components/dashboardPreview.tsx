"use client";

import { useState } from "react";

// The four allowed application statuses
type Status = "Applied" | "Interviewing" | "Offer" | "Rejected";

// Information stored for each application
type Application = {
  company: string;
  role: string;
  date: string;
  source: "AI" | "Manual" | "Email";
  status: Status;
  nextStep: string;
  avatarColor: string;
};

// Sample applications displayed in the dashboard
const applications: Application[] = [
  {
    company: "Linear",
    role: "Product Designer",
    date: "Oct 1",
    source: "AI",
    status: "Applied",
    nextStep: "Complete assessment",
    avatarColor: "#6261DE",
  },
  {
    company: "Arcade",
    role: "Senior UX Designer",
    date: "Sep 30",
    source: "Manual",
    status: "Applied",
    nextStep: "Follow up in 3 days",
    avatarColor: "#CD5942",
  },
  {
    company: "Figma",
    role: "Product Designer II",
    date: "Sep 29",
    source: "Email",
    status: "Applied",
    nextStep: "Awaiting review",
    avatarColor: "#EF653C",
  },
  {
    company: "Alloy",
    role: "Design Systems Lead",
    date: "Sep 27",
    source: "AI",
    status: "Applied",
    nextStep: "Tailor portfolio note",
    avatarColor: "#2B5A46",
  },
  {
    company: "Miro",
    role: "Staff Product Designer",
    date: "Sep 25",
    source: "Manual",
    status: "Applied",
    nextStep: "Follow up Friday",
    avatarColor: "#E5AA0B",
  },
  {
    company: "Northstar Labs",
    role: "Product Designer",
    date: "Sep 24",
    source: "Email",
    status: "Interviewing",
    nextStep: "Interview Oct 8",
    avatarColor: "#25644E",
  },
  {
    company: "Notion",
    role: "Growth Designer",
    date: "Sep 22",
    source: "AI",
    status: "Interviewing",
    nextStep: "Prep case study",
    avatarColor: "#222222",
  },
  {
    company: "Mercury",
    role: "Senior Product Designer",
    date: "Sep 20",
    source: "Email",
    status: "Interviewing",
    nextStep: "Panel interview Oct 10",
    avatarColor: "#705DA3",
  },
  {
    company: "Aperture",
    role: "Design Lead",
    date: "Sep 12",
    source: "Manual",
    status: "Offer",
    nextStep: "Respond by Oct 6",
    avatarColor: "#BA7B20",
  },
  {
    company: "Loom",
    role: "Product Designer",
    date: "Sep 18",
    source: "Email",
    status: "Rejected",
    nextStep: "Archive application",
    avatarColor: "#6550BE",
  },
  {
    company: "Vanta",
    role: "UX Designer",
    date: "Sep 15",
    source: "Email",
    status: "Rejected",
    nextStep: "Request feedback",
    avatarColor: "#E46A4B",
  },
  {
    company: "Raycast",
    role: "Product Designer",
    date: "Sep 10",
    source: "Manual",
    status: "Rejected",
    nextStep: "Save contact",
    avatarColor: "#DB4250",
  },
];

// Labels, colors, icons, and notes for each status
const statusSettings: Record<
  Status,
  {
    label: string;
    badge: string;
    dot: string;
    icon: string;
    note: string;
  }
> = {
  Applied: {
    label: "Applied",
    badge: "bg-[#EBE0CC] text-[#786C58]",
    dot: "bg-[#EBE0CC]",
    icon: "↗",
    note: "2 added this week",
  },
  Interviewing: {
    label: "Interviewing",
    badge: "bg-[#9BC3AE] text-[#315C49]",
    dot: "bg-[#9BC3AE]",
    icon: "☏",
    note: "Next: Oct 8",
  },
  Offer: {
    label: "Offers",
    badge: "bg-[#337A4D] text-white",
    dot: "bg-[#337A4D]",
    icon: "✓",
    note: "1 decision pending",
  },
  Rejected: {
    label: "Rejected",
    badge: "bg-[#DDB4AB] text-[#8D4438]",
    dot: "bg-[#DDB4AB]",
    icon: "−",
    note: "25% of applications",
  },
};

// Order of the summary cards and board columns
const statuses: Status[] = [
  "Applied",
  "Interviewing",
  "Offer",
  "Rejected",
];

// Sample notifications shown in the email feed
const emailUpdates = [
  {
    title: "Interview request received",
    company: "Northstar Labs",
    time: "8m",
    icon: "↗",
    iconStyle: "bg-[#9BC3AE] text-[#315C49]",
  },
  {
    title: "Assessment detected",
    company: "Linear",
    time: "42m",
    icon: "☑",
    iconStyle: "bg-[#EBE0CC] text-[#786C58]",
  },
  {
    title: "Application moved to Rejected",
    company: "Loom",
    time: "2h",
    icon: "−",
    iconStyle: "bg-[#DDB4AB] text-[#8D4438]",
  },
];

// Detailed sample history for Northstar Labs
const northstarTimeline = [
  {
    title: "Applied",
    date: "Sep 24",
    description: "Application added via AI",
    complete: true,
  },
  {
    title: "Recruiter review",
    date: "Sep 29",
    description: "Status detected from email",
    complete: true,
  },
  {
    title: "Interview requested",
    date: "Oct 2",
    description: "30-minute conversation with Maya Chen",
    complete: true,
  },
  {
    title: "First interview",
    date: "Oct 8",
    description: "Scheduled · 10:30 AM",
    complete: false,
  },
  {
    title: "Decision",
    date: "—",
    description: "Waiting for next stage",
    complete: false,
  },
];

// Displays a colored status pill
function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold ${statusSettings[status].badge}`}
    >
      {status}
    </span>
  );
}

// Displays the company's first letter in a colored square
function CompanyAvatar({
  application,
}: {
  application: Application;
}) {
  return (
    <span
      aria-hidden="true"
      style={{ backgroundColor: application.avatarColor }}
      className="flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white"
    >
      {application.company[0]}
    </span>
  );
}

// Displays one application and selects it when clicked
function ApplicationCard({
  application,
  selected,
  onSelect,
}: {
  application: Application;
  selected: boolean;
  onSelect: () => void;
}) {
  // Pick a color based on how the application was added
  const sourceStyle =
    application.source === "Email"
      ? "bg-[#9BC3AE] text-[#337A4D]"
      : application.source === "AI"
        ? "bg-[#EBE0CC] text-[#786C58]"
        : "bg-[#FDF9F4] text-stone-500";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`
        w-full rounded-2xl border bg-white p-3 text-left
        transition hover:border-[#337A4D]
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-[#337A4D]
        ${
          selected
            ? "border-[#337A4D] ring-1 ring-inset ring-[#337A4D]"
            : "border-[#E8E0D5]"
        }
      `}
    >
      {/* Company name, application date, and source */}
      <div className="flex items-start gap-2">
        <CompanyAvatar application={application} />

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold">
            {application.company}
          </p>

          <p className="mt-0.5 text-[10px] leading-4 text-stone-500">
            Applied {application.date}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-medium ${sourceStyle}`}
        >
          {application.source}
        </span>
      </div>

      {/* Job title */}
      <h5 className="mt-3 text-sm font-semibold leading-5">
        {application.role}
      </h5>

      {/* Current status and selection indicator */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <StatusBadge status={application.status} />

        {selected && (
          <span className="text-[9px] font-semibold text-[#337A4D]">
            Selected
          </span>
        )}
      </div>

      {/* Next action for this application */}
      <div className="mt-3 flex items-start gap-2 border-t border-[#E8E0D5] pt-2">
        <span className="text-[9px] font-semibold text-stone-500">
          NEXT
        </span>

        <p className="text-[10px] leading-4">
          {application.nextStep}
        </p>
      </div>
    </button>
  );
}

// Combines all parts into the dashboard preview
export default function DashboardPreview() {
  // Text entered in the search box
  const [search, setSearch] = useState("");

  // Status selected in the filter
  const [filter, setFilter] = useState<Status | "All">("All");

  // Application currently shown in the timeline
  const [selectedApplication, setSelectedApplication] = useState(
    applications[5],
  );

  // Only keep applications matching both search and filter
  const filteredApplications = applications.filter((application) => {
    const searchableText =
      `${application.company} ${application.role}`.toLowerCase();

    const matchesSearch = searchableText.includes(
      search.trim().toLowerCase(),
    );

    const matchesFilter =
      filter === "All" || application.status === filter;

    return matchesSearch && matchesFilter;
  });

  // Show all columns, or just the selected status
  const visibleStatuses = statuses.filter(
    (status) => filter === "All" || status === filter,
  );

  // Choose the history for the selected application
  const timeline =
    selectedApplication.company === "Northstar Labs"
      ? northstarTimeline
      : [
          {
            title: "Applied",
            date: selectedApplication.date,
            description: `Application added via ${selectedApplication.source}`,
            complete: true,
          },
          {
            title: "Next step",
            date: "—",
            description: selectedApplication.nextStep,
            complete: false,
          },
        ];

  // Find and select an application from an email notification
  function selectCompany(company: string) {
    const application = applications.find(
      (application) => application.company === company,
    );

    if (application) {
      setSelectedApplication(application);
    }
  }

  return (
    // Places the sidebar beside the main workspace
    <div className="flex bg-[#FDF9F4] font-['Inter'] text-[#333333]">
      {/* Sidebar: hidden on smaller screens */}
      <aside className="hidden w-[200px] shrink-0 flex-col bg-[#1D3B2C] p-5 text-white lg:flex">
        {/* Hiking icon and brand name */}
        <div className="mb-9 flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lime-200">
            <img
              src="/person-hiking.svg"
              alt=""
              width={28}
              height={32}
            />
          </span>

          <span className="text-xl font-bold">
            HireTrail
          </span>
        </div>

        {/* Sample navigation labels */}
        <ul className="space-y-2 text-xs">
          <li className="rounded-xl px-3 py-3 text-white/80">
            Overview
          </li>

          <li className="flex items-center justify-between rounded-xl bg-[#337A4D] px-3 py-3 font-semibold">
            Applications
            <span>{applications.length}</span>
          </li>

          <li className="flex items-center justify-between rounded-xl px-3 py-3 text-white/80">
            Email updates
            <span className="rounded-full bg-[#337A4D] px-2 py-1 text-[10px]">
              {emailUpdates.length}
            </span>
          </li>

          <li className="rounded-xl px-3 py-3 text-white/80">
            Interviews
          </li>

          <li className="rounded-xl px-3 py-3 text-white/80">
            Insights
          </li>
        </ul>

        {/* Reminder about applications needing attention */}
        <div className="mt-8 rounded-2xl bg-[#337A4D] p-4">
          <h4 className="text-sm font-semibold">
            Trail guide
          </h4>

          <p className="mt-3 text-xs leading-5 text-white/80">
            2 applications need attention this week.
          </p>

          <p className="mt-3 text-xs font-semibold">
            View next actions →
          </p>
        </div>

        {/* Push the connection status and profile to the bottom */}
        <div className="mt-auto pt-12">
          {/* Sample inbox connection */}
          <div className="rounded-xl bg-[#337A4D] p-3">
            <p className="text-xs font-semibold">
              ✓ Inbox connected
            </p>

            <p className="mt-2 text-[10px] text-white/70">
              Synced 2 minutes ago
            </p>
          </div>

          {/* Sample user profile */}
          <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EBE0CC] text-xs font-bold text-[#1D3B2C]">
              AM
            </span>

            <div>
              <p className="text-xs font-semibold">
                Avery Morgan
              </p>

              <p className="mt-1 text-[10px] text-white/70">
                Personal workspace
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main cream workspace */}
      <div className="min-w-0 flex-1 p-4 sm:p-6">
        {/* Heading and search controls */}
        <div className="flex flex-wrap items-start justify-between gap-5">
          {/* Page title and total application count */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-['DM_Sans'] text-3xl font-bold">
                Applications
              </h3>

              <span className="rounded-full bg-[#9BC3AE] px-2 py-1 text-[10px] font-semibold text-[#337A4D]">
                {applications.length} total
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-stone-500">
              Your search is moving — 3 applications advanced this week.
            </p>
          </div>

          <div className="flex w-full flex-wrap gap-2 xl:w-auto">
            {/* Search updates as the user types */}
            <label className="min-w-0 flex-1 xl:w-[210px]">
              <span className="sr-only">
                Search applications
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search applications"
                className="w-full rounded-xl border border-[#E8E0D5] bg-transparent px-3 py-3 text-xs focus:outline-2 focus:outline-[#337A4D]"
              />
            </label>

            {/* Filter applications by status */}
            <label>
              <span className="sr-only">
                Filter applications by status
              </span>

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(event.target.value as Status | "All")
                }
                className="rounded-xl border border-[#E8E0D5] bg-[#FDF9F4] px-3 py-3 text-xs font-semibold text-[#337A4D] focus:outline-2 focus:outline-[#337A4D]"
              >
                <option value="All">All statuses</option>

                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {statusSettings[status].label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* Summary cards: total count for each status */}
        <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
          {statuses.map((status) => {
            const settings = statusSettings[status];

            // Count all applications with this status
            const count = applications.filter(
              (application) => application.status === status,
            ).length;

            return (
              <div
                key={status}
                className="flex items-start gap-3 rounded-2xl border border-[#E8E0D5] bg-white p-3 shadow-sm"
              >
                {/* Status icon */}
                <span
                  aria-hidden="true"
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-lg ${settings.badge}`}
                >
                  {settings.icon}
                </span>

                <div className="min-w-0 flex-1">
                  {/* Status name and count */}
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-semibold">
                      {settings.label}
                    </h4>

                    <span className="text-xl font-bold">
                      {count}
                    </span>
                  </div>

                  {/* Short status note */}
                  <p className="mt-1 text-[9px] leading-4 text-stone-500">
                    {settings.note}
                  </p>

                  {/* Decorative colored line */}
                  <div
                    aria-hidden="true"
                    className={`mt-2 h-1 rounded-full ${settings.dot}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Board beside the email feed and timeline on wide screens */}
        <div className="mt-6 grid gap-5 min-[1280px]:grid-cols-[minmax(0,1fr)_320px]">
          {/* Application board */}
          <div className="min-w-0">
            {/* Board title and update label */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <h4 className="font-['DM_Sans'] text-lg font-bold">
                Application tracker
              </h4>

              <span className="text-[10px] text-stone-500">
                Updated just now
              </span>

              <span className="ml-auto rounded-lg border border-[#E8E0D5] px-3 py-2 text-[10px] font-semibold text-[#337A4D]">
                Board
              </span>
            </div>

            {/* Announces the result count to screen readers */}
            <p className="sr-only" role="status">
              {filteredApplications.length} matching applications
            </p>

            {/* Allow the board to scroll horizontally on small screens */}
            <div className="overflow-x-auto pb-3">
              <div
                className="grid min-w-[700px] gap-3 lg:min-w-0"
                style={{
                  gridTemplateColumns: `repeat(${visibleStatuses.length}, minmax(0px, 1fr))`,
                }}
              >
                {/* Create one column for each visible status */}
                {visibleStatuses.map((status) => {
                  // Find the matching applications for this column
                  const columnApplications =
                    filteredApplications.filter(
                      (application) => application.status === status,
                    );

                  const settings = statusSettings[status];

                  return (
                    <div key={status} className="min-w-0">
                      {/* Column name and matching application count */}
                      <div className="mb-3 flex items-center gap-2 px-1">
                        <span
                          aria-hidden="true"
                          className={`size-2 rounded-full ${settings.dot}`}
                        />

                        <h5 className="text-xs font-semibold">
                          {settings.label}
                        </h5>

                        <span
                          className={`ml-auto rounded-full px-2 py-1 text-[10px] font-semibold ${settings.badge}`}
                        >
                          {columnApplications.length}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {/* Create a clickable card for each application */}
                        {columnApplications.map((application) => (
                          <ApplicationCard
                            key={application.company}
                            application={application}
                            selected={
                              selectedApplication.company ===
                              application.company
                            }
                            onSelect={() =>
                              setSelectedApplication(application)
                            }
                          />
                        ))}

                        {/* Message when this column has no search results */}
                        {columnApplications.length === 0 && (
                          <p className="rounded-xl border border-dashed border-[#E8E0D5] p-4 text-xs text-stone-500">
                            No matching applications.
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right-side panels */}
          <div className="flex min-w-0 flex-col gap-4">
            {/* Email update feed */}
            <div className="rounded-2xl border border-[#E8E0D5] bg-white p-4 shadow-sm">
              {/* Feed heading */}
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#9BC3AE] text-[#337A4D]"
                >
                  ✉
                </span>

                <div>
                  <h4 className="font-['DM_Sans'] text-base font-bold">
                    Email Update Feed
                  </h4>

                  <p className="mt-1 text-[9px] text-stone-500">
                    Detected automatically from your inbox
                  </p>
                </div>
              </div>

              {/* Sample inbox monitoring label */}
              <div className="mt-4 flex items-center justify-between rounded-full bg-[#F0EDE5] px-2 py-1 text-[9px]">
                <span className="font-semibold text-[#337A4D]">
                  Monitoring Avery’s inbox
                </span>

                <span className="text-stone-500">
                  Sample
                </span>
              </div>

              {/* Clicking a notification selects its application */}
              <div className="mt-3 space-y-2">
                {emailUpdates.map((update) => (
                  <button
                    key={update.company}
                    type="button"
                    onClick={() => selectCompany(update.company)}
                    className="flex w-full items-start gap-3 rounded-xl border border-[#E8E0D5] p-3 text-left transition hover:bg-[#FDF9F4] focus-visible:outline-2 focus-visible:outline-[#337A4D]"
                  >
                    <span
                      aria-hidden="true"
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${update.iconStyle}`}
                    >
                      {update.icon}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold leading-4">
                        {update.title}
                      </p>

                      <div className="mt-1 flex justify-between gap-2 text-[9px] text-stone-500">
                        <span>{update.company}</span>
                        <span>{update.time}</span>
                      </div>

                      {/* Show which notification matches the selection */}
                      {selectedApplication.company ===
                        update.company && (
                        <p className="mt-1 text-[9px] font-semibold text-[#337A4D]">
                          Selected application
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* History of the selected application */}
            <div className="rounded-2xl border border-[#E8E0D5] bg-white p-4 shadow-sm">
              {/* Selected company and role */}
              <div className="flex items-center gap-3 rounded-xl bg-[#FDF9F4] p-3">
                <CompanyAvatar application={selectedApplication} />

                <div className="min-w-0">
                  <h4 className="text-xs font-semibold">
                    {selectedApplication.company}
                  </h4>

                  <p className="mt-1 text-[10px] text-stone-500">
                    {selectedApplication.role}
                  </p>
                </div>
              </div>

              {/* Timeline heading and current status */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E0D5] pb-3">
                <h4 className="font-['DM_Sans'] text-base font-bold">
                  Application Timeline
                </h4>

                <StatusBadge status={selectedApplication.status} />
              </div>

              {/* Display each event in the timeline */}
              <ol className="mt-4">
                {timeline.map((event, index) => (
                  <li
                    key={event.title}
                    className="relative flex gap-3 pb-5 last:pb-0"
                  >
                    {/* Connect this event to the next one */}
                    {index < timeline.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[7px] top-4 bottom-0 w-px bg-[#E8E0D5]"
                      />
                    )}

                    {/* Checkmark for completed events; empty circle otherwise */}
                    <span
                      aria-hidden="true"
                      className={`
                        relative z-10 mt-0.5 flex size-4
                        shrink-0 items-center justify-center
                        rounded-full text-[9px]
                        ${
                          event.complete
                            ? "bg-[#337A4D] text-white"
                            : "border-2 border-[#E8E0D5] bg-white"
                        }
                      `}
                    >
                      {event.complete ? "✓" : ""}
                    </span>

                    {/* Event title, date, and description */}
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-2">
                        <p className="text-[11px] font-semibold">
                          {event.title}
                        </p>

                        <span className="shrink-0 text-[9px] text-stone-500">
                          {event.date}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] leading-4 text-stone-500">
                        {event.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Explains that this is a demo using sample data */}
        <p className="mt-5 text-[10px] text-stone-500">
          Interactive preview · Sample applications and inbox updates
        </p>
      </div>
    </div>
  );
}