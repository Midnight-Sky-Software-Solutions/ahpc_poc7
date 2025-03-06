import { getEvents } from "@/app/services/wa-events";
import Event from "@/app/ui/events/event";
import { lateef } from "@/app/ui/fonts";

export default async function Page() {
  const events = await getEvents();
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-6xl grow">
        <h2 className={`text-5xl py-5 ${lateef.className}`}>Events</h2>
        <div className="flex flex-col gap-8">
          {events?.map(event => (
            <Event
              key={event.Id}
              eventId={event.Id}
              name={event.Name}
              date={new Date(event.StartDate)}
              location={event.Location}
              registered={event.registered}
            />
          ))}
        </div>
      </div>
    </div>
  );
}