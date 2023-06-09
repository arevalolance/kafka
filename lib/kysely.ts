import { createKysely } from "@vercel/postgres-kysely"
import { Generated } from "kysely"

interface UserTable {
  id: Generated<number>
  name: string
  username: string
  email: string
  is_admin: boolean
  profile_image_url: string
}

interface PostTable {
  id: Generated<number>
  content: string
  date_created: Date
  posted_by_name: string
  posted_by_username: string
  likes: number
  dislikes: number
  views: number
  image_url?: string
  user_id: number
  is_reply: boolean
}

interface ReplyTable {
  id: Generated<number>
  post_id: number
  in_reply_to: number
}

export interface Database {
  users: UserTable
  posts: PostTable
  replies: ReplyTable
}

export const db = createKysely<Database>()
export { sql } from "kysely"
