export default function brand() {
  return (
    <a
      href="/"
      aria-label="HireTrail home"
      className="flex items-center gap-3"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-200">
        <img
          src="/person-hiking.svg"
          alt=""
          aria-hidden="true"
          width={32}
          height={36}
          className="h-9 w-8"
        />
      </span>

      <span className="font-['Humane'] text-6xl font-bold leading-none text-white">
        HireTrail
      </span>
    </a>
  );
}