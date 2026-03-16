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
    <div className="w-[90%] flex py-10  overflow-x-auto  ">{/*carousel*/}
      <div className="marquee flex items-center justify-center gap-4 "
      style={{ animation: "marquee 5s linear infinite" }}
      >{/*group*/}
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          1
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          2
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          3
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          4
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          5
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          6
        </div>
        <div className="marquee flex items-center justify-center gap-4 "
      style={{ animation: "marquee 5s linear infinite" }}
      >
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          1
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          2
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          3
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          4
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          5
        </div>
        <div className="marquee-track flex  "> {/*card*/}
          {/* {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} className="h-12 mx-10" />
          ))} */}
          6
        </div>
        </div>
      </div>
    </div>
  );
}