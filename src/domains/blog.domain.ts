export interface IBlog {
    title?: string;
    description?: string;
    content?: string;
    author?: string;
    category?: string;
    publishDate?: Date;
    image?: string;
}


export const blog: IBlog = {
    title: ''
}