import React from "react";
import {Button, Card} from "react-bootstrap";
import IArticle from "../../models/IArticle";

export interface IProps {
    article: IArticle
    cartArticles: IArticle[]
}

const ArticleSummaryComponent: React.FC<IProps> = ({article: {name, description, imgSrc}, cartArticles}) => {

    return <Card>
        <Card.Img data-testid='img' variant="top" src={imgSrc}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {
                articleIsOnCart(name, cartArticles)
                    ? <Button variant="primary">Remove to cart</Button>
                    : <Button variant="primary">Add to cart</Button>
            }
        </Card.Body>
    </Card>
}

const articleIsOnCart = (articleName: string, cartArticles: IArticle[]) => !!cartArticles.find(({name}: IArticle) => articleName === name)

export default ArticleSummaryComponent
export type IArticleSummaryComponentProps = IProps
