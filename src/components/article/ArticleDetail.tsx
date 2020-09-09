import React, {useEffect} from "react";
import {Button, Image} from "react-bootstrap";
import IArticle from "../../domain/models/IArticle";
import {formatPrice} from "../../domain/services/format.service";
import ICartArticle from "../../domain/models/ICartArticle";

interface IProps {
    cartError?: string
    article: IArticle
    addCartArticle: (cartArticle: ICartArticle) => void
    cleanCartError: () => void
}

const ArticleDetail: React.FC<IProps> = ({article, addCartArticle, cartError, cleanCartError}) => {
    const {name, imgSrc, description, price} = article

    useEffect(() => cleanCartError, [cleanCartError])

    return <div data-testid={'article-detail'}>
        {cartError && <div>{cartError}</div>}
        <Image data-testid='img' src={imgSrc}/>
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <div>{description}</div>
        <Button onClick={() => addCartArticle(toCartArticle(article))}>Add on cart</Button>
    </div>
}

const toCartArticle = ({id, name, imgSrc, price, description, maxQuantityByCart}: IArticle): ICartArticle => ({
    id,
    name,
    imgSrc,
    price,
    description,
    maxQuantityByCart,
    quantity: 1
})

export default ArticleDetail
export type IArticleDetailProps = IProps