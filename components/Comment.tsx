import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

type Props = {};

function Comment({}: Props) {
  return (
    <div className="flex flex-row gap-2 mt-2 md:w-[768px] lg:w-[768px] ">
      <div className="bg-red-500 w-12 h-12 rounded-full flex items-center text-center justify-center shrink-0">
        pic
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <span>Commenter name</span>
          <span>10 years ago</span>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          voluptate dolorum delectus, voluptas optio perferendis quod voluptatum
          dolorem iusto nobis beatae quisquam? Dolores aliquam rem fuga
          provident expedita aspernatur beatae eaque voluptatum ex aut doloribus
          enim totam at culpa, minima amet harum facilis! Molestias nostrum
          molestiae ipsam in. Quo, quis?
        </span>
        <div>
          <div className="flex flex-row gap-2 items-center mt-2">
            <AiFillLike className="text-[#f00] w-8 h-8" />
            <span>2 likes</span>
            <AiFillDislike className="text-[#f00] w-8 h-8" />
            <span>5 dislikes</span>
            <button className="bg-red-500 p-2 rounded-xl">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
