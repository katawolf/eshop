import IArticle from "./models/IArticle";

export const anArticle = (partialArticle: Partial<IArticle> = {}): IArticle => ({
    name: 'an Article',
    imgSrc: 'src/image.jpg',
    description: 'Some quick example text to build on the card title and make up the bulk of\n the card\'s content.',
    ...partialArticle
})