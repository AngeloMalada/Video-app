import React from "react";
import { GoVerified } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
type Props = {};

function VideoDetails({}: Props) {
  return (
    <div className="mt-2">
      <div>Title</div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-red-500 w-[48px] h-[48px] rounded-full flex justify-center items-center text-center">
            pic
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <span>Channel name</span>
              <GoVerified className="text-[#f00]" />
            </div>
            <span>Subscribers</span>
          </div>
          <div>
            <button className="bg-red-500 p-2 rounded-xl">subscribe</button>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <AiFillLike className="text-[#f00] w-8 h-8" />
          <AiFillDislike className="text-[#f00] w-8 h-8" />
          <IoIosShareAlt className="text-[#f00] w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
