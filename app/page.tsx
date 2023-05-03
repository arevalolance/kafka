import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

export default function IndexPage() {
  return (
    <section className="container my-10">
      <div className="container max-w-[768px]">
        <FormBox placeholder="What's on your mind?" />

        <div className="mt-10 flex flex-col border-b-[1px]">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  )
}
