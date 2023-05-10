import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

import { db } from "@/lib/kysely"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req

  const {
    post_content,
    posted_by_name,
    posted_by_username: email,
    image_url,
  } = query

  const queryUser = await db
    .selectFrom("users")
    .select(["id"])
    .where("users.email", "=", email as string)
    .executeTakeFirst()

  if (queryUser) {
    console.log(queryUser)
    const submitQuery = await db
      .insertInto("posts")
      .values({
        content: post_content as string,
        date_created: new Date(),
        posted_by_name: posted_by_name as string,
        posted_by_username: email as string,
        likes: 0,
        dislikes: 0,
        views: 0,
        image_url: image_url as string,
        user_id: queryUser.id as number,
        is_reply: false,
      })
      .returningAll()
      .execute()

    return res.status(200).json(submitQuery[0])
  }

  return res.status(500).json({ message: `No user with email ${email} found` })
}
