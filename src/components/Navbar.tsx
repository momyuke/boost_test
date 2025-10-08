import { Button } from "@/components/Button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className="fixed top-0 z-50 font-sans bg-dark-10 min-w-screen
        px-[4%] py-[20px]
        md:pl-[81px] md:pr-[81px] md:pt-[40px] md:pb-[40px] flex justify-between items-center"
    >
      <Link href={"/"}>
        <h1 className="md:text-2xl hover:cursor-pointer font-bold text-yellow-55">
          Future Blog Tech
        </h1>
      </Link>
      <Link href={"/create-blog"}>
        <Button classNames="bg-yellow-55 rounded-[10px] pl-[10px] pr-[10px] pt-[7px] pb-[7px]">
          Create Blog
        </Button>
      </Link>
    </nav>
  );
};
