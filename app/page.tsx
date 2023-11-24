// Import necessary modules and components
import { client } from "./lib/sanity";
import { Post } from "./lib/interface";
import Link from "next/link";

// Function to fetch data from Sanity CMS
async function getData() {
  // Constructing the query to retrieve all posts
  const query = `*[_type=="post"]`;

  // Fetching data from Sanity using the client
  const data = await client.fetch(query);

  // Returning the fetched data
  return data;
}

// Default export for the Home component
export default async function Home() {
  // Fetching data from Sanity and type casting it to an array of Post objects
  const data = (await getData()) as Post[];

  // Rendering the Home component
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 z-30">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        {/* Heading for the page */}
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-6xl md:leading-14">
          All Posts
        </h1>
      </div>

      {/* List of posts */}
      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            {/* Individual post */}
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="">
                {/* Displaying the post's creation date */}
                <p className="text-base font-medium leading-6 text-teal-500">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              {/* Link to the individual post */}
              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  {/* Post title */}
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                </div>
                {/* Post overview */}
                <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
