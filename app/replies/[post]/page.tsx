"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"

import { RepliesPage } from "@/types/ResponseTypes"
import { fetcher } from "@/lib/fetcher"
import { cn } from "@/lib/utils"
import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

const PostPage = ({ params }) => {
  const [post, setPost] = useState<RepliesPage | undefined>(undefined)
  const [replies, setReplies] = useState<RepliesPage[]>([])
  const { data, isLoading } = useSWR(`/api/replies/${params.post}`, fetcher)

  useEffect(() => {
    if (!isLoading) {
      console.log(data)
      setPost(data["mainPost"])
      setReplies(data["replies"])
    }
  }, [isLoading, data])

  if (post) {
    return (
      <div className="my-10 flex flex-col gap-y-4 sm:container sm:max-w-[768px]">
        <div>
          <Post
            content={{
              postId: post.id,
              content: post.content,
              dateCreated: post.date_created,
              postedByName: post.posted_by_name,
              postedByEmail: post.posted_by_username,
              repliesCount: post.repliesCount,
              likes: post.likes,
              dislikes: post.dislikes,
              views: post.views,
              imageUrl: post.image_url,
              userId: post.user_id,
              isAdmin: post.is_admin,
              profileImageUrl: post.profile_image_url,
            }}
            isPage={true}
          />
        </div>
        <div className="items-center justify-center">
          <h2 className="my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Replies
          </h2>
          <FormBox
            updateTimeline={setReplies}
            placeholder="Post your thoughts..."
            isReplies={true}
            inReplyTo={params.post}
          />
        </div>
        <div
          className={cn(
            replies.length > 0
              ? "border-b-[1px]"
              : "text-center first-letter:mt-10"
          )}
        >
          {replies?.length > 0
            ? replies.map((item) => (
                <Post
                  key={item.posted_by_username + item.date_created}
                  content={{
                    postId: item.id,
                    content: item.content,
                    dateCreated: item.date_created,
                    postedByName: item.posted_by_name,
                    postedByEmail: item.posted_by_username,
                    repliesCount: item.repliesCount,
                    likes: item.likes,
                    dislikes: item.dislikes,
                    views: item.views,
                    imageUrl: item.image_url,
                    userId: item.user_id,
                    isAdmin: item.is_admin,
                    profileImageUrl: item.profile_image_url,
                  }}
                />
              ))
            : "No replies has been made yet..."}
        </div>
      </div>
    )
  }
}

export default PostPage
