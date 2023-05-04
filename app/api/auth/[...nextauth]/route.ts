import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

import { db } from "@/lib/kysely"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, metadata }) {
      const { email } = user

      const queryUser = await db
        .selectFrom("users")
        .where("users.email", "=", email)
        .executeTakeFirst()

      if (queryUser) {
        return true
      } else {
        await db
          .insertInto("users")
          .values({
            name: user.name as string,
            username: email as string,
            email: email as string,
            is_admin: false,
            profile_image_url: user.image as string,
          })
          .execute()
        return true
      }
    },
    async session({ session, token }) {
      const { email } = session.user

      const queryUser = await db
        .selectFrom("users")
        .select(["is_admin"])
        .where("users.email", "=", email)
        .executeTakeFirst()

      console.log(JSON.stringify(queryUser))

      if (queryUser) {
        return {
          ...session,
          user: { ...session.user, isAdmin: queryUser.is_admin },
        }
      } else {
        return {
          ...session,
          user: { ...session.user, isAdmin: false },
        }
      }
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
