import { Button } from "@/components/Button"

export const Navbar = () => {
    return (
        <nav className="font-inter bg-dark-10 min-w-screen
        pl-[61px] pr-[61px] pt-[20px] pb-[20px]
        md:pl-[81px] md:pr-[81px] md:pt-[40px] md:pb-[40px] flex justify-between items-center">
            <h1 className="md:text-2xl font-bold text-yellow-55">Future Blog Tech</h1>
            <Button classNames="bg-yellow-55 rounded-[10px] pl-[10px] pr-[10px] pt-[7px] pb-[7px]">Create Blog</Button>
        </nav>
    )
}