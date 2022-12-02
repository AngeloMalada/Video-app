import React from "react";
import { Video } from "../types";

type Props = {
  video: Video[];
};

function VideoDescription({ video }: Props) {
  return (
    <div className="md:w-[768px] lg:w-[768px]  bg-gray-200 rounded-3xl p-4 mt-2">
      <span>{video[0]?._createdAt?.substring(0, 10)}</span>
      <p>{video[0]?.description}</p>
    </div>
  );
}

export default VideoDescription;
