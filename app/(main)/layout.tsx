import Link from "next/link";

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex justify-center shadow-md">
        <div className="max-w-6xl w-full flex items-center">
          <div className="py-4 pr-12">
            <Link href="/" className="text-6xl text-orange-vivid-500 italic font-bold">
              AHPC
            </Link>
          </div>
          <ul className="flex gap-12 text-lg font-semibold">
            <li>Home</li>
            <li>News</li>
            <li>Events</li>
            <li>Profile</li>
          </ul>
          <div>

          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-6xl w-full">
          { children }
        </div>
      </div>
    </>
  );
}