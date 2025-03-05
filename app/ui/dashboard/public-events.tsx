import { getPublicEvents } from "@/app/services/wa-events";
import { Card } from "@/app/ui/shared/card";

export default async function PublicEvents() {
  const events = await getPublicEvents();
  return (
    <Card title="Events">
      <div>
        {events?.map(event => (
          <div key={event.Id}>
            <h4 className="font-bold text-lg">{event.Name}</h4>
            <div>
              {new Date(event.StartDate).toDateString()} | {event.Location}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}