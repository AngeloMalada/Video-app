import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../lib/client";
import { videoDetailQuery } from "../../../lib/queries";

interface Props {
  id: string | string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    //fix typescript error
    const { id }: { id: string | string[] } = req.query as unknown as Props;
    //fixaj error

    const query = videoDetailQuery(id);
    const data = await sanityClient.fetch(query);

    res.status(200).json(data);
  }
}
