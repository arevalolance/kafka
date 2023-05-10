import { NextApiRequest, NextApiResponse } from "next"

import { db } from "@/lib/kysely"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req
  if (req.method === "GET") {
    const { offset } = query

    let allPosts = await db
      .selectFrom("posts")
      .innerJoin("users", "posts.user_id", "users.id")
      .leftJoin("replies", "posts.id", "replies.in_reply_to")
      .select([
        "posts.id",
        "posts.content",
        "posts.date_created",
        "posts.posted_by_name",
        "posts.posted_by_username",
        "posts.likes",
        "posts.dislikes",
        "posts.views",
        "posts.image_url",
        "posts.user_id",
        "users.is_admin",
        "users.profile_image_url",
      ])
      .select((eb) => [eb.fn.count("replies.in_reply_to").as("repliesCount")])
      .where("posts.is_reply", "!=", true)
      .groupBy("posts.id")
      .groupBy("replies.id")
      .groupBy("users.id")
      .orderBy("posts.date_created", "desc")
      .offset(Number(offset))
      .limit(10)
      .execute()
    console.log("OFFSET", offset)

    allPosts = allPosts.map((item) => ({ ...item, offset: offset }))

    if (allPosts) {
      return res.status(200).json(allPosts)
    }
  }
  res.status(500).json({ notFound: true })
}
