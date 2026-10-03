import Link from 'next/link';
import React from 'react';
interface NavData {
    slug: string,
    title:string,
    topicId: string | null,
    url : string,
    scrapable : boolean
}

const Navlinks = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json();
    const navs: NavData[] = data.data
    const filterNavs = navs.filter(n =>  n.scrapable )
    return (
        <div className=" flex gap-3 items-center justify-center mt-2">
            <Link href={'/'}>হোম</Link>
            {
                filterNavs.map((item , ind)=> <Link key={ind} href={`/${item.slug}`}>{item.title}</Link>)
            }
        </div>
    );
};

export default Navlinks;