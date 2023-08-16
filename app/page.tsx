import { client } from "./lib/sanity"
import { Post } from "./lib/interface"

async function getData(){
  const query = `*[_type=="post"]`

  const data = await client.fetch(query)

  return data
}

export default async function Home() {

  const data = await getData() as Post[]

  return (
   <div className="divide-y divide-gray-200 dark:divide-gray-700">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-6xl md:leading-14">All Posts</h1>
    </div>

   </div>
  )
}
