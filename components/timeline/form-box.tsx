"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"

import { RepliesPage } from "@/types/ResponseTypes"
import { generateParams } from "@/lib/query"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const FormBox = ({
  updateTimeline,
  placeholder,
  isReplies = false,
  inReplyTo,
}: {
  updateTimeline?: Dispatch<SetStateAction<RepliesPage[]>>
  placeholder: string
  isReplies?: boolean
  inReplyTo?: number
}) => {
  const [text, setText] = useState<string>("")
  const [isLoading, setLoading] = useState<boolean>(false)
  const { data: session } = useSession()

  useEffect(() => {
    console.log(text)
  }, [text])

  const onSubmit = async () => {
    setLoading(true)

    const params = {
      post_content: text,
      posted_by_name: session?.user.name,
      posted_by_username: session?.user.email,
      image_url: "",
    }

    const replyParams = {
      ...params,
      in_reply_to: inReplyTo,
    }

    console.log("param is", inReplyTo)

    const submitQuery = await fetch(
      `/api/${isReplies ? "replies" : "post"}/submit?` +
        generateParams(isReplies && inReplyTo ? replyParams : params),
      {
        method: "POST",
      }
    )

    // TODO: add results to timeline
    const res = await submitQuery.json()
    console.log("IFWEAWERWA", res)
    if (updateTimeline) {
      updateTimeline((currPosts) => [
        {
          id: res.id,
          content: res.content,
          date_created: res.date_created,
          posted_by_name: res.posted_by_name,
          posted_by_username: res.posted_by_username,
          likes: 0,
          dislikes: 0,
          views: 0,
          image_url: res.image_url,
          user_id: res.user_id,
          is_admin: res.is_admin,
          profile_image_url: session?.user.image as string,
          repliesCount: 0,
        },
        ...currPosts,
      ])
    }
    setLoading(false)
  }

  return (
    <div className="mx-4 flex flex-col gap-4 sm:mx-0 sm:flex-row">
      <Textarea
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        disabled={isLoading}
        aria-disabled={isLoading}
        onClick={() => onSubmit()}
        className="rounded-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          "Post"
        )}
      </Button>
    </div>
  )
}

export default FormBox
