/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { BsCardImage } from "react-icons/bs";
import axios from "axios";

const CreatePost = () => {
  const [images, setImages] = useState("");
  const [name_user, setName_user] = useState("");
  const [created_at, setCreate_at] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      caption,
      images,
      name_user,
      created_at,
    };
    axios
      .post(
        "https://virtserver.swaggerhub.com/ALTA-Sosmed/openapi-alta-sosmed/1.0.0/posts",
        body
      )
      .then((res) => {
        // console.log(res.data);
        const { message, data } = res.data;
        localStorage.setItem("status", data.status);
        alert(message);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <h1 className="font-bold text-2xl text-hitam-50 mb-5">
        Update your life
      </h1>
      <div className="w-[95%]  lg:w-[90%] h-auto box-card p-5 ">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-7 ">
            <img
              src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile"
              className="h-[5rem] clip-path "
            />
            <textarea
              value={caption}
              id=""
              type="text"
              placeholder="Share your thoughts"
              className="w-full h-[3.5rem] px-3 text-base bg-abu-50 rounded-md placeholder-abu-100 focus:outline-none "
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-evenly mt-8 ">
            <button className="h-[2.3rem] w-[5.5rem] text-xs bg-abu-20 rounded-md text-abu-80  mr-4 justify-center flex items-center ">
              <BsCardImage className="mr-2" /> Image
            </button>
            <button className="h-[2.3rem] w-[5.5rem] text-xs bg-abu-20 rounded-md text-abu-80 ">
              Video
            </button>

            <button
              type="submit"
              className="w-[13rem] h-[3rem] text-base font-medium card-post-gradient rounded-md text-abu-10 ml-9 justify-center flex items-center "
            >
              <FiSend size={23} className="mr-2" /> Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
