import Link from 'next/link';
interface MostUseData{
    id : string;
    title : string;
}
const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const news: MostUseData[] = data.data;
    console.log(news)
    return (
        <div className= " card  border border-gray-100 mt-7 p-2 ">
            <h2 className=" font-bold text-red-500 text-lg ">সর্বাধিক পঠিত</h2>
            <div className='grid gap-3'>
                {
                    news.map((post, ind)=>
                       <Link href={`/news/${post.id}`}>
                        <div className='flex gap-2' key={post.id}>
                         <span className='font-bold text-red-500 '>{ind + 1}</span>
                         <p className = "hover:text-red-500">{post.title}</p>
                       </div>
                       </Link>
                    )
                }
            </div>
        </div>
    );
};

export default MostRead;