import IArticleSummary from "./models/IArticleSummary";
import IArticle from "./models/IArticle";

export const anArticleSummary = (partialArticle: Partial<IArticleSummary> = {}): IArticleSummary => ({
    name: 'an Article',
    imgSrc: '/basket.jpg',
    price: {
        value: 48,
        currency: "EUR"
    },
    ...partialArticle
})

export const anArticle = (partialArticle: Partial<IArticle> = {}): IArticle => ({
    ...anArticleSummary(),
    availableSizes: ['XS', "S", "M", "L", "XL"],
    description: 'a description',
    ...partialArticle
})