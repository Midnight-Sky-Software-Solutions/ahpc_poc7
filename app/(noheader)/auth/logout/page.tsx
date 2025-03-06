'use client'

import Spinner from "@/app/ui/shared/spinner";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Page() {

  return (
    <div>
      <Suspense fallback={<SigningOut />}>
        <DoSignout />
      </Suspense>
    </div>
  );
}

function SigningOut() {
  return (
    <div className="flex justify-center mt-8">
      <Spinner />
    </div>
  );
}

function DoSignout() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('pause')) {
      fetch('/api/auth', {
        method: 'DELETE'})
      .then((res) => {
        if (res.ok)
          window.location.href = 'https://aohpc.wildapricot.org/Sys/Login/SignOut';
      });
    }
  })

  return (
    <div className="flex justify-center mt-8">
      <Spinner />
    </div>
  );
}