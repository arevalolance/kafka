"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const FormBox = ({ placeholder }: { placeholder: string }) => {
  const [text, setText] = useState<string>("")

  return (
    <div className="mx-4 flex flex-col gap-4 sm:mx-0 sm:flex-row">
      <Textarea
        placeholder={placeholder}
        onChange={(e) => setText(e.target.defaultValue)}
      />
      <Button className="rounded-full">Post</Button>
    </div>
  )
}

export default FormBox
