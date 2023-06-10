import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="absolute z-10 box-border w-full px-10 pt-10">
      <ul className="flex justify-between text-2xl">
        <li className="font-intertight font-light focus:font-normal">
          <Link>01/AIM</Link>
        </li>
        <li className="font-intertight font-light focus:font-normal">
          <Link>02/WORK</Link>
        </li>
        <li className="font-intertight font-light focus:font-normal">
          <Link>03/INFO</Link>
        </li>
        <li className="font-intertight font-light focus:font-normal">
          <Link>04/CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};
