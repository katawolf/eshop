import React from "react";
import {Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {formatPrice} from "../../services/format.service";
import IArticle from "../../models/IArticle";

export interface IProps {
    article: IArticle
}

const ArticleCard: React.FC<IProps> = ({article: {id, imgSrc, name, price}}) => {
    const history = useHistory()
    const redirectOnArticle = () => history.push(`/article/${id}`)

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
