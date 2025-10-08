import { BlogCard } from "@/components/BlogCard";
import { BlogMetaData } from "@/components/BlogMetaData";

export default function Page() {
  return (
    <main className="flex font-sans flex-col justify-center items-center max-w-[1920px]">
      <BlogHeroBanner />
      <BlogContentWrapper />
    </main>
  );
}

const BlogHeroBanner = () => {
  return (
    <div className="relative w-full h-100  overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-cover bg-center bg-[url(https://picsum.photos/1920/1080.jpg)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-08/80 to-transparent" />
      <h1 className="absolute bottom-0 p-10 text-white font-bold text-2xl md:text-[52px] w-[100%] text-center">
        The Rise of Artificial Intelligence in Healthcare
      </h1>
    </div>
  );
};

interface IBlogDescriptionProps {
  description: string;
}
const BlogDescription = ({ description }: IBlogDescriptionProps) => {
  return (
    <div className="flex-8 text-grey-60 text-left text-[18px]/[200%] text-grey-60 text-left text-[18px]">
      <section className=" p-[80px] border-r border-b border-dark-15">
        <p className="">{description}</p>
      </section>
      <section className=" p-[80px] border-r border-b border-dark-15">
        <p className="">{description}</p>
      </section>
    </div>
  );
};

const BlogMetadataSection = () => {
  return (
    <section className="flex-3 p-[80px] max-h-[400px] gap-[2em] flex flex-wrap border-b border-dark-15">
      <BlogMetaData
        classNames="h-[50px]"
        description="Environment"
        type="Category"
      />
      <BlogMetaData
        classNames="h-[50px]"
        description="October 02, 2025"
        type="Publication Date"
      />
      <BlogMetaData
        classNames="h-[50px]"
        description="Jane Smith"
        type="Author"
      />
    </section>
  );
};

const SimilarNewsSection = () => {
  return (
    <section className="p-[80px] flex flex-col justify-center gap-[2em]">
      <h2 className="text-white text-[28px]">Similar News</h2>
      <div className="flex md:flex-row flex-col md:justify-between gap-[2em]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

const BlogContentWrapper = () => {
  return (
    <section>
      <div className="w-[100%] flex md:flex-row flex-col">
        <BlogDescription description="Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology." />
        <BlogMetadataSection />
      </div>
      <SimilarNewsSection />
    </section>
  );
};
