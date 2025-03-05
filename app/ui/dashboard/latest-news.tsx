import { getPostsFromWordpress } from "@/app/services/wp-service";
import { Card } from "../shared/card";

export default async function LatestNews() {
  const news = await getPostsFromWordpress();
  return (
    <Card title="News">
      <div>
        {news.posts.map(post => (
          <div>
            <h4 className="font-bold text-lg">{post.title}</h4>
            <div>
              {new Date(post.date).toDateString()}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}