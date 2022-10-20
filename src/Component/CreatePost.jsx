
import React, { useEffect, useState } from "react";

import { FiSend } from "react-icons/fi";
import { BsCardImage } from "react-icons/bs";
import { setStatus } from "../utils/redux/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const CreatePost = () => {

  const Users = useSelector((state) => state.data.Users);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (message) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [message]);
  const handleSubmit = async (e) => {
    const getStatus = localStorage.getItem("statusUser");
    e.preventDefault();
    const bodyy = {
      body: message,
    };
    axios
      .post("posts", bodyy)
      .then((res) => {
        const { message } = res.message;
        if (res.message) {
          localStorage.setItem("statusUsers", JSON.stringify(res));
          if (getStatus) {
            const parsedStatus = JSON.parse(getStatus);
            parsedStatus.push({
              name: Users.user,
              body: message,
            });
            const temp = JSON.stringify(parsedStatus);
            dispatch(setStatus(parsedStatus));
            localStorage.setItem("statusUsers", temp);
          } else {
            const temp = [
              {
                name: Users.user,
                body: message,
              },
            ];
            dispatch(setStatus(temp));
            localStorage.setItem("statusUser", JSON.stringify(temp));
          }
          alert("Status diperbaharui");
          e.target.reset();
        }
      })
      .catch((err) => {
        const { message } = err.message;
        alert(message);
      })
      .finally();

  

  return (
    <>
      <h1 className="font-bold text-2xl text-hitam-50 mb-5">
        Update your life
      </h1>
      <div className="w-[95%]  lg:w-[90%] h-auto box-card p-5 ">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex items-center gap-7 ">
            <img
              src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile"
              className="h-[5rem] clip-path"
            />
            <textarea
              id=""
              type="text"
              placeholder="Share your thoughts"
              className="w-full h-[3.5rem] px-3 text-sm pt-2 bg-abu-50 rounded-md placeholder-abu-100 focus:outline-none "
            />
          </div>
          <div className="flex items-center justify-evenly mt-8 ">
            <button className="h-[2.3rem] w-[5.5rem] text-xs bg-abu-20 rounded-md text-abu-80  mr-4 justify-center flex items-center ">
              <BsCardImage className="mr-2" /> Image
            </button>
            <button className="h-[2.3rem] w-[5.5rem] text-xs bg-abu-20 rounded-md text-abu-80 ">
              Video
            </button>

            <button className="w-[13rem] h-[3rem] text-base font-medium card-post-gradient rounded-md text-abu-10 ml-9 justify-center flex items-center ">
              <FiSend size={23} className="mr-2" /> Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
}
export default CreatePost;
