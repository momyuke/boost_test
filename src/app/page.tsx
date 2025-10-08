"use client";
import { BigBlogCard } from "@/components/BigBlogCard";
import { BlogCard } from "@/components/BlogCard";
import { Pagination } from "@/components/Paginations";
import { BlogsContext } from "@/core/context/blog.context";
import { useBlogsData } from "@/core/hooks/useBlogsData";
import { PaginationKeys } from "@/domains/pagination.domain";
import { use } from "react";

export default function Home() {
  const { blogs } = use(BlogsContext);
  const { getLatestBlog, getBlogsByPagination } = useBlogsData();
  const paginatedBlogs = getBlogsByPagination();

  return (
    <div className=" flex flex-col justify-center md:items-left items-center">
      <main className="flex flex-col pt-20 md:pr-20 md:pl-20">
        <section className="font-sans min-h-[500px] md:items-start p-5 flex flex-col justify-center">
          <h1 className="text-[40px] lg:text-[80px] text-white">
            Today's Headlines: Stay
            <span className="text-[40px] lg:text-[80px] lg:hidden text-white">
              Informed
            </span>
          </h1>
          <div className="flex md:flex-row flex-col gap-[2em] items-center  ">
            <h1 className="text-[80px] text-white hidden lg:block">Informed</h1>
            <p className="text-justify text-[18px] text-grey-60">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </section>

        <BigBlogCard blog={getLatestBlog()} />

        <div className="flex p-5 md:flex-row md:flex-wrap gap-[1em] items-center justify-evenly  flex-col md:py-[5em] lg:gap-[2em]">
          {paginatedBlogs.map((e, i) => {
            return <BlogCard key={i} blog={e} />;
          })}
        </div>

        <Pagination
          paginationKey={PaginationKeys.BLOGS}
          totalData={blogs.length}
        />
      </main>
    </div>
  );
}
