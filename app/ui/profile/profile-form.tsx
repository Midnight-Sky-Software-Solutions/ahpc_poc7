'use client'

import { useActionState, useState } from "react";
import { Transition } from "@headlessui/react";
import CheckCircleIcon from "@heroicons/react/20/solid/esm/CheckCircleIcon";
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon";
import { submitProfileForm } from "@/app/(main)/profile/action";

const initialState = {
  message: '',
  error: null
}

export default function ProfileForm(props: {
  firstName: string,
  lastName: string,
  email: string,
}) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [formState, formAction] = useActionState(submitProfileForm, initialState);
  const [submitting, setSubmitting] = useState(false);

  async function doAction(formData: FormData) {
    formAction(formData);
    setSubmitting(false);
  }

  return (
    <form action={doAction} className="border-b border-gray-900/10 pb-12" onSubmit={() => setSubmitting(true)}>
      {!!formState.message ? <Notification text={formState.message} /> : <></>}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
            First name
          </label>
          <div className="mt-2">
            <input
              id="first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
            Last name
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <button className="bg-yellow-500 p-2 rounded-lg text-white" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
}

function Notification(props: {
  text: string
}) {

  const [show, setShow] = useState(true);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <CheckCircleIcon aria-hidden="true" className="size-6 text-green-400" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Success!</p>
                    <p className="mt-1 text-sm text-gray-500">{ props.text }</p>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}