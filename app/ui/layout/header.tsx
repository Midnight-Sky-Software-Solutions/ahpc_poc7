import Link from "next/link";

const navItems: { text: string, href: string }[] = [
  {
    "text": "Home",
    href: "/"
  },
  {
    "text": "News",
    href: "/news"
  },
  {
    "text": "Events",
    href: "/events"
  },
  {
    "text": "Profile",
    href: "/profile"
  },
];

export default function Header() {
  return (
    <div className="flex justify-center shadow-md">
      <div className="max-w-6xl w-full flex items-center">
        <div className="py-4 pr-12">
          <Link href="/" className="text-6xl text-orange-vivid-500 italic font-bold">
            AHPC
          </Link>
        </div>
        <ul className="flex gap-12 text-lg font-semibold">
          {navItems.map(item => (
            <li key={item.text}>
              <Link href={item.href}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div>

        </div>
      </div>
    </div>
  );
}