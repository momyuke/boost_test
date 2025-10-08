'use client'

import { IBlog } from "@/domains/blog.domain";
import { createContext, ReactNode, useState } from "react";

type TBlogsContext = {
    blogs: IBlog[],
    setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>
}

type TSelectedBlogContext = {
    selectedBlog: IBlog,
    setSelectedBlog: React.Dispatch<React.SetStateAction<IBlog>>
}

type TCreateBlogContext = {
    createBlog: IBlog,
    setCreateBlog: React.Dispatch<React.SetStateAction<IBlog>>
}


export const BlogsContext = createContext<TBlogsContext>({
    blogs: [],
    setBlogs: () => [],
})

export const SelectedBlogContext = createContext<TSelectedBlogContext>({
    selectedBlog: {},
    setSelectedBlog: () => { },
})

export const CreateBlogContext = createContext<TCreateBlogContext>({
    createBlog: {},
    setCreateBlog: () => { },
})

interface IBlogProviderProps {
    children: ReactNode;
}

export function BlogProvider({ children }: IBlogProviderProps) {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<IBlog>({});
    const [createBlog, setCreateBlog] = useState<IBlog>({});

    return (
        <BlogsContext value={{ blogs, setBlogs }}>
            <SelectedBlogContext value={{ selectedBlog, setSelectedBlog }}>
                <CreateBlogContext value={{ createBlog, setCreateBlog }}>
                    {children}
                </CreateBlogContext>
            </SelectedBlogContext>
        </BlogsContext>
    )
}