"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import { useRef } from "react";
import { BiFullscreen } from "react-icons/bi";
import { BiPause } from "react-icons/bi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";
import { Video } from "../types";
type Props = {
  video: Video[];
};

interface HTMLVideo extends HTMLVideoElement {
  requestFullscreen(): Promise<void>;
  webkitRequestFullscreen(): Promise<void>;
  mozRequestFullScreen(): Promise<void>;
}

function VideoCard({ video }: Props) {
  const videoRef = React.useRef<HTMLVideo>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [height, setHeight] = React.useState("100%");
  const [width, setWidth] = React.useState("100%");
  const [isHover, setIsHover] = React.useState(true);

  //play and pause functionality

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  //fullscreen functionality
  const handleFs = () => {
    if (isFullScreen) {
      document.webkitExitFullscreen();
      setIsFullScreen(!isFullScreen);
    } else {
      if (document.getElementById("videoContainer")?.requestFullscreen) {
        document.getElementById("videoContainer")?.requestFullscreen();
      } else if (
        document.getElementById("videoContainer")?.webkitRequestFullscreen
      ) {
        document.getElementById("videoContainer")?.webkitRequestFullscreen();
      } else if (
        document.getElementById("videoContainer")?.mozRequestFullScreen
      ) {
        document.getElementById("videoContainer")?.mozRequestFullScreen();
      }
    }

    setHeight("100vh");
    setWidth("100vw");
    setIsFullScreen(!isFullScreen);
  };

  //mute and unmute functionality
  const handleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };
  //exit fullscreen functionality on esc key
  React.useEffect(() => {
    const handleFullScreenChange = () => {
      if (document.webkitIsFullScreen) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
        setHeight("100%");
        setWidth("100%");
      }
    };
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  //handle play pause on spacebar press

  React.useEffect(() => {
    const handleSpaceBar = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        handlePlay();
      }
    };
    document.addEventListener("keydown", handleSpaceBar);
    return () => {
      document.removeEventListener("keydown", handleSpaceBar);
    };
  }, [isPlaying]);

  //toggle mute on m press

  React.useEffect(() => {
    const handleM = (e: KeyboardEvent) => {
      if (e.code === "KeyM") {
        handleMute();
      }
    };
    document.addEventListener("keydown", handleM);
    return () => {
      document.removeEventListener("keydown", handleM);
    };
  }, [isMuted]);

  //toggle fullscreen on f press

  React.useEffect(() => {
    const handleF = (e: KeyboardEvent) => {
      if (e.code === "KeyF") {
        handleFs();
      }
    };
    document.addEventListener("keydown", handleF);
    return () => {
      document.removeEventListener("keydown", handleF);
    };
  }, [isFullScreen]);

  return (
    //main container
    <div className=" w-[300px] mx-auto md:tabletRes lg:tabletRes flex flex-col pt-10 ">
      {/* video container */}
      <div
        id="videoContainer"
        className="w-full h-full relative object-cover  "
      >
        <div
          style={{
            height: height,
            width: width,
            position: "relative",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <video
            ref={videoRef}
            src={video[0]?.video?.asset?.url}
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full object-cover rounded-xl bg-gray-200"
          ></video>
          {/* buttons in video container */}
          {isHover && (
            <div className=" border-t-4  border-gray-500 absolute bottom-0 p-0 left-0 flex w-[100%] flex-row justify-between  paddingStandard  ">
              <div className="flex flex-row gap-4 p-2 items-center">
                <button onClick={handlePlay} className=" w-8 h-8">
                  {isPlaying ? (
                    <BiPause className="text-white h-8 w-8" />
                  ) : (
                    <BsPlayFill className="text-white h-8 w-8" />
                  )}
                </button>
                <button onClick={handleMute} className="h-[32px] w-[32px]">
                  {isMuted ? (
                    <BsFillVolumeUpFill className="text-white h-8 w-8" />
                  ) : (
                    <BsFillVolumeMuteFill className="text-white h-8 w-8" />
                  )}
                </button>
              </div>

              <div className="p-2 flex justify-center">
                <button onClick={handleFs} className="h-[32px] w-[32px]">
                  <BiFullscreen className="text-white h-8 w-8 " />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
