
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
    <div className="flex flex-wrap justify-center">
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

      <div className="max-w-6xl w-full border-2 border-orange-vivid-800 mt-5 rounded-xl">
        <h2 className={`bg-orange-vivid-400 py-2 px-5 text-white font-bold text-3xl rounded-t-lg ${lateef.className}`}>Your Upcoming Events</h2>
        <div>
          <div className="py-2 px-5">
            <h4 className="font-bold text-lg">Italian Style Pizza Bake off</h4>
            <div>
              April 23, 2025 | Edmonton
            </div>
          </div>
          <div className="py-2 px-5">
            <h4 className="font-bold text-lg">American Style Pizza Bake off</h4>
            <div>
              April 23, 2025 | Edmonton
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
