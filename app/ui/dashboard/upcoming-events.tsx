import { getEventRegistrations } from "@/app/services/wa-events";
import { Card } from "@/app/ui/shared/card";
import Spinner from "../shared/spinner";

export async function UpcomingEvents() {
  const registrations = await getEventRegistrations();
  return (
    <Card title={"Your Upcoming Events"}>
      <div className="flex flex-col gap-3">
        {registrations!.map(reg => (
          <div key={reg.Id}>
            <h4 className="font-bold text-lg">{reg.Event.Name}</h4>
            <div>
              { new Date(reg.Event.StartDate || '').toDateString() } | {reg.Event.Location}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function UpcomingEventsSkeleton() {
  return (
    <Card title={"Your Upcoming Events"}>
      <div className="flex flex-col gap-3">
        <Spinner />
      </div>
    </Card>
  );
}