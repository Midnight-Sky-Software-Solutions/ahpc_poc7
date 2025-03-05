'use client'
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "../shared/button";
import Link from "next/link";
import { isAuthenticated } from "@/app/lib/session";

export default async function ProfileInfo() {
  const authenticated = await isAuthenticated();
  return (
    <>
      {
        authenticated ?
          <ProfileInfoUnauthenticated />
          : <ProfileInfoUnauthenticated />
      }
    </>
  );
}

function ProfileInfoAuthenticated() {
  return (
    <div className="flex items-center justify-end grow">
      <div className="flex flex-col gap-1 pr-2">
        <div className="text-sm text-right">
          Alex Johnston
        </div>
        <div className="text-xs text-right">
          Regular Member
        </div>
      </div>

      <div className="w-16">
        <UserCircleIcon />
      </div>
    </div>
  );
}

function ProfileInfoUnauthenticated() {
  return (
    <div className="grow flex justify-end gap-2">
      <Button text="Sign Up" />
      <Link href="/auth/login"><Button text="Login" /></Link>
    </div>
  );
}