"use client";
import { BlogCard } from "@/components/BlogCard";
import { BlogMetaData } from "@/components/BlogMetaData";
import { useBlogsData } from "@/core/hooks/useBlogsData";
import { formatDateToReadable } from "@/core/utils/dateUtils";
import { IBlog } from "@/domains/blog.domain";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { findBlogById } = useBlogsData();
  const blog = findBlogById(slug);

  if (blog == null) {
    return (
      <main className="flex min-h-screen font-sans flex-col justify-center items-center max-w-[1920px] ">
        <h1 className="text-white">Oops no data found</h1>
      </main>
    );
  }

  return (
    <main className="flex pt-20 font-sans flex-col justify-center items-center max-w-[1920px] ">
      <BlogHeroBanner title={blog?.title} />
      <BlogContentWrapper blog={blog} />
      <SimilarNewsSection category={blog.category ?? ""} />
    </main>
  );
}

interface IBlogHeroBanner {
  title?: string;
}
const BlogHeroBanner = ({ title }: IBlogHeroBanner) => {
  return (
    <div className="relative w-full h-100  overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-cover bg-center bg-[url(https://picsum.photos/1920/1080.jpg)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-08/80 to-transparent" />
      <h1 className="absolute bottom-0 p-10 text-white font-bold text-2xl md:text-[52px] w-[100%] text-center">
        {title}
      </h1>
    </div>
  );
};

interface IBlogDescriptionProps {
  summary?: string;
  content?: string;
}
const BlogDescription = ({ summary, content }: IBlogDescriptionProps) => {
  return (
    <div className="flex-8 text-grey-60 text-left text-[18px]/[200%] text-grey-60 text-left text-[18px]">
      <section className=" p-[80px] border-r border-b border-dark-15">
        <p className="">{summary}</p>
      </section>
      <section className=" p-[80px] border-r border-b border-dark-15">
        <p className="">{content}</p>
      </section>
    </div>
  );
};

interface IBlogMetadataSectionProps {
  category?: string;
  publicationDate?: Date;
  author?: string;
}
const BlogMetadataSection = ({
  author,
  category,
  publicationDate,
}: IBlogMetadataSectionProps) => {
  return (
    <section className="flex-3 p-[80px] max-h-[400px] gap-[2em] flex flex-wrap border-b border-dark-15">
      <BlogMetaData
        classNames="h-[50px]"
        description={category ?? ""}
        type="Category"
      />
      <BlogMetaData
        classNames="h-[50px]"
        description={formatDateToReadable(publicationDate)}
        type="Publication Date"
      />
      <BlogMetaData
        classNames="h-[50px]"
        description={author ?? ""}
        type="Author"
      />
    </section>
  );
};

interface ISimilarNewsSectionProps {
  category: string;
}
const SimilarNewsSection = ({ category }: ISimilarNewsSectionProps) => {
  const { getSimilarBlogs } = useBlogsData();

  return (
    <section className="p-[80px] w-[100%] flex flex-col justify-center gap-[2em]">
      <h2 className="text-white text-[28px]">Similar News</h2>
      <div className="flex md:flex-row flex-col md:justify-between gap-[2em]">
        {getSimilarBlogs(category)
          .slice(0, 3)
          .map((e, i) => (
            <BlogCard blog={e} key={i} />
          ))}
      </div>
    </section>
  );
};

interface IBlogContentWrapperProps {
  blog?: IBlog;
}
const BlogContentWrapper = ({ blog }: IBlogContentWrapperProps) => {
  const { author, category, content, publishDate, summary } = blog ?? {};
  return (
    <section className="w-[100%] flex md:flex-row flex-col">
      <BlogDescription summary={summary} content={content} />
      <BlogMetadataSection
        author={author}
        category={category}
        publicationDate={publishDate}
      />
    </section>
  );
};
