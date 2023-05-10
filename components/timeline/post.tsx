"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Popover } from "@radix-ui/react-popover"
import { useSession } from "next-auth/react"

import { getTimeElapsed } from "@/lib/time"
import useIsAdmin from "@/lib/useIsAdmin"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "../icons"
import { AspectRatio } from "../ui/aspect-ratio"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { PopoverContent, PopoverTrigger } from "../ui/popover"
import { Separator } from "../ui/separator"

const Post = ({
  content,
  isPage = false,
}: {
  content: {
    postId: number
    content: string
    dateCreated: Date
    postedByName: string
    postedByEmail: string
    repliesCount: number
    likes: number
    dislikes: number
    views: number
    imageUrl?: string
    userId: number
    isAdmin: boolean
    profileImageUrl: string
  }
  isPage?: boolean
}) => {
  const router = useRouter()
  const { data: session } = useSession()

  const getInitials = (name) => {
    console.log(content)
    const names = name && name.split(" ")
    const firstLetter = names && names[0]
    const lastLetter = names && names[names.length - 1]

    return firstLetter[0] || "" + lastLetter[0] || ""
  }

  return (
    <Card
      className={cn(
        isPage ? "border-b-[1px]" : "border-b-[0px]",
        "rounded-none",
        !isPage &&
          "delay-50 pb-[3px] transition ease-in hover:cursor-pointer hover:bg-gray-400/10"
      )}
      onClick={() =>
        !isPage ? router.push(`/replies/${content.postId}`) : null
      }
    >
      <CardHeader>
        <div className="flex flex-row items-center gap-x-4">
          <Avatar>
            <AvatarImage src={content.profileImageUrl} />
            <AvatarFallback>{getInitials(content.postedByName)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{content.postedByName}</CardTitle>
            <CardDescription>
              @{content.postedByEmail} · {getTimeElapsed(content.dateCreated)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className={cn("mb-5 p-0 md:pl-20")}>
        <p>{content.content}</p>
        {content.imageUrl && (
          <div className="w-full md:w-[450px]">
            <AspectRatio ratio={16 / 9} className="mt-2 bg-muted">
              <Image
                src={content.imageUrl}
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        )}
      </CardContent>
      {/* FIXME: CLICKING A BUTTON IS NOT SEPARATAE FROM CLICKING THE DIV */}
      <CardFooter className="flex flex-col items-start gap-y-2 md:ml-14">
        <div className="flex flex-wrap items-start gap-4">
          <Button
            variant="ghost"
            className="flex h-fit w-fit flex-row gap-x-3 rounded-full p-[2.5px] hover:bg-blue-400/30 hover:text-blue-300/80"
          >
            <Icons.replies className="h-4 w-4" />
            <span>{content.repliesCount}</span>
          </Button>
          <Button
            variant="ghost"
            className="flex h-fit w-fit flex-row gap-x-3 rounded-full  p-[2.5px] hover:bg-green-400/30 hover:text-green-300/80"
          >
            <Icons.like className="h-4 w-4" />
            <span>{content.likes}</span>
          </Button>

          <Button
            variant="ghost"
            className="flex h-fit w-fit flex-row gap-x-3 rounded-full p-[2.5px] hover:bg-red-400/30 hover:text-red-300/80"
          >
            <Icons.dislike className="h-4 w-4" />
            <span>{content.dislikes}</span>
          </Button>

          <Button
            variant="ghost"
            className="flex h-fit w-fit flex-row gap-x-3 rounded-full p-[2.5px]"
          >
            <Icons.views className="h-4 w-4" />
            <span>{content.views}</span>
          </Button>
        </div>
        {session?.user.isAdmin && (
          <>
            <Separator />
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">
                Sentiment Score:
              </span>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-green-300 dark:text-green-900">
                  50% Positive
                </Badge>
                <Badge className="text-red-300 dark:text-red-900">
                  40% Negative
                </Badge>
                <Badge>10% Neutral</Badge>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Context:</span>
              <div className="flex flex-wrap gap-2">
                <Badge>Government</Badge>
                <Badge>Health</Badge>
                <Badge>Politics</Badge>
              </div>
            </div>
          </>
        )}
      </CardFooter>
    </Card>
  )
}

export default Post
