import type { Session } from "next-auth"

export default function SessionData({ session }: { session: Session | null }) {
  if (session?.user) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-bold">Current Session Data</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Name</td>
              <td className="border px-4 py-2">{session.user.name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Email</td>
              <td className="border px-4 py-2">{session.user.email}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Image</td>
              <td className="border px-4 py-2">
                <img src={session.user.image ?? ""} alt="User Image" className="w-10 h-10 rounded-full"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Auth expires</td>
              <td className="border px-4 py-2">{session.expires}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <p>
      No profile data, please <em>Sign In</em> first.
    </p>
  )
}