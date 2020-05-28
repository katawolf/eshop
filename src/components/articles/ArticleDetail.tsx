import React from "react";
import {Button, Image} from "react-bootstrap";
import IArticle from "../../models/IArticle";
import {formatPrice} from "../../services/format.service";

interface IProps {
    article: IArticle
    addOnCart: (article: IArticle) => void
}

const ArticleDetail: React.FC<IProps> = ({article, addOnCart}) => {
    const {name, imgSrc, description, availableSizes, price} = article
    return <>
        <Image data-testid='img' src={imgSrc}/>
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <div>{description}</div>
        <div>{availableSizes.join(', ')}</div>
        <Button onClick={() => addOnCart(article)}>Add on cart</Button>
    </>
}

export default ArticleDetail
export type IArticleDetailProps = IProps