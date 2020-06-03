import IArticle from "./models/IArticle";
import ICartArticle from "./models/ICartArticle";

export const anArticle = (partialArticle: Partial<IArticle> = {}): IArticle => ({
    id: '1',
    name: 'an Article',
    imgSrc: '/basket.jpg',
    price: {
        value: 48,
        currency: "EUR"
    },
    availableSizes: ['XS', "S", "M", "L", "XL"],
    description: 'a description',
    maxQuantityByCart: 10,
    ...partialArticle
})

export const aCartArticle = (partialCartArticle: Partial<ICartArticle> = {}): ICartArticle => ({
    ...anArticle(),
    size: 'XS',
    quantity: 2,
    ...partialCartArticle
})