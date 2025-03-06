'use client'
import { useActionState } from "react";
import { submitJoinForm } from "./action";

const initialState = {
  message: '',
  details: []
}

export default function Page() {

  const [state, formAction ] = useActionState(submitJoinForm, initialState);
  
  return (
    <div className="flex flex-col">
      <div className="grow flex flex-col justify-center items-center my-10 rounded-md">
        <div className="my-12">
          <h3 className="font-bold text-3xl">Sign Up</h3>
        </div>
        <div className="text-red-500 mb-2">
          { state?.message }
          <ul>
            { state?.details?.map(e =>(
              <li key={e.key}>{ e.value }</li>
            )) ?? <></> }
          </ul>
        </div>
        <form action={formAction} className="flex flex-col gap-4 mb-10">

          <div className="flex">
            <label htmlFor="firstName" className="block font-medium text-gray-900 w-40 flex items-center">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex">
            <label htmlFor="lastName" className="block font-medium text-gray-900 w-40 flex items-center">
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="you@example.com"
                aria-describedby="email-description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex">
            <label htmlFor="email" className="block font-medium text-gray-900 w-40 flex items-center">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                aria-describedby="email-description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex">
            <label htmlFor="password1" className="block font-medium text-gray-900 w-40 flex items-center">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password1"
                name="password1"
                type="password"
                placeholder="Enter your password"
                aria-describedby="email-description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex">
            <label htmlFor="password2" className="block font-medium text-gray-900 w-40 flex items-center">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="password2"
                name="password2"
                type="password"
                placeholder="And one more time"
                aria-describedby="email-description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex-grow">

            </div>
            <div className="mt-2">
              <button className="bg-yellow-400 p-2 rounded-lg text-white">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}