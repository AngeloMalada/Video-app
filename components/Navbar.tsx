import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiCloudUpload } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { TfiVideoClapper } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { MdOutlineSubscriptions } from "react-icons/md";

type Props = {};

function Navbar({}: Props) {
  const [user, setUser] = React.useState(false);
  const [isHamburger, setIsHamburger] = React.useState(false);
  const handleHamburger = () => {
    setIsHamburger((prev) => !prev);
  };

  const menuRef = React.useRef<any>(null);
  //event listener for clicking outside of the menu
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        isHamburger &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsHamburger(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburger]);
  return (
    <>
      {/* main container */}
      <div className="flex flex-row bg-white z-50  sticky top-0 lg:paddingStandard pt-2 justify-between w-full text-sm lg:text-xl">
        {/* menu and logo buttons */}
        <div className="flex flex-row h-[content] gap-4 p-2 items-center">
          <GiHamburgerMenu
            onClick={handleHamburger}
            className=" h-[24px] w-[24px] my-auto text-center hidden lg:block"
          />
          <div>
            <Link href={"/"}>
              <h1 className="my-auto ">LOGO</h1>
            </Link>
          </div>
        </div>
        {/* left side slider that shows menu options */}
        {isHamburger && (
          <div
            ref={menuRef}
            className="bg-white shadow-xl  h-screen hidden lg:block absolute left-0 top-0 lg:paddingStandard items-center pt-2 text-sm lg:text-xl space-y-20"
          >
            <div className="flex flex-row lg:h-[46px] gap-4 p-2 items-center">
              <GiHamburgerMenu
                onClick={handleHamburger}
                className=" h-[24px] w-[24px] my-auto text-center"
              />
              <div>
                <Link href={"/"}>
                  <h1 className="my-auto ">LOGO</h1>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-row gap-4">
                <AiOutlineHome className=" h-[24px] w-[24px] my-auto text-center" />
                <span>Home</span>
              </div>
              <div className="flex flex-row gap-4">
                <TfiVideoClapper className=" h-[24px] w-[24px] my-auto text-center" />
                <span>Your videos</span>
              </div>
              <div className="flex flex-row gap-4">
                <SlLike className=" h-[24px] w-[24px] my-auto text-center" />
                <span>Liked Videos</span>
              </div>
              <div className="flex flex-row gap-4">
                <MdOutlineSubscriptions className=" h-[24px] w-[24px] my-auto text-center" />
                <span>Subscriptions</span>
              </div>
            </div>
          </div>
        )}
        {/* search bar */}
        <div className="flex flex-row h-[content]  w-[300px] justify-between ">
          <div className="border-solid border border-gray-200 rounded-l-3xl flex-1 p-2 flex justify-center">
            <h1 className="my-auto ">Search</h1>
          </div>
          <HiMagnifyingGlass className="h-full rounded-r-3xl bg-gray-200 w-10 p-2 " />
        </div>
        {/* right side user buttons */}
        <div className="flex flex-row gap-4 p-2 ">
          <BiCloudUpload className="h-[24px] w-[24px]" />
          <BiBell className="h-[24px] w-[24px]" />
          {user ? (
            <BiUserCircle className="h-[24px] w-[24px]" />
          ) : (
            <HiOutlineLogin className="h-[24px] w-[24px]" />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
