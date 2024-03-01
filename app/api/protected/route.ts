import { auth } from "auth"

export const GET = auth((req) => {
  if (req.auth) {
    return Response.json({ data: "Welcome to Modular Academy" })
  }

  return Response.json({ message: "Sign in to start Modular Academy" }, { status: 401 })
}) as any // TODO: Fix `auth()` return type
