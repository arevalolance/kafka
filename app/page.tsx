import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

export default function IndexPage() {
  return (
    <section className="my-10">
      <div className="max-w-[768px] sm:container">
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
