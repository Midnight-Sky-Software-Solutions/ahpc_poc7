import { ReactNode } from "react"
import { lateef } from "../fonts";

export function Card(
  props: {
    title: string,
    children?: ReactNode
  }
) {
  return (
    <div className="border-2 border-orange-vivid-800 mt-8 rounded-xl">
      <h2 className={`bg-orange-vivid-400 py-2 px-5 text-white font-bold text-3xl rounded-t-lg ${lateef.className}`}>{ props.title }</h2>
      <div className="py-2 px-5">
        { props.children }
      </div>
    </div>
  );
}