import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";
import { Button } from "./button";

export function WarningBox({ children } : { children: ReactNode }) {
  return <div className="flex flex-col sm:flex-row bg-yellow-100 border-yellow-500 border-2 rounded-lg p-3 items-center gap-3">
    <div className="w-10 text-yellow-500">
      <ExclamationCircleIcon />
    </div>
    <div className="grow">
      {children}
    </div>
    <Button text="Pay Now" />
  </div>
}