import React, { useState } from "react";
import { Link } from "react-router-dom";
import Jalan from "../assets/dua orang.jpg";

function Register() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-40 p-10">
        <div className="flex flex-col md:flex-col lg:flex-col">
          <h1 className="text-4xl font-bold ">Create Account</h1>
          <br />
          <p className="font-bold">Nama Lengkap</p>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
            type="text"
            placeholder="Masukkan Nama"
          />
          <br />
          <p className="font-bold">Email address</p>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
            placeholder="contohemail@gmail.com"
            type="email"
            name="contohemail@gmail.com"
            id=""
          />
          <br />
          <p className="font-bold">Password</p>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
            type={passwordShown ? "text" : "password"}
            placeholder="Masukkan Password"
          />
          <button onClick={togglePassword}></button>
          <br />
          <p className="font-bold">Alamat</p>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
            type="text"
            placeholder="Masukkan Alamat"
          />
          <br />
          {/* <form action=""> */}
          <p className="font-bold">Nomer Telephone</p>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
            type="tel"
            placeholder="Masukkan Telephone"
            pattern="[0-9]{12}"
          />
          {/* <input type="submit" /> */}
          {/* </form> */}
          <br />
          <h1 className="mt-1 px-3 py-2 gradasi-button border shadow-sm text-white text-center w-[450px] h-[50px] rounded-md">
            Register
          </h1>
          <p className="text-center">Already Have An Account? Register Here</p>
          {/* <div className="flex flex-col md:flex-row lg:flex-row gap-1 mt-1 px-3 py-2 bg-white border-0 text-black text-center w-1/3">
            <h3 className="flex flex-row">Already Have an Account ? </h3>
            <h3 className="text-account flex-row">Login Now</h3>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-col lg:flex-col justify-center w-[34rem]">
          <img className="invisible md:visible" src={Jalan} alt="" />
        </div>
      </div>
    </>
  );
}

export default Register;
