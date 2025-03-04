
import { Lateef } from "next/font/google";

const lateef = Lateef({
  weight: [ '500' ],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-lateef'
})

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full flex items-center">
        <h2 className={`text-5xl py-5 ${lateef.className}`}>Home</h2>
      </div>
    </div>
  );
}
