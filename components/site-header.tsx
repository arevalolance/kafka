"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Label } from "./ui/label"

export function SiteHeader() {
  const { data: session } = useSession()
  const [initials, setInitial] = useState<string>("")
  const [isAdmin, setAdmin] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (session?.user?.name) {
      const name = session.user && session.user.name
      const names = name && name.split(" ")
      const firstLetter = names && names[0]
      const lastLetter = names && names[names.length - 1]

      setAdmin(session?.user?.isAdmin || false)
      setInitial((firstLetter[0] || "") + (lastLetter[0] || ""))
    }
  }, [session])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {session ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={session.user?.image as string}
                        alt={initials}
                      />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      Hi, {session.user?.name?.split(" ")[0]} -{" "}
                      {!isAdmin ? "Normal User" : "Admin"}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {isAdmin && (
                      <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => router.push("/admin")}
                      >
                        <Icons.dashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                      className="hover:cursor-pointer"
                      onClick={() => signOut()}
                    >
                      <Icons.signOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Visit us at</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:cursor-pointer">
                      <Icons.gitHub className="mr-2 h-4 w-4" />
                      <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>GitHub</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button onClick={() => signIn("google")}>Login</Button>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
