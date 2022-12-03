import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

type Props = {
  comment: any;
};

function Comment({ comment }: Props) {
  console.log(comment);
  return (
    <>
      {/* mapped object of comments inside of video */}
      {comment.comments.map((comment: any) => (
        <div
          key={comment._id}
          className="flex flex-row gap-2 mt-2 md:w-[768px] lg:w-[768px] "
        >
          <div className="bg-red-500 w-12 h-12 rounded-full flex items-center text-center justify-center shrink-0">
            <img
              className="rounded-full w-full h-full object-cover"
              src={comment.uploadedBy.image}
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-row gap-2">
              <span>{comment.uploadedBy.userName}</span>
            </div>
            <span>{comment.comment}</span>
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
      ))}
    </>
  );
}

export default Comment;
