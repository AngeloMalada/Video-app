import React, { Component, useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

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
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
