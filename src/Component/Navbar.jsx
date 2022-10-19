import React from "react";
import { CiSearch } from "react-icons/ci";
export const Navbar = () => {
  return (
    <div className=" px-[4rem] bg-abu-100 ">
      <h1>SocialUp</h1>
      <input
        id=""
        type="text"
        placeholder="Search"
        className="w-[45%] h-[3rem] px-3 text-sm bg-abu-50 rounded-lg placeholder-abu-100 focus:outline-none border border-abu-120"
      ></input>

      <div className="flex">
        <img
          src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile"
          className="h-[3rem] clip-path "
        />
        <h1 className="text-lg font-semibold text-hitam-50">Jack Geraliish</h1>
      </div>
    </div>
  );
};
