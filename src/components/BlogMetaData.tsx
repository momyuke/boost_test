

interface IBlogMetaDataProps {
    type: string;
    description: string;
    classNames?: string;
}
export const BlogMetaData = ({ description, type, classNames }: IBlogMetaDataProps) => {
    return (
        <div className={`${classNames}`}>
            <p className='text-grey-60 text-[18px]'>{type}</p>
            <p className='text-white text-[18px]'>{description}</p>
        </div>
    )
}