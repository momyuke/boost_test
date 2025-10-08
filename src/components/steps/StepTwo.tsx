import { Dropdown } from "@/components/Dropdown";
import { TextArea } from "@/components/Input";
import { ButtonStepper } from "@/components/steps/ButtonStepper";
import { CreateBlogContext } from "@/core/context/blog.context";
import { convertFormDataToObject } from "@/core/utils/objectUtils";
import { blogCategories, ICreateBlog } from "@/domains/blog.domain";
import { FormEvent, use } from "react";

export const StepTwo = () => {
  const { createBlog, setCreateBlog } = use(CreateBlogContext);

  const onSubmit = (formElement: FormEvent<HTMLFormElement>) => {
    formElement.preventDefault();
    const formData = new FormData(formElement.currentTarget);
    const createBlogData = convertFormDataToObject<ICreateBlog>(formData);
    console.log(createBlogData);
    setCreateBlog((e) => {
      return {
        ...e,
        category: createBlogData.category,
        summary: createBlogData.summary,
        step: 3,
      };
    });
  };

  return (
    <>
      <h2 className="text-white font-bold text-2xl">Step 2</h2>
      <form onSubmit={onSubmit} className="min-w-[70%] flex flex-col gap-[2em]">
        <TextArea
          label="Summary"
          placeholder="Enter your blog summary here"
          name="summary"
          required
          defaultValue={createBlog.summary}
          inputClassNames="min-h-[150px]"
        />

        <Dropdown
          data={blogCategories}
          name="category"
          label="Category"
          required
          defaultValue={createBlog.category ?? "Select your blog category"}
        />

        <ButtonStepper />
      </form>
    </>
  );
};
