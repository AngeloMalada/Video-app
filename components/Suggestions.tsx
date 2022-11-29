import React from "react";

type Props = {};

function Suggestions({}: Props) {
  return (
    <div className=" flex flex-col gap-10 pt-10">
      <div className="w-[256px] h-[144px] object-contain">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="/zloces.jpeg"
          alt=""
        />
      </div>
      <div className="w-[256px] h-[144px] object-contain">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="/zloces.jpeg"
          alt=""
        />
      </div>
      <div className="w-[256px] h-[144px] object-contain">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="/zloces.jpeg"
          alt=""
        />
      </div>
      <div className="w-[256px] h-[144px] object-contain">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="/zloces.jpeg"
          alt=""
        />
      </div>
      <div className="w-[256px] h-[144px] object-contain">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="/zloces.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Suggestions;
