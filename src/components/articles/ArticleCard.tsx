import React from "react";
import {Button, Card} from "react-bootstrap";
import IArticle from "../../models/IArticle";

export interface IProps {
    article: IArticle
    cartArticles: IArticle[]
    addToCart: (article: IArticle) => void
    removeToCart: (article: IArticle) => void
}

const ArticleCard: React.FC<IProps> = ({article, cartArticles, addToCart, removeToCart}) => {

    return <Card>
        <Card.Img data-testid='img' variant="top" src={article.imgSrc}/>
        <Card.Body>
            <Card.Title>{article.name}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
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

const articleIsOnCart = ({name}: IArticle, cartArticles: IArticle[]) => !!cartArticles.find(({name: it}: IArticle) => name === it)

export default ArticleCard
export type IArticleCardProps = IProps
