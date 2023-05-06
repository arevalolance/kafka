"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Popover } from "@radix-ui/react-popover"

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

const Post = ({ isPage }: { isPage?: boolean }) => {
  const router = useRouter()
  const isAdmin = useIsAdmin()

  return (
    <Card
      className={cn(
        isPage ? "border-b-[1px]" : "border-b-[0px]",
        "rounded-none"
      )}
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
      <CardContent
        className="delay-50 transition ease-in hover:cursor-pointer hover:bg-gray-400/10 md:pl-20"
        onClick={() => router.push("/post/1")}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vestibulum auctor nisi in faucibus. Nunc sed lacinia elit. Proin
          dignissim semper ultrices.
        </p>
        <div className="w-full md:w-[450px]">
          <AspectRatio ratio={16 / 9} className="mt-2 bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-y-2 md:ml-14">
        <div className="flex flex-wrap items-start gap-4">
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
        </div>
        {isAdmin && (
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
