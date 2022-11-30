import React, { useEffect } from "react";
import Comments from "../components/Comments";
import Suggestions from "../components/Suggestions";
import VideoCard from "../components/VideoCard";
import { GetServerSideProps } from "next";
import { comments } from "../types";
import GridVideoComponent from "../components/GridVideoComponent";

type Props = {
  comments: comments[];
};

function HomePage({ comments }: Props) {
  const [isHamburger, setIsHamburger] = React.useState(false);
  const handleClick = () => {
    setIsHamburger((prev) => !prev);
  };
  return (
    <div className="flex flex-row">
      {isHamburger && <div className="bg-blue-500 w-[30%] "></div>}
      <div
        className=" grid grid-cols-1 gap-x-6 p-10 md:grid-cols-4  "
        onClick={handleClick}
      >
        <GridVideoComponent />
        <GridVideoComponent />
        <GridVideoComponent />
        <GridVideoComponent />
        <GridVideoComponent />
      </div>
    </div>
  );
}

export default HomePage;
