'use client'

import { ahpcConfig } from "@/ahpc.config";
import Spinner from "@/app/ui/shared/spinner";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";


export default function Page() {

  return (
    <div className="flex justify-center mt-8">
      <Suspense>
        <Redirect />
      </Suspense>
      <Spinner />
    </div>
  );

}

function Redirect() {

  const searchParams = useSearchParams();

  useEffect(() => {
    const returnUrl = `${window.location.origin}/auth/authenticate`;
    if (!searchParams.get('pause'))
      window.location.href = `https://aohpc.wildapricot.org/sys/login/OAuthLogin?client_id=${ahpcConfig.waClientId}&redirect_uri=${returnUrl}&scope=contacts_me`;
  });

  return <></>;

}