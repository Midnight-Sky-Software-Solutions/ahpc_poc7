const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/demo-wp.alexj.ca';

export class NotFoundError {
  type: string = 'NotFoundError';
  constructor(public message: string) {
  }
}

export interface Post {
  slug: string;
  content: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Posts {
  posts: Post[],
  totalPages: number
}

export async function getPostsFromWordpress(page: number = 1, perPage: number = 5): Promise<Posts> {
  return await fetch(`${WP_API_URL}/posts?page=${page}&per_page=${perPage}`)
    .then(res => res.json().then(json => ({
      posts: json.posts,
      totalPages: Number(res.headers.get('X-WP-TotalPages'))
    })));
}

export async function getPostFromWordpress(slug: string): Promise<Post | NotFoundError> {
  return await fetch(`${WP_API_URL}/posts?slug=${slug}`)
    .then(res => res.json())
    .then(json => {
      const posts = json.posts;
      if (posts.length == 0) {
        return new NotFoundError(`Post with slug ${slug} not found`);
      }
      return posts[0];
    });
}