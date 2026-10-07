// Content for the three steps.
// Keeping this in an array lets us reuse one layout for every step.
const steps = [
  {
    number: "01",
    title: "Add it your way",
    description:
      "Enter an application manually or tell AI what you applied to.",
  },
  {
    number: "02",
    title: "Track every opportunity",
    description:
      "Keep your roles, companies, statuses, dates, and notes organized in one place.",
  },
  {
    number: "03",
    title: "Stay updated automatically",
    description:
      "HireTrail detects important email updates and keeps your application status current.",
  },
];

// Export the component so page.tsx can import and display it.
export default function HowItWorks() {
  return (
    // The ID is the destination for links using href="#how-it-works".
    // aria-labelledby connects this section to its heading.
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="mx-auto max-w-[1344px] px-4 py-20 sm:px-8"
    >
      {/* Glass panel: rounded corners, transparent background, and blur */}
      <div
        className="
          rounded-[32px] border border-white/25
          bg-white/20 px-6 py-10 backdrop-blur-xl
          sm:px-12 sm:py-12
        "
      >
        {/* Center the heading and introductory text */}
        <div className="text-center">
          {/* Small label above the main heading */}
          <span
            className="
              inline-block rounded-full bg-[#EBE0CC]
              px-3 py-1 font-['DM_Sans']
              text-xs font-bold uppercase text-[#052E1A]
            "
          >
            A clearer path forward
          </span>

          {/* Section title, connected to aria-labelledby above */}
          <h2
            id="how-it-works-title"
            className="
              mt-4 font-['Humane'] text-5xl font-bold
              leading-none text-white sm:text-7xl
            "
          >
            How HireTrail Works
          </h2>

          {/* Supporting sentence beneath the title */}
          <p className="mt-3 font-['DM_Sans'] text-lg leading-7 text-white sm:text-xl">
            From application to offer, stay organized every step of the way.
          </p>
        </div>

        {/* Stack steps on small screens; use three columns from md upward.
            The top border creates the divider beneath the introduction. */}
        <div
          className="
            mt-8 grid gap-8 border-t border-[#052E1A]/15
            pt-8 md:grid-cols-3
          "
        >
          {/* Loop through the array and create an article for each step */}
          {steps.map((step) => (
            <article
              // A unique key helps React identify each step.
              key={step.number}
              // Add vertical dividers on larger screens.
              // Remove the divider and right padding from the last step.
              className="
                md:border-r md:border-[#052E1A]/15
                md:pr-8 md:last:border-0 md:last:pr-0
              "
            >
              <div className="flex items-center justify-between">
              {/* Display this step's number inside a dark green pill */}
                <span
                  className="
                    inline-block rounded-full bg-[#052E1A]
                    px-4 py-1.5 font-['DM_Sans']
                    font-bold text-white
                  "
                >
                  {step.number}
                </span>
                <span
                  className="
                    inline-block rounded-full bg-[#052E1A]
                    px-4 py-1.5 font-['DM_Sans']
                    font-bold text-black bg-[#E5EEE7]
                  "
                >
                  Insert icons
                </span>
              </div>


              {/* Read the title from the current step's data */}
              <h3
                className="
                  mt-6 font-['Humane'] text-4xl
                  font-bold leading-none text-white
                "
              >
                {step.title}
              </h3>

              {/* Read the description from the current step's data */}
              <p className="mt-3 font-['DM_Sans'] leading-7 text-white">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}