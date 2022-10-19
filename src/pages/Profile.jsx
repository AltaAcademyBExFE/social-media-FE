import React from "react";
import { CardIndetitas } from "../Component/CardIndetitas";
import CreatePost from "../Component/CreatePost";
import Feed from "../Component/Feed";

const Profile = () => {
  return (
    <div>
      <div className="w-full h-[30rem]">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg"
          alt="walpaper"
          className="object-cover w-full h-[30rem]"
        />
        <div className="relative top-[-25%] left-[4%]">
          <img
            src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
            className="h-[15rem] clip-path "
          />
        </div>
      </div>
      <div className="container flex justify-between pt-[7rem]">
        <CardIndetitas />
        <div className="space-y-4">
          <CreatePost />
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
