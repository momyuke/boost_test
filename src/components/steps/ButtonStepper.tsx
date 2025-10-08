import { Button } from "@/components/Button";
import { CreateBlogContext } from "@/core/context/blog.context";
import { use } from "react";

export const ButtonStepper = () => {
  const { createBlog, setCreateBlog } = use(CreateBlogContext);
  const { step = 0 } = createBlog;

  const onBack = () => {
    setCreateBlog((e) => {
      return {
        ...e,
        step: (e.step ?? 2) - 1,
      };
    });
  };

  return (
    <div className="flex gap-[1em] justify-between">
      {step > 1 && (
        <Button
          onClick={onBack}
          classNames="bg-dark-40 text-white p-3 flex-1 text-lg font-bold rounded-xl"
        >
          Back
        </Button>
      )}
      {step < 4 && (
        <Button
          type="submit"
          classNames="bg-yellow-55 p-3 flex-1 text-lg font-bold rounded-xl"
        >
          Next
        </Button>
      )}

      {step == 4 && (
        <Button
          type="submit"
          classNames="bg-yellow-55 p-3 flex-1 text-lg font-bold rounded-xl"
        >
          Submit
        </Button>
      )}
    </div>
  );
};
