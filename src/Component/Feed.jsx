import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
const Feed = ({ id_post, comments }) => {
  const [burger, setBurger] = useState(true);
  const [comment, setComment] = useState(true);
  const [addKomen, setAddkomen] = useState("");
  const [body, setBody] = useState("");

  const addedComment = (e) => {
    e.preventDefault();
    const bodyComment = {
      body,
      id_post,
    };
    axios
      .post(
        "https://virtserver.swaggerhub.com/ALTA-Sosmed/openapi-alta-sosmed/1.0.0/comments",
        bodyComment
      )
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handlecomment = () => {
    setComment(!comment);
  };
  const handleBurger = () => {
    setBurger(!burger);
  };
  return (
    <div className="w-[95%] md:w-[42rem] h-auto box-card px-7 py-5">
      <div className="flex justify-between ">
        <div className="flex items-center ">
          <img
            src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
            className="h-[5rem] clip-path "
          />
          <div className=" ml-3 ">
            <h1 className="text-lg font-semibold text-hitam-50">
              Jack Geraliish
            </h1>
            <p className=" text-abu-100 font-normal text-xs">5 min ago</p>
          </div>
        </div>
        <div className="">
          <SlOptionsVertical
            className="text-hitam-50 cursor-pointer absolute  flex "
            size={15}
            onClick={handleBurger}
          />
          {!burger ? (
            <div className="w-[6rem] h-[5rem] bg-abu-20 p-4 mt-3 left-0 top-0 rounded-md ">
              <p className="text-sm cursor-pointer text-hitam-50 mb-1 font-medium">
                Edit
              </p>
              <p className="text-sm cursor-pointer text-hitam-50 mb-1 font-medium">
                Delete
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-hitam-50 font-normal ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, ultrices
        sagittis duis augue fermentum, suspendisse. Nec massa velit vel nulla
        fringilla consequat ultrices arcu. Scelerisque ipsum proin libero,
        malesuada.
      </p>

      <div className="mt-4 mb-4">
        <div className="flex mb-3">
          <div className="flex items-center text-xs text-abu-100 mr-5">
            <MdFavoriteBorder size={20} className="text-abu-100 mr-1" />
            <p>40 Likes</p>
          </div>

          <div className="flex items-center text-xs text-abu-100">
            <FaRegComment
              size={20}
              className="text-abu-100 mr-1"
              onClick={handlecomment}
            />
            <p>12 comment</p>
          </div>
        </div>

        {!comment ? (
          <form className="flex" onSubmit={addedComment}>
            <input
              value={addKomen}
              onChange={(e) => setAddkomen(e.target.value)}
              id=""
              type="text"
              placeholder="comment here"
              className="w-[75%] h-[3rem] px-3 text-sm bg-abu-50 rounded-lg placeholder-abu-100 focus:outline-none border border-abu-120"
            />
            <div className=" flex items-center  ml-5">
              <FiSend className="bg-abu-100 text-abu-50" size={30} />
            </div>
          </form>
        ) : null}
      </div>

      <div className="px-7 mt-5">
        <div className=" flex items-center">
          <img
            src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
            className="h-[3rem] clip-path "
          />
          <div className="ml-2">
            <h1 className="text-sm  font-semibold text-hitam-50">Malvinn H</h1>
            <p className="text-xs text-abu-100">2 min ago</p>
          </div>
        </div>
        <p className="px-10 text-sm font-medium text-abu-80 pt-2">
          welcome Jack
        </p>
      </div>
    </div>
  );
};

export default Feed;
