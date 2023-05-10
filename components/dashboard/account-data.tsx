import { getInitials } from "@/lib/getInitials"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"

const AccountData = ({
  image,
  name,
  email,
  postCount,
  positivity,
  negativity,
}: {
  image: string
  name: string
  email: string
  postCount: number
  positivity: number
  negativity: number
}) => {
  return (
    <div className="flex">
      <Avatar className="h-9 w-9">
        <AvatarImage src={image} alt="Avatar" />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
        <Separator className="my-2 sm:hidden" />
        <div className="ml-4 flex flex-row justify-between text-right sm:flex-col">
          <p className="text-sm font-medium">{postCount}</p>
          <p className="text-sm text-muted-foreground">
            {positivity}% + · {negativity}% -
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccountData
