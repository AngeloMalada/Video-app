import type { NextApiRequest, NextApiResponse } from "next";
import { allVideosQuery } from "../../../lib/queries";
import { sanityClient } from "../../../lib/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = allVideosQuery();
    const data = await sanityClient.fetch(query);
    console.log(data);

    res.status(200).json(data);
  }
}
