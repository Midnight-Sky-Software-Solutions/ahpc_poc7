import { getPublicEvents } from "@/app/services/wa-events";
import { Card } from "@/app/ui/shared/card";
import { CalendarIcon } from "@heroicons/react/16/solid";

export default async function PublicEvents() {
  const events = await getPublicEvents();
  return (
    <Card title="Public Events">
      <div>
        {events?.map(event => (
          <div key={event.Id} className="flex items-center gap-1">
            <div className="w-12 text-orange-vivid-500">
              <CalendarIcon />
            </div>
            <div>
              <h4 className="font-bold text-lg">{event.Name}</h4>
              <div>
                {new Date(event.StartDate).toDateString()} | {event.Location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}