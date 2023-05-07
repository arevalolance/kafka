"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { RepliesPage } from "@/types/ResponseTypes"
import { generateParams } from "@/lib/query"
import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

export default function IndexPage() {
  const { data: session } = useSession()
  const [currPage, setCurrPage] = useState<number>(0)
  const [currPosts, setCurrPosts] = useState<RepliesPage[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "/api/post/all?" + generateParams({ offset: currPage }),
        {
          method: "GET",
        }
      )

      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setCurrPosts((prevItems) => [...prevItems, ...data])
      }
    }

    fetchData()
  }, [currPage])

  return (
    <section className="my-10 flex justify-center sm:container">
      <div className="w-[768px] max-w-[768px]">
        <FormBox
          updateTimeline={setCurrPosts}
          placeholder="What's on your mind?"
        />

        {/* TODO: add loading and use SWR to load initial content then use other technique to pull updates */}
        <div className="mt-10 flex flex-col border-b-[1px]">
          {currPosts.length > 0
            ? currPosts.map((item) => (
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
            : "No posts has been made yet..."}
        </div>
      </div>
    </section>
  )
}
