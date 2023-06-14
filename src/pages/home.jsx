// eslint-disable-next-line no-unused-vars
import React from "react";
import Marquee from "react-fast-marquee";

export const Home = () => {
  const technologies1 = [
    { text: "Javascript", color: "hover:text-yellow-500" },
    { text: "Typescript", color: "hover:text-sky-500" },
    { text: "CSS", color: "hover:text-blue-700" },
    { text: "HTML", color: "hover:text-orange-500" },
    { text: "React", color: "hover:text-cyan-500" },
  ];
  const technologies2 = [
    { text: "Vite", color: "hover:text-purple-400" },
    { text: "React Native", color: "hover:text-cyan-600" },
    { text: "Framer Motion", color: "hover:text-fuchsia-600" },
    { text: "TailwindCSS", color: "hover:text-sky-400" },
  ];
  const technologies3 = [
    { text: "Firebase", color: "hover:text-amber-400" },
    { text: "Axios", color: "hover:text-purple-700" },
    { text: "MySQL", color: "hover:text-orange-500" },
    { text: "Unlighthouse", color: "hover:text-green-700" },
    { text: "Trello", color: "hover:text-blue-500" },
  ];

  return (
    <div className="bg-fu relative box-border w-full overflow-hidden bg-slate-200 pt-20">
      <div className="text-8xl">
        <Marquee speed={20} className="overflow-hidden pb-2" direction="right">
          <h1 className="font-intertight">
            {technologies1.map((tech, index) => (
              <span
                key={index}
                className={`transition-colors duration-500 ${tech.color}`}
              >
                {tech.text}.
              </span>
            ))}
          </h1>
        </Marquee>
        <Marquee speed={20} className="overflow-hidden pb-2">
          <h1 className="font-intertight">
            {technologies2.map((tech, index) => (
              <span
                key={index}
                className={`transition-colors duration-500 ${tech.color}`}
              >
                {tech.text}.
              </span>
            ))}
          </h1>
        </Marquee>
        <Marquee speed={20} className="overflow-hidden pb-2" direction="right">
          <h1 className="font-intertight">
            {technologies3.map((tech, index) => (
              <span
                key={index}
                className={`transition-colors duration-500 ${tech.color}`}
              >
                {tech.text}.
              </span>
            ))}
          </h1>
        </Marquee>
      </div>
    </div>
  );
};
