"use client";

import {
  MeshGradient,
  type MeshGradientProps,
} from "@/components/mesh-gradient";

export default function MovingGradient({
  color1 = "#619E75",
  color2 = "#297347",
  color3 = "#052E1A",
  speed = 0.12,
  distortion = 1,
  swirl = 0.57,
  swirlIterations = 7.4,
  softness = 1,
  proportion = 0,
  shape = "edge",
  shapeScale = 0.59,
  scale = 1.45,
  rotation = 120,
  ...props
}: MeshGradientProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#297347]"
    >
      <MeshGradient
        {...props}
        className="absolute inset-0 size-full"
        color1={color1}
        color2={color2}
        color3={color3}
        speed={speed}
        distortion={distortion}
        swirl={swirl}
        swirlIterations={swirlIterations}
        softness={softness}
        proportion={proportion}
        shape={shape}
        shapeScale={shapeScale}
        scale={scale}
        rotation={rotation}
      />
    </div>
  );
}