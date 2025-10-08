"use client";
import { Dropdown } from "@/components/Dropdown";
import { Input, TextArea } from "@/components/Input";
import { ButtonStepper } from "@/components/steps/ButtonStepper";
import { BlogsContext, CreateBlogContext } from "@/core/context/blog.context";
import { useModalData } from "@/core/hooks/useModalData";
import { blogCategories, IBlog } from "@/domains/blog.domain";
import { FormEvent, use } from "react";

export const StepFour = () => {
  const { createBlog, setCreateBlog } = use(CreateBlogContext);
  const { setBlogs } = use(BlogsContext);
  const { title, author, category, content, summary } = createBlog;
  const { openModal } = useModalData({ modalKey: "success" });
  const onSubmit = (formElement: FormEvent<HTMLFormElement>) => {
    formElement.preventDefault();
    const newData = {
      ...createBlog,
      publishDate: new Date(Date.now()),
      id: crypto.randomUUID(),
    } as IBlog;
    setBlogs((e) => [newData, ...e]);
    setCreateBlog((_) => {
      return { step: 1 };
    });
    openModal();
  };

  return (
    <>
      <h2 className="text-white none font-bold text-2xl">
        Last Step! Review Your Submission
      </h2>
      <form onSubmit={onSubmit} className="min-w-[70%] flex flex-col gap-[1em]">
        <Input
          defaultValue={title}
          label="Title"
          placeholder="Enter your blog title here"
          classNames="min-w-[40%]"
          name="title"
          required
          readOnly
        />
        <Input
          defaultValue={author}
          label="Author"
          placeholder="Enter your pen/full name here"
          classNames="min-w-[40%]"
          name="author"
          required
          readOnly
        />

        <TextArea
          defaultValue={summary}
          label="Summary"
          placeholder="Enter your blog summary here"
          name="summary"
          inputClassNames="min-h-[150px]"
          readOnly
        />

        <Dropdown
          readonly
          defaultValue={category}
          data={blogCategories}
          name="category"
          label="Category"
        />

        <TextArea
          required
          defaultValue={content}
          label="Content"
          placeholder="Enter your blog content here"
          name="content"
          inputClassNames="min-h-[400px]"
        />

        <ButtonStepper />
      </form>
    </>
  );
};
