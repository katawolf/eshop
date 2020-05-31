import IArticleSummary from "./models/IArticleSummary";
import IArticle from "./models/IArticle";
import ICartArticle from "./models/ICartArticle";

export const anArticleSummary = (partialArticle: Partial<IArticleSummary> = {}): IArticleSummary => ({
    id: '1',
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

export const aCartArticle = (partialCartArticle: Partial<ICartArticle> = {}): ICartArticle => ({
    ...anArticleSummary(),
    size: 'XS',
    quantity: 2,
    ...partialCartArticle
})