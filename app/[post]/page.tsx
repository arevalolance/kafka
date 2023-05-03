import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import FormBox from "@/components/timeline/form-box"
import Post from "@/components/timeline/post"

const PostPage = ({ params }) => {
  return (
    <div className="container my-5 flex max-w-[768px] flex-col gap-4">
      <div>
        <Post isPage={true} />
      </div>
      <div className="items-center justify-center">
        <span></span>
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
