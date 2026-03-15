import React from "react";

const logos = [
  "/logos/react.svg",
  "/logos/node.svg",
  "/logos/tailwind.svg",
  "/logos/javascript.svg",
  "/logos/python.svg",
  "/logos/docker.svg",
];

export default function InfiniteMarquee() {
  return (
    <div className="w-full overflow-hidden py-6">
      <div className="relative flex w-max  gap-12"
       style={{ animation: "marquee 20s linear infinite" }}>
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}