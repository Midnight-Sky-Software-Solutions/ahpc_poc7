import { getEvents } from "@/app/services/wa-events";
import { lateef } from "@/app/ui/fonts";
import { CalendarIcon } from "@heroicons/react/16/solid";

export default async function Page() {
  const events = await getEvents();
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-6xl grow">
        <h2 className={`text-5xl py-5 ${lateef.className}`}>Events</h2>
        <div className="flex flex-col gap-8">
          {events?.map(event => (
            <div key={event.Id} className="flex items-center gap-1">
              <div className="w-12 text-orange-vivid-400">
                <CalendarIcon />
              </div>
              <div className="grow">
                <h4 className="font-bold text-lg">{event.Name}</h4>
                <div>
                  {new Date(event.StartDate).toDateString()} | {event.Location}
                </div>
              </div>
              <div>
                <button 
                  className={`${event.registered? 'bg-yellow-500' : 'bg-cool-grey-200'} 
                  text-white p-2 rounded-sm`}
                  disabled={event.registered}>
                    RSVP
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}