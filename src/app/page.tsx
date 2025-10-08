import { BigBlogCard } from "@/components/BigBlogCard";
import { BlogCard } from "@/components/BlogCard";

export default function Home() {
  return (
    <div className="max-w-[1920px]">
      <main className="flex flex-col md:pr-20 md:pl-20">
        <section className="font-inter min-h-[400px] flex flex-col justify-center">
          <h1 className="text-[80px] text-white">Today's Headlines: Stay</h1>
          <div className="flex gap-[2em] items-center">
            <h1 className="text-[80px] text-white">Informed</h1>
            <p className="text-justify text-[18px] text-grey-60">Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
          </div>
        </section>

        <BigBlogCard />

        <div className="flex md:flex-row flex-col md:justify-between md:pt-[5em] md:pb-[5em]">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </main>
    </div>
  );
}
