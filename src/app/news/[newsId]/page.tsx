import Image from "next/image";

type PageProps = {
    params: Promise<{
        newsId: string;
    }>;
};

const NewsDetails = async ({ params }: PageProps) => {
    const { newsId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();
    const news = data.data;

    if (!news) {
        return <div className="p-10 text-center text-gray-500">সংবাদ পাওয়া যায়নি!</div>;
    }

    return (
        <main className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-900 font-sans">
            {/* 1. Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug tracking-tight mb-3 text-gray-900">
                {news.title}
            </h1>

            {/* 2. Sub-title / Short Description */}
            {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text && (
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5">
                    {news.description.blocks[0].model.blocks[0].model.text}
                </p>
            )}

            {/* 3. Author, Date & Word Count */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-gray-500 pb-3 mb-6 border-b border-gray-200">
                {news.byline?.map((b: any, index: number) => (
                    <span key={index} className="font-medium text-gray-700">
                        {b.name}{index < news.byline.length - 1 ? " ও " : ""}
                    </span>
                ))}
                <span>{news.firstPublished}</span>
                {news.wordCount && <span>{news.wordCount} শব্দ</span>}
            </div>

            {/* 4. Body Content */}
            <div className="space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed">
                {news.body?.map((item: any, index: number) => {
                    if (item.type === "text") {
                        return (
                            <p key={index} className="whitespace-pre-line leading-8">
                                {item.text}
                            </p>
                        );
                    }

                    if (item.type === "subheading") {
                        return (
                            <h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 pt-4 pb-1">
                                {item.text}
                            </h2>
                        );
                    }

                    if (item.type === "image") {
                        return (
                            <figure key={index} className="my-6">
                                <div className="relative w-full h-[220px] sm:h-[360px] md:h-[420px] overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        src={item.url}
                                        alt={item.altText || news.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {item.caption && (
                                    <figcaption className="text-xs sm:text-sm text-gray-500 mt-2">
                                        {item.caption} {item.copyrightHolder && `(${item.copyrightHolder})`}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    return null;
                })}
            </div>

            {/* 5. Tags Section (একদম শেষে ছবির মতো দেখতে) */}
            {news.tags?.length > 0 && (
                <div className="mt-10 pt-6 flex flex-wrap gap-2.5">
                    {news.tags.map((tag: string, index: number) => (
                        <span
                            key={index}
                            className="bg-[#f4f4f5] text-gray-700 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </main>
    );
};

export default NewsDetails;