"use client"

import { useEffect, useState } from "react"
import { faker } from "@faker-js/faker"
import { useSession } from "next-auth/react"
import InfiniteScroll from "react-infinite-scroll-component"

import { RepliesPage } from "@/types/ResponseTypes"
import { generateParams } from "@/lib/query"
import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

export default function IndexPage() {
  const { data: session } = useSession()
  const [currPage, setCurrPage] = useState<number>(1)
  const [currPosts, setCurrPosts] = useState<RepliesPage[]>([])
  const [hasMore, setHasMore] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "/api/post/all?" + generateParams({ offset: 0 }),
        {
          method: "GET",
        }
      )

      if (res.ok) {
        const data = await res.json()
        // console.log(data)
        setCurrPosts((prevItems) => [...prevItems, ...data])
      }
    }
    fetchData()
  }, [])

  const getPosts = () => {
    fetch("/api/post/all?" + generateParams({ offset: currPosts.length }))
      .then((res) => res.json())
      .then((data) => {
        setCurrPosts((prevItems) => [...prevItems, ...data])
      })
  }

  return (
    <section className="flex justify-center sm:container">
      <div className="w-[768px] max-w-[768px]">
        <div className="my-5">
          {session ? (
            <FormBox
              updateTimeline={setCurrPosts}
              placeholder="What's on your mind?"
              isReplies={false}
            />
          ) : (
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Explore
            </h3>
          )}
        </div>

        <InfiniteScroll
          next={getPosts}
          hasMore={hasMore}
          loader={<></>}
          endMessage={<></>}
          dataLength={currPosts.length}
        >
          {/* TODO: add loading and use SWR to load initial content then use other technique to pull updates */}
          <div className="flex flex-col border-b-[1px]">
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
                      posScore: Math.floor(Math.random() * 8) + 50,
                      negScore: Math.floor(Math.random() * 8) + 30,
                      neutralScore: Math.floor(Math.random() * 8) + 30,
                      topics: faker.helpers.arrayElements(
                        [
                          "Parks and Recreation",
                          "Traffic Management",
                          "Waste Management",
                          "Housing",
                          "Public Safety",
                          "Infrastructure",
                          "Healthcare",
                          "Tourism and Travel Destinations",
                          "Food",
                          "Environment",
                          "Arts and Culture",
                          "Community Development",
                          "Taxes Budget and Finance",
                          "City Ordinances",
                        ],
                        3
                      ),
                    }}
                  />
                ))
              : "No posts has been made yet..."}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  )
}
