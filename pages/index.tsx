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
  console.log(videos);
  const [hamburger, setHamburger] = React.useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="flex flex-row">
      {hamburger && <div className="bg-blue-500 w-[30%]">dasds</div>}
      <div
        onClick={handleHamburger}
        className=" grid grid-cols-1 gap-x-6 p-10 md:grid-cols-4 mx-auto "
      >
        {/* <div className=" flex flex-col lg:flex-row flex-wrap  w-full mt-10 justify-between items-center mx-auto gap-6 px-10"> */}
        {videos?.map((video) => (
          <GridVideoComponent key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // const { data } = await axios.get("http://localhost:3000/api/video");

  // return {
  //   props: {
  //     videos: data,
  //   },
  // };

  //fetch data from /api/video
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/video`);
  const videos: Video[] = await res.json();

  return {
    props: {
      videos,
    },
  };
};

export default HomePage;
