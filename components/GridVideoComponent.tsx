import React from "react";

type Props = {};

function GridVideoComponent({}: Props) {
  return (
    <div className="h-fit mb-6 md:mb-10">
      <div className="w-[100%] h-[60%] mx-auto">
        <img
          className="rounded-xl w-full h-full object-cover"
          src="/zloces.jpeg"
          alt=""
        />
      </div>
      <div className="flex flex-row items-center my-2 gap-2">
        <div className="bg-red-500 rounded-full w-12 h-12  text-center flex justify-center items-center">
          pic
        </div>
        <div className="flex flex-col">
          <span>Title</span>
          <span>Channel name</span>
          <span>Date</span>
        </div>
      </div>
    </div>

    // <div className="max-w-[273px] max-h-[153px] mx-auto">
    //   <img
    //     className="rounded-xl w-full h-full lg:h-[70%] object-cover"
    //     src="/zloces.jpeg"
    //     alt=""
    //   />
    //   <div className="flex flex-row items-center my-2 gap-2">
    //     <div className="bg-red-500 rounded-full w-12 h-12  text-center flex justify-center items-center">
    //       pic
    //     </div>
    //     <div className="flex flex-col">
    //       <span>Title</span>
    //       <span>Channel name</span>
    //       <span>Date</span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GridVideoComponent;
