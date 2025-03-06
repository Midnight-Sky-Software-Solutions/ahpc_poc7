import { getPostsFromWordpress } from "@/app/services/wp-service";
import { Card } from "../shared/card";
import Link from "next/link";

export default async function LatestNews() {
  const news = await getPostsFromWordpress();
  return (
    <Card title="News">
      <div>
        {news.posts.map(post => (
          <div key={post.slug} className="animate-fadein">
            <h4 className="font-bold text-lg"><Link href={`/news/${post.slug}`}>{post.title}</Link></h4>
            <div>
              {new Date(post.date).toDateString()}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}