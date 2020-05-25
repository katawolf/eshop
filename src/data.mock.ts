import IArticleSummary from "./models/IArticleSummary";

export const anArticle = (partialArticle: Partial<IArticleSummary> = {}): IArticleSummary => ({
    name: 'an Article',
    imgSrc: 'src/image.jpg',
    price: {
        value: 48,
        currency: "EUR"
    },
    ...partialArticle
})