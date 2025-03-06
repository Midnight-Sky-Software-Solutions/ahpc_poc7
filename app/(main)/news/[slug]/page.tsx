import { getPostFromWordpress, NotFoundError } from "@/app/services/wp-service";
import { lateef } from "@/app/ui/fonts";

export default async function Page({
  params,
} : {
  params: Promise<{ slug: string }>,
}) {
  const slug = (await params).slug;
  const post = await getPostFromWordpress(slug);
  if (post instanceof NotFoundError) {
    return <p>Not found.</p>
  } else {
    return (
        <div className="flex justify-center w-full">
          <div className="max-w-6xl grow">
            <h2 className={`text-5xl py-5 ${lateef.className}`}>{post.title}</h2>
            <div dangerouslySetInnerHTML={{__html: post.content}}>
            
            </div>
          </div>
        </div>
      );
  }
}