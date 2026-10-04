
import Image from 'next/image';
import Link from 'next/link';

interface NewsType {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished?: string;
}

const Mainnews = ({ news }: { news: NewsType[] }) => {
  const [mainNews, ...othersNews] = news;

  // If there is no news
  if (!mainNews) {
    return (
      <div className="text-center py-10">
        <p className="text-base-content/60">No news available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 mx-auto">

      {/* Main News */}
      <div className="lg:col-span-2 card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 rounded-2xl overflow-hidden group">
        <Link href={`/news/${mainNews.id}`}>
          <figure className="relative h-64 sm:h-80 w-full overflow-hidden bg-base-200">
            <Image
              src={mainNews.imageUrl}
              alt={
                mainNews.imageAlt ||
                mainNews.title ||
                'Main news image'
              }
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              priority
            />
          </figure>

          <div className="card-body p-6 gap-3">

            <div>
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-500 bg-red-50 rounded-full">
                {mainNews.category}
              </span>
            </div>

            <h2 className="card-title text-2xl font-bold text-base-content group-hover:text-red-500 transition-colors duration-200 line-clamp-2 leading-snug">
              {mainNews.title}
            </h2>
            <p className="text-sm text-base-content/70 line-clamp-3 leading-relaxed">
              {mainNews.description}
            </p>
          </div>
        </Link>
      </div>

      {/* Top Stories */}
      <div className="flex flex-col divide-y divide-base-200 bg-base-100 p-4 border border-base-200 rounded-2xl shadow-sm">

        <h3 className="text-lg font-bold pb-3 text-base-content border-b border-base-200">
          Top Stories
        </h3>

        <div className="divide-y divide-base-200">

          {othersNews.slice(0, 5).map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.id}`}
              className="block"
            >
              <div className="py-4 first:pt-3 last:pb-0 group/item cursor-pointer">

                <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-50 rounded-full">
                  {post.category}
                </span>

                <h4 className="text-base font-semibold text-base-content group-hover/item:text-red-500 transition-colors duration-200 line-clamp-2 leading-snug">
                  {post.title}
                </h4>

              </div>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Mainnews;

