import React from "react";
import {Button, Card} from "react-bootstrap";
import IArticleSummary from "../../models/IArticleSummary";
import IPrice from "../../models/IPrice";

export interface IProps {
    article: IArticleSummary
    cartArticles: IArticleSummary[]
    addToCart: (article: IArticleSummary) => void
    removeToCart: (article: IArticleSummary) => void
}

const ArticleCard: React.FC<IProps> = ({article, cartArticles, addToCart, removeToCart}) => {

    return <Card>
        <Card.Img data-testid='img' variant="top" src={article.imgSrc}/>
        <Card.Body>
            <Card.Title>{article.name}</Card.Title>
            <Card.Text>{formatPrice(article.price)}</Card.Text>
            {
                articleIsOnCart(article, cartArticles)
                    ?
                    <Button data-testid='removeToCardButton' variant="primary" onClick={() => removeToCart(article)}>
                        Remove to cart
                    </Button>
                    :
                    <Button data-testid='addToCardButton' variant="primary" onClick={() => addToCart(article)}>
                        Add to cart
                    </Button>
            }
        </Card.Body>
    </Card>
}

const articleIsOnCart = ({name}: IArticleSummary, cartArticles: IArticleSummary[]) => !!cartArticles.find(({name: it}: IArticleSummary) => name === it)

const formatPrice = ({value}: IPrice) => `${value} €`

export default ArticleCard
export type IArticleCardProps = IProps
