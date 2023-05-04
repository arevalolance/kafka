import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const { data: session } = useSession()

  useEffect(() => {
    const checkIsAdmin = async () => {
      if (!session) return
      const { isAdmin } = session.user
      setIsAdmin(isAdmin as boolean)
    }

    checkIsAdmin()
  }, [session])

  return isAdmin
}

export default useIsAdmin
