import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Jalan from "../assets/dua orang.jpg";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password && address && phone && name) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password, phone, address]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      email,
      phone,
      address,
      password,
    };

    axios
      .post("register", body)
      .then((res) => {
        const { Message, Data } = res.data;
        // console.log(res);
        if (Data) {
          console.log(Data);
          navigate("/login");
        }
        alert(Message);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-40 p-10">
        <div className="flex flex-col md:flex-col lg:flex-col">
          <h1 className="text-4xl font-bold ">Create Account</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <p className="font-bold">Nama Lengkap</p>
            <input
              onChange={(e) => setName(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
              type="text"
              placeholder="Masukkan Nama"
            />
            <br />
            <br />
            <p className="font-bold">Email address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
              placeholder="contohemail@gmail.com"
              type="email"
              name="contohemail@gmail.com"
              id=""
            />
            <br />
            <br />
            <p className="font-bold">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
              type={passwordShown ? "text" : "password"}
              placeholder="Masukkan Password"
            />
            <button onClick={togglePassword}></button>
            <br />
            <br />
            <p className="font-bold">Alamat</p>
            <input
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
              type="text"
              placeholder="Masukkan Alamat"
            />
            <br />
            <br />
            {/* <form action=""> */}
            <p className="font-bold">Nomer Telephone</p>
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
              type="tel"
              placeholder="Masukkan Telephone"
              pattern="[0-9]{12}"
            />
            {/* <input type="submit" /> */}
            {/* </form> */}
            <br />
            <br />
            <button
              disabled={disabled}
              type="submit"
              className="mt-1 px-3 py-2 gradasi-button border shadow-sm text-white text-center w-[450px] h-[50px] rounded-md"
            >
              Register
            </button>
          </form>
          <p className="text-center">
            Already Have An Account? {""} <Link to="/login">Login Here</Link>
          </p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-col justify-center w-[34rem]">
          <img className="invisible md:visible" src={Jalan} alt="" />
        </div>
      </div>
    </>
  );
}

export default Register;
