import React from "react";
import {Button, Image} from "react-bootstrap";
import IArticle from "../../models/IArticle";
import {formatPrice} from "../../services/format.service";
import ICartArticle from "../../models/ICartArticle";

interface IProps {
    article: IArticle
    addCartArticle: (cartArticle: ICartArticle) => void
}

const ArticleDetail: React.FC<IProps> = ({article, addCartArticle}) => {
    const {name, imgSrc, description, availableSizes, price} = article
    return <>
        <Image data-testid='img' src={imgSrc}/>
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <div>{description}</div>
        <div>{availableSizes.join(', ')}</div>
        <Button onClick={() => addCartArticle(toCartArticle(article))}>Add on cart</Button>
    </>
}

const toCartArticle = ({id, name, imgSrc, price}: IArticle): ICartArticle => ({
    id,
    name,
    imgSrc,
    price,
    size: 'M'
})

export default ArticleDetail
export type IArticleDetailProps = IProps