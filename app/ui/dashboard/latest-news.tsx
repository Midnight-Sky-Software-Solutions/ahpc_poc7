import { Card } from "../shared/card";

export default async function LatestNews() {
  return (
    <Card title="News">
      <div>
        <div>
          <h4 className="font-bold text-lg">Italian Style Pizza Bake off</h4>
          <div>
            April 23, 2025 | Edmonton
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg">American Style Pizza Bake off</h4>
          <div>
            April 23, 2025 | Edmonton
          </div>
        </div>
      </div>
    </Card>
  );
}