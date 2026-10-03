import React from 'react';
import Marquree from './component/Marquree';
import Mainnews from './component/Mainnews';
import NewsCurd from './component/NewsCurd';

interface Itype {
  curationId : string,
  title : string,
  articles:{
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    id : string;
  }[];
}

const page = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    cache: 'no-store'});
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;
  const otherSection:Itype[] = section.slice(1)
  return (
    <div>
      <Marquree />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        <div className="lg:col-span-2">
          <Mainnews news={mainNews} />
          <div className="mt-7">
            {
              otherSection.map(os => <div className='mt-10' key={os.curationId}>
                <h1 className="font-bold text-xl border-b-3 pl-2 border-red-600">{os.title}</h1>
                <div className='grid grid-cols-3 gap-2 mt-3'>
                  {
                  os.articles.map(post => <NewsCurd key={post.id} post={post}/>)
                  }
                </div>
              </div>)
            }
          </div>

        </div>
        <div className="lg:col-span-1">
          {/* সাইডবার উপাদান এখানে বসবে */}
        </div>
      </div>
    </div>
  );
};

export default page;