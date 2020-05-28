import React from "react";
import {Card} from "react-bootstrap";
import IArticleSummary from "../../models/IArticleSummary";
import {useHistory} from "react-router-dom";
import {formatPrice} from "../../services/format.service";

export interface IProps {
    article: IArticleSummary
}

const ArticleCard: React.FC<IProps> = ({article: {imgSrc, name, price}}) => {
    const history = useHistory()
    const redirectOnArticle = () => history.push('/article')

    return <Card data-testid={'articleCard'} onClick={redirectOnArticle}>
        <Card.Img data-testid='img' variant="top" src={imgSrc}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Shoes</Card.Text>
            <Card.Text>{formatPrice(price)}</Card.Text>
        </Card.Body>
    </Card>
}

export default ArticleCard
export type IArticleCardProps = IProps
