
import NewsCard from "@/app/component/NewsCurd";

export interface NewsType {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

interface ApiResponse {
    title?: string;
    data: NewsType[];
}

type PageProps = {
    params: Promise<{
        categoryId: string;
    }>;
};

const CategoryPage = async ({ params }: PageProps) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${categoryId}`
    );

    const data: ApiResponse = await res.json();
    const categoryData = data.data;

    return (
        <div>
            {data.title && (
                <h2 className="font-bold text-2xl border-b-2 border-red-700 p-4">
                    {data.title}
                </h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
                {categoryData?.map((post) => (
                    <NewsCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;

