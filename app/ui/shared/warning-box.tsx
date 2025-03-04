import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

export function WarningBox({ children } : { children: ReactNode }) {
  return <div className="flex bg-yellow-100 border-yellow-500 border-2 rounded-lg p-3 items-center gap-3">
    <div className="w-10 text-yellow-500">
      <ExclamationCircleIcon />
    </div>
    <div className="grow">
      {children}
    </div>
    <button className="bg-yellow-500 text-white p-2 rounded-sm">Pay Now</button>
  </div>
}