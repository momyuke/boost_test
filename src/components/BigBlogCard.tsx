import { BlogMetaData } from '@/components/BlogMetaData';
import Image from 'next/image';

export const BigBlogCard = () => {
    return (
        <div className="flex md:items-center border-y border-dark-15  md:gap-[5em] md:flex-row flex-col min-h-[427px] pt-[40px] pb-[40px]">
            <Image src={'https://picsum.photos/1920/1080.jpg'} width={600} height={338} alt='Picsum Photo' className='rounded-[12px]' />
            <div className='flex flex-col gap-[2em]'>
                <h2 className='text-white text-[32px]'>Global Climate Summit Addresses Urgent Climate Action</h2>
                <p className='text-[20px] text-grey-60 text-justify'>World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</p>

                <div className='flex gap-[2em] text-white'>
                    <BlogMetaData description='Environment' type='Category' />
                    <BlogMetaData description='October 02, 2025' type='Publication Date' />
                    <BlogMetaData description='Jane Smith' type='Author' />
                </div>
            </div>
        </div>
    )
}
