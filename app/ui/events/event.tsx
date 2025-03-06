import { CalendarIcon } from "@heroicons/react/16/solid";

export default function Event(props: {
  eventId: number,
  name: string,
  date: Date,
  location?: string,
  registered: boolean
}) {
  return (
    <div className="flex items-center gap-1">
      <div className="w-12 text-orange-vivid-400">
        <CalendarIcon />
      </div>
      <div className="grow">
        <h4 className="font-bold text-lg">{props.name}</h4>
        <div>
          {props.date.toDateString()} | {props.location}
        </div>
      </div>
      <div>
        <button 
          className={`${props.registered? 'bg-yellow-500' : 'bg-cool-grey-200'} 
          text-white p-2 rounded-sm`}
          disabled={props.registered}>
            RSVP
          </button>
      </div>
    </div>
  );
}