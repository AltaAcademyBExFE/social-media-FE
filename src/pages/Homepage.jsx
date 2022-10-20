import React from "react";
import { CardFollow } from "../Component/CardFollow";
import CreatePost from "../Component/CreatePost";
import Feed from "../Component/Feed";
import { Navbar } from "../Component/Navbar";
import OtherPost from "../Component/OtherPost";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-[7rem] ">
        <div className="lg:flex justify-items-center">
          <div className="status space-y-5 mb-4">
            <CreatePost />
            <CardFollow className=" " />
          </div>
          <div className=" feed space-y-[4rem] ml-2 ">
            {/* <Feed /> */}
            <OtherPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
