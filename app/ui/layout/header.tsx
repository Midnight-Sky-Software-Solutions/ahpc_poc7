'use client'
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../shared/button";
import ProfileInfo from "./profile-info";


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
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="flex justify-center shadow-md">
      <div className="max-w-6xl w-full flex flex-wrap items-center">
        <div className="pl-12 sm:pl-0 py-4 pr-12">
          <Link href="/" className="text-6xl text-orange-vivid-500 italic font-bold">
            AHPC
          </Link>
        </div>
        <div className="grow hidden md:inline h-full">
          <ul className="flex gap-12 text-lg font-semibold h-full">
            {navItems.map(item => (
              <li key={item.text} className={`${item.href == pathname ? 'border-b-5' : ''} h-full items-center flex border-orange-vivid-500`}>
                <Link href={item.href}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <ProfileInfo /> */}
        <div className="w-full justify-center flex md:hidden">
          <button className="w-12"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <Bars3Icon />
          </button>
        </div>
        {mobileNavOpen ?
          <div className="w-full md:hidden">
            <ul className="flex flex-col text-lg font-semibold">
              {navItems.map(item => (
                <li key={item.text} className={`items-center flex justify-center border-orange-vivid-500 py-3`}>
                  <Link href={item.href}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          : <></>}
      </div>
    </div>
  );
}

