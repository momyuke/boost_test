import { TextArea } from "@/components/Input";
import { ButtonStepper } from "@/components/steps/ButtonStepper";
import { CreateBlogContext } from "@/core/context/blog.context";
import { convertFormDataToObject } from "@/core/utils/objectUtils";
import { ICreateBlog } from "@/domains/blog.domain";
import { FormEvent, use } from "react";

export const StepThree = () => {
  const { createBlog, setCreateBlog } = use(CreateBlogContext);

  const onSubmit = (formElement: FormEvent<HTMLFormElement>) => {
    formElement.preventDefault();
    const formData = new FormData(formElement.currentTarget);
    const createBlogData = convertFormDataToObject<ICreateBlog>(formData);
    setCreateBlog((e) => {
      return {
        ...e,
        content: createBlogData.content,
        step: 4,
      };
    });
  };

  return (
    <>
      <h2 className="text-white font-bold text-2xl">Step 3</h2>
      <form onSubmit={onSubmit} className="min-w-[70%] flex flex-col gap-[2em]">
        <TextArea
          required
          label="Content"
          defaultValue={createBlog.content}
          placeholder="Enter your blog content here"
          name="content"
          inputClassNames="min-h-[400px]"
        />

        <ButtonStepper />
      </form>
    </>
  );
};
