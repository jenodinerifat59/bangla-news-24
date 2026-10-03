import Image from "next/image";

interface Post {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

const NewsCard = ({ post }: { post: Post }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-sky-100/80 bg-base-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5">
      {/* Image Container */}
      <figure className="relative h-60 w-full overflow-hidden bg-base-200 sm:h-72">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt || post.title || "Main news image"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority
        />
        {/* Subtle overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </figure>

      {/* Card Body */}
      <div className="card-body flex flex-1 flex-col justify-between p-6 gap-3">
        <div className="space-y-2.5">
          <h2 className="card-title text-xl sm:text-2xl font-bold tracking-tight text-base-content transition-colors duration-200 group-hover:text-sky-600 line-clamp-2 leading-snug cursor-pointer">
            {post.title}
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-base-content/75 line-clamp-3 font-normal">
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;