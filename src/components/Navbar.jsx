import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      _Link: "Home",
      url: "",
    },
    {
      id: 2,
      _Link: "About",
      url: "",
    },
    {
      id: 3,
      _Link: "Countries",
      url: "",
    },
    {
      id: 4,
      _Link: "News",
      url: "",
    },
    {
      id: 5,
      _Link: "contact",
      url: "",
      name: "contact",
    },
    {
      id: 6,
      _Link: "EXAMS",
      url: "",
      name: "exam",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4  bg-transparent ">
      <div className="w-15 mt-[1px]   ">
        {/* <h1 className="text-3xl font-bold ml-2 text-[#000000] flex">SSAC</h1> */}
        <img src="ssac.png" alt="" />
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, _Link, name }) => (
          <Link to={name} smooth duration={500}>
            <li
              key={id}
              className="px-4 cursor-pointer uppercase text-[#000000] hover:scale-105 "
            >
              {_Link}
            </li>
          </Link>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-[#000000] pr-4 z-50 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col text-1xl justify-center items-center absolute top-0 left-0 w-full h-screen  z-10 bg-white">
          {links.map(({ id, _Link, url }) => (
            <li
              key={id}
              className="px-4 cursor-pointer  py-6 uppercase text-[#000000]"
            >
              <a href={url}>{Link}</a>
              {_Link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
