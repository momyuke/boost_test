"use client";
import { Modal } from "@/components/Modal";
import { StepFour } from "@/components/steps/StepFour";
import { StepOne } from "@/components/steps/StepOne";
import { StepThree } from "@/components/steps/StepThree";
import { StepTwo } from "@/components/steps/StepTwo";
import { CreateBlogContext } from "@/core/context/blog.context";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen min-w-screen font-sans pt-[200px] flex-col justify-center gap-5 items-center max-w-[1920px] ">
      <h1 className="text-2xl font-bold text-white">Create your blog!</h1>
      <Steps />
    </main>
  );
}

const Steps = () => {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/");
  };
  const { createBlog } = use(CreateBlogContext);
  return (
    <section className="min-w-[70%] min-h-[600px] py-10 gap-[2em] bg-dark-15 rounded-xl flex flex-col items-center justify-center">
      {(createBlog.step == 1 || createBlog.step == undefined) && <StepOne />}
      {createBlog.step == 2 && <StepTwo />}
      {createBlog.step == 3 && <StepThree />}
      {createBlog.step == 4 && <StepFour />}

      <Modal modalKey="success" onClose={onSuccess}>
        <div className="p-5 pt-10 min-w-[400px]">
          <h1 className="text-2xl">
            Your blog has been published successfully
          </h1>
        </div>
      </Modal>
    </section>
  );
};
