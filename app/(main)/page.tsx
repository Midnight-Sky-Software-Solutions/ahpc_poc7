
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { Lateef } from "next/font/google";

const lateef = Lateef({
  weight: ['500'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-lateef'
})

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className={`text-5xl py-5 ${lateef.className}`}>Home</h2>
        <div className="flex bg-yellow-100 border-yellow-500 border-2 rounded-lg p-3 items-center gap-3">
          <div className="w-10 text-yellow-500">
            <ExclamationCircleIcon />
          </div>
          <div className="grow">
            You have an oustanding invoice of <strong>$400.00</strong>.
          </div>
          <button className="bg-yellow-500 text-white p-2 rounded-sm">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
