'use server'
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "../shared/button";
import Link from "next/link";
import { isAuthenticated } from "@/app/lib/session";
import { getMe } from "@/app/services/wa-contacts";

export default async function ProfileInfo() {
  const authenticated = await isAuthenticated();
  return (
    <>
      {
        authenticated ?
          <ProfileInfoAuthenticated />
          : <ProfileInfoUnauthenticated />
      }
    </>
  );
}

async function ProfileInfoAuthenticated() {
  const me = await getMe();
  return (
    <div className="flex items-center justify-end grow">
      <div className="flex flex-col gap-1 pr-2">
        <div className="text-sm text-right">
          {me?.FirstName} {me?.LastName}
        </div>
        <div className="text-xs text-right">
          {me?.MembershipLevel?.Name ?? 'Unknown Member Type'}
        </div>
      </div>

      <div className="w-16 relative group">
        <UserCircleIcon />
        <div className="invisible group-hover:visible absolute -bottom-10 left-[-10em] z-10 mt-2 w-56 origin-top-right rounded-md py-1 bg-white">
          <Link
            href="/auth/logout"
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProfileInfoUnauthenticated() {
  return (
    <div className="grow flex justify-end gap-2">
      <Link href="/join"><Button text="Sign Up" /></Link>
      <Link href="/auth/login"><Button text="Login" /></Link>
    </div>
  );
}