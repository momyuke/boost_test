import { Input } from "@/components/Input";
import { ButtonStepper } from "@/components/steps/ButtonStepper";
import { CreateBlogContext } from "@/core/context/blog.context";
import { convertFormDataToObject } from "@/core/utils/objectUtils";
import { ICreateBlog } from "@/domains/blog.domain";
import { FormEvent, use } from "react";

export const StepOne = () => {
  const { createBlog, setCreateBlog } = use(CreateBlogContext);

  const onSubmit = (formElement: FormEvent<HTMLFormElement>) => {
    formElement.preventDefault();
    const formData = new FormData(formElement.currentTarget);
    const createBlogData = convertFormDataToObject<ICreateBlog>(formData);
    setCreateBlog((e) => {
      return {
        ...e,
        title: createBlogData.title,
        author: createBlogData.author,
        step: 2,
      };
    });
  };
  return (
    <>
      <h2 className="text-white none font-bold text-2xl">Step 1</h2>
      <form onSubmit={onSubmit} className="min-w-[70%] flex flex-col gap-[1em]">
        <Input
          label="Title"
          placeholder="Enter your blog title here"
          classNames="min-w-[40%]"
          name="title"
          required
          defaultValue={createBlog.title}
        />
        <Input
          label="Author"
          placeholder="Enter your pen/full name here"
          classNames="min-w-[40%]"
          name="author"
          required
          defaultValue={createBlog.author}
        />
        <ButtonStepper />
      </form>
    </>
  );
};
