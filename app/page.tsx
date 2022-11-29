import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import VideoCard from "../components/VideoCard";
import Suggestions from "../components/Suggestions";
import Comments from "../components/Comments";
import { comments } from "../types";
import { GetServerSideProps } from "next";

type Props = {
  comments: comments[];
};

//disable scroll down on spacebar press
window.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    e.preventDefault();
  }
});

function page({ comments }: Props) {
  return (
    <div className=" flex justify-center items-center flex-col lg:flex-row  lg:startDiv min-h-screen paddingStandard gapStandard">
      <div>
        <VideoCard />
        <Comments comments={comments} />
      </div>
      <Suggestions />
    </div>
  );
}

export default page;
