"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const FormBox = ({ placeholder }: { placeholder: string }) => {
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

    const submitQuery = await fetch(
      "/api/post?" +
        Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&"),
      {
        method: "POST",
      }
    )

    // TODO: add results to timeline
    const res = await submitQuery.json()
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
