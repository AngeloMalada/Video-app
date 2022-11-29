import React, { useEffect } from "react";
import Comments from "../../components/Comments";
import Suggestions from "../../components/Suggestions";
import VideoCard from "../../components/VideoCard";
import { GetServerSideProps } from "next";
import { comments } from "../../types";
import VideoDetails from "../../components/VideoDetails";
import VideoDescription from "../../components/VideoDescription";
import Category from "../../components/Category";

type Props = {
  comments: comments[];
};

function VideoPage({ comments }: Props) {
  return (
    <div className=" flex justify-center items-center flex-col lg:flex-row  lg:startDiv min-h-screen paddingStandard gapStandard lg:pt-[10%]">
      <div className="">
        <VideoCard />
        <VideoDetails />
        <VideoDescription />
        <Category />
        <Comments comments={comments} />
      </div>
      <Suggestions />
    </div>
  );
}

export const getServerSideProps = async () => {
  const comments: comments[] = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((res) => res.json());
  return {
    props: {
      comments,
    },
  };
};

export default VideoPage;
