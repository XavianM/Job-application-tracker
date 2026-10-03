export default function movingGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#297347]"
    >
      <div className="gradient-blob gradient-blob-one" />
      <div className="gradient-blob gradient-blob-two" />
      <div className="gradient-blob gradient-blob-three" />
    </div>
  );
}