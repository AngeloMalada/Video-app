import React, { Component, useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { TfiVideoClapper } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { MdOutlineSubscriptions } from "react-icons/md";

type Props = {};

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    //disable scroll down on spacebar press

    window.addEventListener("keydown", function (e) {
      if (e.code === "Space") {
        e.preventDefault();
      }
    });
  }, []);
  return (
    <div className="relative">
      {/* mobile bottom bar */}
      <div className="bg-white shadow-inner  text-black w-full z-50 fixed bottom-0 p-4 flex flex-row justify-around lg:hidden">
        <AiOutlineHome className=" w-[24px] h-[24px ]" />
        <TfiVideoClapper className="w-[24px] h-[24px ]" />
        <SlLike className=" w-[24px] h-[24px ]" />
        <MdOutlineSubscriptions className=" w-[24px] h-[24px ]" />
      </div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
