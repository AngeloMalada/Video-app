import React, { useEffect } from "react";
import Comments from "../../components/Comments";
import Suggestions from "../../components/Suggestions";
import VideoCard from "../../components/VideoCard";
import { GetServerSideProps } from "next";

import VideoDetails from "../../components/VideoDetails";
import VideoDescription from "../../components/VideoDescription";
import Category from "../../components/Category";
import axios from "axios";
import { Video } from "../../types";

type Props = {
  videoDetails: Video[];
};

function VideoPage({ videoDetails }: Props) {
  console.log(videoDetails);
  return (
    <div className=" flex justify-center items-center flex-col lg:flex-row  lg:startDiv min-h-screen paddingStandard gapStandard">
      <div className="">
        <VideoCard video={videoDetails} />
        <VideoDetails video={videoDetails} />
        <VideoDescription video={videoDetails} />
        <Category />
        <Comments videoDetails={videoDetails} />
      </div>
      <Suggestions />
    </div>
  );
}

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  // const { data } = await axios.get(`http://localhost:3000/api/video/${id}`);
  const res = await fetch(`http://localhost:3000/api/video/${id}`);
  const videoDetails: Video[] = await res.json();

  return {
    props: {
      videoDetails,
    },
  };
};

export default VideoPage;
