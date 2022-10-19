import React, { useState } from "react";
import Jalan from "../assets/Jalan.jpg";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-18 p-20">
        <div className="flex flex-col md:flex-col lg:flex-col">
          <h1 className="text-SocialUp text-3xl font-bold">SocialUp</h1>
          <br />
          <br />
          <h1 className="text-4xl font-bold ">Login in to your account</h1>
          <br />
          <p className="text-Grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nunc
            nibh <br /> tortor lorem ipsum
          </p>
          <br />
          <p className="font-bold">Email address</p>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[500px] h-[50px] rounded-md"
            placeholder="contohemail@gmail.com"
            type="email"
            name="contohemail@gmail.com"
            id=""
          />
          <br />
          <p className="font-bold">Password</p>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[500px] h-[50px] rounded-md"
            type={passwordShown ? "text" : "password"}
            placeholder="Masukkan Password"
          />
          <button onClick={togglePassword}></button>
          <br />
          <h1 className="mt-1 px-3 py-2 gradasi-button border shadow-sm text-white text-center w-[500px] h-[50px] rounded-md">
            Sing in
          </h1>
          {/* <div className="grid grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-1 mt-1 px-3 py-2 bg-white border-0 text-black text-center w-1/3">
          <h3 className="grid grid-cols-1 text-right">Not Registered yet ? </h3>
          <h3 className="text-account grid grid-cols-1 text-left">
            Create a new account
          </h3>
        </div> */}
          <p className="text-center">
            Not Register yet? {"Create a new account"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row m-24 lg:flex-row w-[300px]">
          <img className="md:visible invisible" src={Jalan} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
