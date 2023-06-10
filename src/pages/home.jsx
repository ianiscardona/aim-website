// eslint-disable-next-line no-unused-vars
import React from "react";
import Marquee from "react-fast-marquee";

export const Home = () => {
  return (
    <div className="relative box-border w-full overflow-hidden bg-slate-200 pt-20">
      <div className="text-8xl">
        <Marquee speed={20} className="pb-2" direction="right">
          <h1 className="font-intertight">
            <span className="transition-colors duration-500 hover:text-yellow-500">
              Javascript.
            </span>
            <span className="transition-colors duration-500 hover:text-sky-500">
              Typescript.
            </span>
            <span className="transition-colors duration-500 hover:text-blue-700">
              CSS.
            </span>
            <span className="transition-colors duration-500 hover:text-orange-500">
              HTML.
            </span>
            <span className="transition-colors duration-500 hover:text-cyan-500">
              React.
            </span>
          </h1>
        </Marquee>
        <Marquee speed={20} className="pb-2">
          <h1 className="font-intertight">
            Vite.React Native.TailwindCSS.Framer Motion.
          </h1>
        </Marquee>
        <Marquee speed={20} className="pb-2" direction="right">
          <h1 className="font-intertight">
            Axios.Firebase.MySQL.NextJS.Javascript.
          </h1>
        </Marquee>
      </div>
    </div>
  );
};
