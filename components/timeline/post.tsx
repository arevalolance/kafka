"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

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
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

const Post = ({ isPage }: { isPage?: boolean }) => {
  const router = useRouter()

  return (
    <Card
      className={cn(
        isPage ? "border-b-[1px]" : "border-b-[0px]",
        "cursor-pointer rounded-none"
      )}
      onClick={() => {
        router.push("/1")
      }}
    >
      <CardHeader>
        <div className="flex flex-row items-center gap-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/arevalolance.png" />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Lance Arevalo</CardTitle>
            <CardDescription>@arevalolance · 11h</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="md:ml-14">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vestibulum auctor nisi in faucibus. Nunc sed lacinia elit. Proin
          dignissim semper ultrices.
        </p>
        <div className="w-full md:w-[450px]">
          <AspectRatio ratio={16 / 9} className="my-2 bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-4 md:ml-14">
        <Button
          variant="ghost"
          className="flex h-fit w-fit flex-row gap-x-3 rounded-full p-0"
        >
          <Icons.replies className="h-4 w-4" />
          <span>155</span>
        </Button>
        <Button
          variant="ghost"
          className="flex h-fit w-fit flex-row gap-x-3 rounded-full p-0"
        >
          <Icons.like className="h-4 w-4" />
          <span>155</span>
        </Button>

        <Button
          variant="ghost"
          className="flex h-fit w-fit flex-row gap-x-3 rounded-full p-0"
        >
          <Icons.dislike className="h-4 w-4" />
          <span>155</span>
        </Button>

        <Button
          variant="ghost"
          className="flex h-fit w-fit flex-row gap-x-3 rounded-full p-0"
        >
          <Icons.views className="h-4 w-4" />
          <span>155</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Post
