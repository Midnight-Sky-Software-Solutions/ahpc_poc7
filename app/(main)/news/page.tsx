import { getPostsFromWordpress } from "@/app/services/wp-service";
import { lateef } from "@/app/ui/fonts";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const pageno = (await searchParams).pageno;
  const news = await getPostsFromWordpress(Number(pageno) ?? 1);
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-6xl grow">
        <h2 className={`text-5xl py-5 ${lateef.className}`}>News</h2>
        <div>
        {news.posts.map(post => (
          <div key={post.slug} className="flex flex-col gap-1">
            <h4 className="font-bold text-lg">{post.title}</h4>
            <div className="text-cool-grey-600">
              {new Date(post.date).toDateString()}
            </div>
            <div className="text-cool-grey-900" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}