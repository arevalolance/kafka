import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"

const AccountData = () => {
  return (
    <div className="flex">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://github.com/arevalolance.png" alt="Avatar" />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lance Arevalo</p>
          <p className="text-sm text-muted-foreground">
            lancearevalo2000@gmail.com
          </p>
        </div>
        <Separator className="my-2 sm:hidden" />
        <div className="ml-4 flex flex-row justify-between text-right sm:flex-col">
          <p className="text-sm font-medium">1000</p>
          <p className="text-sm text-muted-foreground">50% + · 50% -</p>
        </div>
      </div>
    </div>
  )
}

export default AccountData
