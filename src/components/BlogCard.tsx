import { BlogMetaData } from "@/components/BlogMetaData";
import { Button } from "@/components/Button";
import { formatDateToReadable } from "@/core/utils/dateUtils";
import { IBlog } from "@/domains/blog.domain";
import Image from "next/image";
import Link from "next/link";

interface IBlogCardProps {
  blog: IBlog;
}
export const BlogCard = ({ blog }: IBlogCardProps) => {
  const { title, category, publishDate, author, id } = blog;

  return (
    <div className="flex-1 min-w-[400px] max-w-[400px] h-[550px] flex flex-col gap-[1em]">
      <Image
        src={"https://picsum.photos/1920/1080.jpg"}
        width={400}
        height={225}
        alt="Picsum Photo"
        className="rounded-[12px]"
      />

      <div className="w-[100%] flex flex-col gap-[1em] flex-1">
        <h3 className="text-[20px] text-white font-bold ">{title}</h3>
        <div className="flex md:flex-row flex-col md:justify-between gap-[1em] md:flex-wrap">
          <BlogMetaData description={category ?? ""} type="Category" />
          <BlogMetaData
            description={formatDateToReadable(publishDate)}
            type="Publication Date"
          />
          <BlogMetaData description={author ?? ""} type="Author" />
        </div>
      </div>

      <Link href={`/blog/${id}`}>
        <Button classNames="w-[100%] bg-dark-08 hover:bg-dark-10 hover:text-dark- py-[18px] px[24px] text-grey-60 border-dark-15 border rounded-[12px] ">
          Read more
        </Button>
      </Link>
    </div>
  );
};
