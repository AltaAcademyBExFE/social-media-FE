import React, { useEffect, useState } from "react";
import Jalan from "../assets/Jalan.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { handleAuth } from "../utils/redux/reducers/reducer";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (email && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    // console.log(body);
    axios
      .post("login", body)
      .then((res) => {
        const { data, message } = res.data;
        localStorage.setItem("token", data.token);
        dispatch(handleAuth(true));
        alert(message);
        navigate("/");
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
          <br />
          <form onSubmit={handleSubmit}>
            <p className="font-bold">Email address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[500px] h-[50px] rounded-md"
              placeholder="contohemail@gmail.com"
              type="email"
              id=""
            />
            <br />
            <br />
            <p className="font-bold">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[500px] h-[50px] rounded-md"
              type={passwordShown ? "text" : "password"}
              placeholder="Masukkan Password"
            />
            <button onClick={togglePassword}></button>
            <br />
            <br />
            <div>
              <button
                disabled={disable}
                type="submit"
                // loading={loading || disabled}
                className="mt-1 px-3 py-2 gradasi-button border shadow-sm text-white text-center w-[500px] h-[50px] rounded-md"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="text-center">
            Not Register yet?{" "}
            <Link className="text-blue-900" to="/register">
              Create a new account
            </Link>
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
