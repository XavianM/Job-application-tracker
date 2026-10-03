//import TrackerPreview from "./trackerPreview";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="
        mx-auto grid max-w-[1344px]
        items-start gap-12 px-4 pb-20 pt-12
        sm:px-8
        lg:min-h-[780px]
        lg:grid-cols-[1.2fr_1fr]
        lg:pt-16
      "
    >
      <div>
        <h1
          id="hero-title"
          className="
            font-['Humane'] font-bold
            text-[76px] leading-[0.95] text-white
            sm:text-[100px] xl:text-[128px]
          "
        >
          Track <span className="text-[#EBE0CC]">every step</span>{" "}
          of your job search.
        </h1>

        <p className="mt-6 max-w-xl font-['DM_Sans'] text-xl leading-relaxed text-white sm:text-2xl">
          Add applications manually or with AI, stay updated through
          email, and keep every opportunity organized in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#get-started"
            className="
              rounded-full bg-[#EBE0CC] px-9 py-3
              font-['Humane'] text-3xl font-semibold text-neutral-900
              transition hover:bg-[#F3EBDD]
            "
          >
            Start Tracking
          </a>

          <a
            href="#how-it-works"
            className="
              rounded-full border-2 border-white/50
              bg-white/10 px-9 py-3
              font-['Humane'] text-3xl font-semibold text-white
              transition hover:bg-white/20
            "
          >
            See How It Works
          </a>
        </div>
      </div>

      {/*<TrackerPreview />*/}
    </section>
  );
}
