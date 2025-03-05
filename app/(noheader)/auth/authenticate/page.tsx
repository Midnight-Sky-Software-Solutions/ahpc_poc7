'use client'

import Spinner from "@/app/ui/shared/spinner";
import { useSearchParams  } from "next/navigation";
import { Suspense, useEffect, useState } from "react"

export default function Page() {

  return (
    <Suspense>
      <Authenticate />
    </Suspense>
  );
  
}

function Authenticate() {
  const [ loginFailed, setLoginFailed ] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const authCode = urlParams.get('code');
    if (!authCode) {
      setLoginFailed(true);
      return;
    }
    if (!searchParams.get('pause')) {
      fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({
          authCode: authCode,
          origin: window.location.origin
        })
      }).then(res => {
        if (!res.ok) {
          setLoginFailed(true);
        } else {
          window.location.href = `${window.location.origin}/`;
        }
      });
    }
  });

  return (
    loginFailed ? <p>Login failed!</p> : <div className="flex justify-center mt-8"><Spinner /></div>
  );

}