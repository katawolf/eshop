import React, {useEffect, useState} from "react";
import {Button, Card, CardDeck} from "react-bootstrap";
import {getArticles} from "../../services/article.service";
import IArticle from "../../models/IArticle";

const testId = 'ArticlesComponent'

const ArticlesComponent: React.FC = () => {

    const [articles, setArticles] = useState([] as IArticle[])

    useEffect(() => {
        getArticles().then(setArticles);
    }, [])

    return <div data-testid={testId}>
        <CardDeck>
            {articles.map(({name, description, imgSrc}) => <div key={name}>
                <Card>
                    <Card.Img variant="top" src={imgSrc} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button variant="primary">Add to basket</Button>
                    </Card.Body>
                </Card>
            </div>)}
        </CardDeck>
    </div>
}

export default ArticlesComponent
