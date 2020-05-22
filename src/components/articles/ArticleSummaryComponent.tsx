import React from "react";
import {Button, Card} from "react-bootstrap";
import IArticle from "../../models/IArticle";

export interface IProps {
    article: IArticle
}

const ArticleSummaryComponent: React.FC<IProps> =
    ({article: {name, description, imgSrc}}) => {

        return <Card>
            <Card.Img data-testid='img' variant="top" src={imgSrc}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Add to basket</Button>
            </Card.Body>
        </Card>
    }

export default ArticleSummaryComponent
export type IArticleSummaryComponentProps = IProps
