import { NextResponse } from "next/server"

import { db } from "@/lib/kysely"

const POST = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  console.log(request.url)

  const post_content = searchParams.get("post_content")
  const posted_by_name = searchParams.get("posted_by_name")
  const email = searchParams.get("posted_by_username")
  const image_url = searchParams.get("image_url")

  console.log(post_content, posted_by_name, email, image_url)

  const queryUser = await db
    .selectFrom("users")
    .select(["id"])
    .where("users.email", "=", email as string)
    .executeTakeFirst()

  if (queryUser) {
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
      })
      .returningAll()
      .execute()

    return NextResponse.json(submitQuery)
  }

  return NextResponse.json({ message: `No user with email ${email} found` })
}

export { POST }
