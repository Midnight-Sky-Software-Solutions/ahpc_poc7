'use client'

import { register } from "@/app/(main)/events/action";
import { CalendarIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Event(props: {
  eventId: number,
  name: string,
  date: Date,
  location?: string,
  registered: boolean
}) {
  const [ working, setWorking ] = useState(false);
  const [ registrationBurned, setRegistrationBurned ] = useState(false);

  function registerClicked() {
    setWorking(true);
    register(props.eventId)
      .then(() => {
        setWorking(false);
        setRegistrationBurned(true);
      });
  }
  
  return (
    <div className="flex items-center gap-1">
      <div className="w-12 text-orange-vivid-400">
        <CalendarIcon />
      </div>
      <div className="grow">
        <h4 className="font-bold text-lg">{props.name}</h4>
        <div>
          {props.date.toDateString()} {props.location ? ` | ${props.location}`: ''}
        </div>
      </div>
      <div>
        <button 
          className={`${(props.registered || working || registrationBurned) ? 'bg-cool-grey-200' : 'bg-yellow-500'} 
          text-white p-2 rounded-sm`}
          disabled={props.registered || working || registrationBurned}
          onClick={() => registerClicked()}  
        >
            {working ? 'Working...' : ((registrationBurned || props.registered) ? 'Registered' : 'RSVP')}
          </button>
      </div>
    </div>
  );
}