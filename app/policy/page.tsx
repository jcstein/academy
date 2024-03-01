export default function PolicyPage() {
  return (
    <div className="space-y-2">
      <section>
        <h2 className="text-xl font-bold">Privacy Policy</h2>
        <p>
          This site uses JSON Web Tokens and an in-memory database which resets
          every ~2 hours.
        </p>
        <p>
          Data provided to this site is exclusively used to support signing in
          and is not passed to any third party services, other than via SMTP or
          OAuth for the purposes of authentication.
        </p>
      </section>
    </div>
  )
}
