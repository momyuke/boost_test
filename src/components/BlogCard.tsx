import { BlogMetaData } from "@/components/BlogMetaData";
import { Button } from "@/components/Button";
import Image from "next/image";

export const BlogCard = () => {
  return (
    <div className=" flex flex-col gap-[1em]">
      <Image
        src={"https://picsum.photos/1920/1080.jpg"}
        width={400}
        height={225}
        alt="Picsum Photo"
        className="rounded-[12px]"
      />

      <h3 className="text-[20px] text-white font-bold ">
        A Decisive Victory for Progressive Policies
      </h3>
      <div className="flex md:flex-row flex-col md:justify-between">
        <BlogMetaData description="Environment" type="Category" />
        <BlogMetaData description="October 02, 2025" type="Publication Date" />
        <BlogMetaData description="Jane Smith" type="Author" />
      </div>

      <Button classNames="bg-dark-08 hover:bg-dark-10 hover:text-dark- py-[18px] px[24px] text-grey-60 border-dark-15 border rounded-[12px]">
        Read more
      </Button>
    </div>
  );
};
