export const Footer = () => {
    return (
        <footer className="min-w-screen bg-dark-08 font-inter pt-[4em] pb-[4em] pr-[4em] flex flex-col items-end">
            <h1 className="text-dark-40 text-[18px]">© {new Date(Date.now()).getFullYear()} FutureTech. All rights reserved.</h1>
        </footer>
    )
}