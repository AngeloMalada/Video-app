import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiCloudUpload } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="flex flex-row bg-white z-50  sticky top-0 lg:paddingStandard pt-2 justify-between w-full text-sm lg:text-xl">
      <div className="flex flex-row h-[content] gap-4 p-2">
        <GiHamburgerMenu className=" h-[24px] w-[24px] text-start" />
        <h1 className="my-auto">LOGO</h1>
      </div>
      <div className="flex flex-row h-[content]  w-[300px] justify-between">
        <div className="border-solid border border-gray-200 rounded-l-3xl flex-1 p-2 flex justify-center">
          <h1 className="my-auto ">Search</h1>
        </div>
        <HiMagnifyingGlass className="h-full rounded-r-3xl bg-gray-200 w-10 p-2 " />
      </div>
      <div className="flex flex-row gap-4 p-2 ">
        <BiCloudUpload className="h-[24px] w-[24px]" />
        <BiBell className="h-[24px] w-[24px]" />
        <BiUserCircle className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}

export default Navbar;
