"use client"

import { useSession } from "next-auth/react"

import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

export default function IndexPage() {
  const { data: session } = useSession()

  return (
    <section className="my-10 flex justify-center sm:container">
      <div className="max-w-[768px]">
        <FormBox placeholder="What's on your mind?" />

        <div className="mt-10 flex flex-col border-b-[1px]">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  )
}
