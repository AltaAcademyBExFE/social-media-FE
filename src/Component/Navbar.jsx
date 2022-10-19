import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
import { AiOutlineLogout, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg  w-full" : "header  w-full"}>
      <div className="px-4 lg:px-[4rem] bg-abu-10 h-[5rem] items-center flex justify-between ">
        <Link to="/">
          <h1 className="text-xl font-bold lg:text-3xl text-biru-50">
            SocialUp
          </h1>
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="w-[44%] h-[2.3rem] px-3 text-sm bg-abu-50 rounded-lg placeholder-abu-100 focus:outline-none border border-abu-120"
        ></input>
        <div className="hidden sm:hidden md:flex items-center">
          <img
            src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
            className="h-[3rem] clip-path "
          />
          <Link to="/profile">
            <h1 className="text-base font-semibold text-hitam-50 ml-2 cursor-pointer">
              Jack Geraliish
            </h1>
          </Link>

          <div className="flex items-center ml-[2rem] space-x-5">
            <BiSun />
            <AiOutlineLogout />
          </div>
        </div>

        {/* mobile btn */}
        <div className="z-30 block md:hidden text-hitam-50" onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        {/* menu mobile */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] z-20 bg-abu-10 h-full ease-in-out duration-200"
              : "fixed left-[-100%]"
          }
        >
          <div className="pt-6 pl-8">
            <h1 className="text-xl font-bold lg:text-3xl text-biru-50 mb-5">
              SocialUp
            </h1>
            <p className="mb-3 font-medium text-base text-hitam-50">Profile</p>
            <p className="font-medium text-base text-hitam-50">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
