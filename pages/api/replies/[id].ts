import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

import { db } from "@/lib/kysely"
import { generateParams } from "@/lib/query"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { query } = req
    const {
      post_content,
      posted_by_name,
      posted_by_username: email,
      image_url,
    } = query

    const params = {
      post_content,
      posted_by_name,
      posted_by_username: email,
      image_url,
    }

    const submitQuery = await fetch("/api/post?" + generateParams(params), {
      method: "POST",
    })

    if (submitQuery.ok) {
      const res = await submitQuery.json()

      const { inReplyTo } = query
      const submitReply = await db
        .insertInto("replies")
        .values({
          post_id: res.id,
          in_reply_to: Number(inReplyTo),
        })
        .returningAll()
        .execute()

      if (submitReply) {
        const data = submitQuery.json()

        return res.status(200).json(data)
      }
    }
  }

  if (req.method === "GET") {
    console.log("started")
    const { query } = req
    const { id: inReplyTo } = query
    console.log("HERHERHEHRE", inReplyTo)

    const mainPost = await db
      .selectFrom("posts")
      .selectAll()
      .innerJoin("users", "posts.user_id", "users.id")
      .where("posts.id", "=", Number(inReplyTo))
      .executeTakeFirst()

    const replies = await db
      .selectFrom("posts")
      .selectAll()
      .innerJoin("replies", "replies.post_id", "posts.id")
      .where("replies.in_reply_to", "=", Number(inReplyTo))
      .innerJoin("users", "posts.user_id", "users.id")
      .orderBy("posts.date_created", "desc")
      .execute()

    console.log("HERE ARE MY REPLIES", replies)

    console.log({
      mainPost: { ...mainPost, repliesCount: replies.length },
      replies: replies,
    })
    if (replies) {
      return res.status(200).json({
        mainPost: { ...mainPost, repliesCount: replies.length },
        replies: replies,
      })
    }
  }
}
