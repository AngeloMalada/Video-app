import { GetServerSideProps } from "next";
import React from "react";
import { Video } from "../types";

import Comment from "./Comment";

type Props = {
  videoDetails: Video[];
};

function Comments({ videoDetails }: Props) {
  return (
    <div className="mt-2">
      <span>2000 comments</span>
      <div className="flex flex-col gap-8">
        {videoDetails.map((comment: any) => (
          <Comment comment={comment} />
        ))}

        {/* <Comment comment={comments} /> */}
      </div>
    </div>
  );
}

export default Comments;
