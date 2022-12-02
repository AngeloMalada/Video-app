import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiCloudUpload } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  const [user, setUser] = React.useState(false);
  const [isHamburger, setIsHamburger] = React.useState(false);
  // const handleHamburger = () => {
  //   setIsHamburger((prev) => !prev);
  // };

  const menuRef = React.useRef<any>(null);

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
    <div className="flex flex-row bg-white z-50  sticky top-0 lg:paddingStandard pt-2 justify-between w-full text-sm lg:text-xl">
      <div className="flex flex-row h-[content] gap-4 p-2">
        <GiHamburgerMenu
          // onClick={handleHamburger}
          className=" h-[24px] w-[24px] my-auto"
        />
        <div>
          <Link href={"/"}>
            <h1 className="my-auto ">LOGO</h1>
          </Link>
        </div>
        {/* {isHamburger && (
          <div
            ref={menuRef}
            className="bg-red-500 h-screen w-[30%] absolute left-0 top-0 "
          >
            allo
          </div>
        )} */}
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
        {user ? (
          <BiUserCircle className="h-[24px] w-[24px]" />
        ) : (
          <HiOutlineLogin className="h-[24px] w-[24px]" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
