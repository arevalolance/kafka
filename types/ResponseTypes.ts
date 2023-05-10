export type RepliesPage = {
  id: number
  content: string
  date_created: Date
  posted_by_name: string
  posted_by_username: string
  likes: number
  dislikes: number
  views: number
  image_url: string
  user_id: number
  is_admin: boolean
  profile_image_url: string
  repliesCount: number
}
