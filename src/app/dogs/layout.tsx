import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <header className="bg-teal-600 text-white">
        <div className="container mx-auto py-3">
          <Link className="font-bold text-2xl" href="/dogs">Oh its Cute!!</Link>
        </div>
      </header>
      <div className="container mx-auto py-8">
        {children}
      </div>
    </>
  )
}
