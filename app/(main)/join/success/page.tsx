import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="grow flex flex-col justify-center items-center my-10 bg-gray-100 rounded-md">
        <p className="my-12 text-lg">Thank you for signing up! Please <Link href="/login" className="text-primary">log in.</Link></p>
      </div>
    </div>
  );
}