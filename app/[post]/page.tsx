import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

const PostPage = ({ params }) => {
  return (
    <div className="my-5 flex max-w-[768px] flex-col gap-4 sm:container">
      <div>
        <Post isPage={true} />
      </div>
      <div className="items-center justify-center">
        <h2 className="my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Replies
        </h2>
        <FormBox placeholder="Post your thoughts" />
      </div>
      <div className="border-b-[1px]">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default PostPage
