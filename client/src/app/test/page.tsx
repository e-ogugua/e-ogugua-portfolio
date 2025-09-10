import { getBlogPosts } from '@/lib/blog-utils';

export default async function TestPage() {
  try {
    const posts = await getBlogPosts();
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Blog Posts Test</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <div key={post.slug} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.date}</p>
              <p className="mt-2">{post.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in TestPage:', error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Error Loading Blog Posts</h1>
        <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </div>
    );
  }
}
