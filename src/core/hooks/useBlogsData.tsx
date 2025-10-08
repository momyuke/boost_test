import { BlogsContext } from "@/core/context/blog.context";
import { PaginationContext } from "@/core/context/pagination.context";
import { IBlog } from "@/domains/blog.domain";
import {
  defaultPagination,
  IPagination,
  PaginationKeys,
} from "@/domains/pagination.domain";
import { use, useCallback } from "react";

export const useBlogsData = () => {
  const { blogs } = use(BlogsContext);
  const { paginations } = use(PaginationContext);
  const { page = defaultPagination.page, perPage = defaultPagination.perPage } =
    (paginations[PaginationKeys.BLOGS] ?? {}) as IPagination;

  const getBlogsByPagination = useCallback(() => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return blogs.slice(startIndex, endIndex);
  }, [page]);

  const getLatestBlog = (): IBlog | null => {
    return blogs.reduce((latest, blog) => {
      if (!blog.publishDate) return latest;
      if (!latest || !latest.publishDate) return blog;
      return blog.publishDate > latest.publishDate ? blog : latest;
    }, null as IBlog | null);
  };

  const getSimilarBlogs = (category: string): IBlog[] => {
    return blogs.filter((e) => e.category === category);
  };

  const findBlogById = (id: string): IBlog | undefined => {
    return blogs.find((blog) => blog.id === id);
  };

  return { getLatestBlog, findBlogById, getBlogsByPagination, getSimilarBlogs };
};
