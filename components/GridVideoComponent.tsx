import Link from "next/link";
import { Video } from "../types";

import React from "react";
import { urlFor } from "../lib/client";
type Props = {
  video: Video;
};

function GridVideoComponent({ video }: Props) {
  return (
    <div className="h-fit mb-6 md:mb-10 ">
      <Link href={`/video/${video?._id}`}>
        <div className="w-[100%] h-[60%] mx-auto">
          <img
            className="rounded-xl w-[273px] h-[153px] object-cover"
            // src={urlFor(video?.thumbnail?.asset?.url).url()}
            src={video?.thumbnail?.asset?.url}
            alt=""
          />
        </div>
        <div className="flex flex-row items-center my-2 gap-2">
          <div className=" rounded-full w-12 h-12  text-center flex justify-center items-center">
            <img
              className="rounded-full w-full h-full object-cover"
              src={video?.uploadedBy?.image}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span>{video?.title}</span>
            <span>{video?.uploadedBy?.userName}</span>
            <span>{video?._createdAt?.substring(0, 10)}</span>
          </div>
        </div>
      </Link>
    </div>

    // <div className="max-w-[273px] max-h-[153px] mx-auto">
    //   <img
    //     className="rounded-xl w-full h-full lg:h-[70%] object-cover"
    //     src="/zloces.jpeg"
    //     alt=""
    //   />
    //   <div className="flex flex-row items-center my-2 gap-2">
    //     <div className="bg-red-500 rounded-full w-12 h-12  text-center flex justify-center items-center">
    //       pic
    //     </div>
    //     <div className="flex flex-col">
    //       <span>Title</span>
    //       <span>Channel name</span>
    //       <span>Date</span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GridVideoComponent;
