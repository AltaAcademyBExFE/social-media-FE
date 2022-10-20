import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
export const CardIndetitas = () => {
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div className=" box-card w-[35%] h-[17rem] p-5">
      <div className="flex p-3 justify-between">
        <div>
          <h1 className=" font-bold text-hitam-50 text-xl">Gavin Mansion</h1>
          <p className="font-normal text-abu-80 text-xs">
            Hidup itu susah jadi jangan dipersulit.
          </p>
        </div>
        <span>
          <SlOptionsVertical onClick={handleEdit} />
          {!edit ? (
            <div className="w-[4rem] h-[3rem] bg-abu-20 p-4 mt-3 left-0 top-0 rounded-md ">
              <p className="text-sm cursor-pointer text-hitam-50 mb-1 font-medium">
                Edit
              </p>
            </div>
          ) : null}
        </span>
      </div>
      <div className="p-3 flex space-x-4 mt-6">
        <AiFillHome className="text-biru-50" />
        <p className="font-medium text-hitam-50 font-base">
          Casrbad, California USA
        </p>
      </div>
      <div className=" p-3 flex space-x-4">
        <AiFillPhone className="text-biru-50" />
        <p className="font-medium text-hitam-50 font-base">+917892022</p>
      </div>
    </div>
  );
};
