import React, { useEffect } from "react";
import Comments from "../components/Comments";
import Suggestions from "../components/Suggestions";
import VideoCard from "../components/VideoCard";
import { GetServerSideProps } from "next";

import GridVideoComponent from "../components/GridVideoComponent";
import axios from "axios";
import { Video } from "../types";

type Props = {
  videos: Video[];
};

function HomePage({ videos }: Props) {
  return (
    <div className="flex flex-row">
      <div className=" grid grid-cols-1 gap-x-6 p-10 md:grid-cols-4 mx-auto ">
        {/* <div className=" flex flex-col lg:flex-row flex-wrap  w-full mt-10 justify-between items-center mx-auto gap-6 px-10"> */}
        {videos?.map((video) => (
          <GridVideoComponent key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/video`);
  const videos: Video[] = await res.json();

  return {
    props: {
      videos,
    },
  };
};

export default HomePage;
