import IArticle from "./domain/models/IArticle";
import ICartArticle from "./domain/models/ICartArticle";
import IUser from "./domain/models/IUser";
import IBankCard from "./domain/models/IBankCard";

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

export const aUser = (partialUser: Partial<IUser> = {}): IUser => ({
    firstName: 'jeremy',
    lastName: 'tutzo',
    email: 'jt@gmail.com',
    address: 'address',
    ...partialUser
})

export const aBankCard = (partialBankCard: Partial<IBankCard> = {}): IBankCard => ({
    number: '1234',
    expirationDate: '2022-08-02',
    secretCode: '123',
    ...partialBankCard
})