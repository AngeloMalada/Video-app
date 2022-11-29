// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  comments: Comment[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const comments: Comment[] = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    res.status(200).json({ comments });
  }
}
