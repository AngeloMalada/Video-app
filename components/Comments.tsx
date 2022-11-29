import { GetServerSideProps } from "next";
import React from "react";
import { comments } from "../types";
import Comment from "./Comment";

type Props = {
  comments: comments[];
};

function Comments({ comments }: Props) {
  return (
    <div className="mt-2">
      <span>2000 comments</span>
      <div className="flex flex-col gap-8">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default Comments;
