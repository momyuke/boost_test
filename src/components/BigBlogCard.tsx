"use client";
import { BlogMetaData } from "@/components/BlogMetaData";
import { formatDateToReadable } from "@/core/utils/dateUtils";
import { IBlog } from "@/domains/blog.domain";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IBigBlogCardProps {
  blog?: IBlog | null;
}
export const BigBlogCard = ({ blog }: IBigBlogCardProps) => {
  const { title, summary, category, publishDate, author } = blog ?? {};
  const router = useRouter();
  const onClick = () => {
    router.push(`/blog/${blog?.id}`);
  };
  return (
    <div
      onClick={onClick}
      className="hover:cursor-pointer flex flex-col items-center md:items-start gap-[1em] border-y border-dark-15 min-h-[427px] py-[40px]"
    >
      <h1 className="text-[40px] text-white">Latest News</h1>
      <div className="flex lg:items-center justify-center lg:gap-[5em]  lg:flex-row flex-col">
        <div className="p-10 md:p-0 flex justify-center">
          <Image
            src={"https://picsum.photos/1920/1080.jpg"}
            width={600}
            height={338}
            alt="Picsum Photo"
            className="rounded-[12px] object-contain h-auto max-w-full"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-[2em] p-5">
          <h2 className="text-white text-[32px]">{title}</h2>
          <p className="text-[20px] text-grey-60 text-justify">{summary}</p>

          <div className="flex gap-[2em] flex-wrap text-white">
            <BlogMetaData description={category ?? ""} type="Category" />
            <BlogMetaData
              description={formatDateToReadable(publishDate)}
              type="Publication Date"
            />
            <BlogMetaData description={author ?? ""} type="Author" />
          </div>
        </div>
      </div>
    </div>
  );
};
