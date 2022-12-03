import React from "react";
import { GoVerified } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { Video } from "../types";
type Props = {
  video: Video[];
};

function VideoDetails({ video }: Props) {
  return (
    <div className="mt-2">
      <div>{video[0].title}</div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-red-500 w-[48px] h-[48px] rounded-full flex justify-center items-center text-center">
            <img src={video[0]?.uploadedBy?.image} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <span>{video[0]?.uploadedBy?.userName}</span>
              <GoVerified className="text-[#f00]" />
            </div>
            <span>100 subscribers</span>
          </div>
          <div>
            <button className="bg-red-500 p-2 rounded-xl">subscribe</button>
          </div>
        </div>
        {/* channel info and likes */}
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
