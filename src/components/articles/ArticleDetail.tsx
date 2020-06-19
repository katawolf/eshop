import React, {useEffect, useState} from "react";
import {Button, Form, Image} from "react-bootstrap";
import IArticle from "../../models/IArticle";
import {formatPrice} from "../../services/format.service";
import ICartArticle from "../../models/ICartArticle";
import Size from "../../models/Size";

interface IProps {
    addCartArticleError?: string
    article: IArticle
    addCartArticle: (cartArticle: ICartArticle) => void
    cleanAddCartArticleError: () => void
}

const ArticleDetail: React.FC<IProps> = ({article, addCartArticle, addCartArticleError, cleanAddCartArticleError}) => {
    const {name, imgSrc, description, availableSizes, price} = article
    const [sizeSelected, setSizeSelected] = useState(undefined as Size | undefined)
    const [displaySizeError, setDisplaySizeError] = useState(false)
    const addOnCart = (article: IArticle) => {
        cleanAddCartArticleError()
        setDisplaySizeError(!sizeSelected)
        if (sizeSelected) addCartArticle(toCartArticle(article, sizeSelected))
    }
    useEffect(() => cleanAddCartArticleError, [cleanAddCartArticleError])

    return <div data-testid={'articleDetail'}>
        {displaySizeError && <div>{'Please select a size'}</div>}
        {addCartArticleError && <div>{addCartArticleError}</div>}
        <Image data-testid='img' src={imgSrc}/>
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <div>{description}</div>
        <Form.Control data-testid={'sizeSelect'} as="select"
                      onChange={(event: any) => setSizeSelected(event.target.value)}>
            <option key={-1} value=''>Select available size</option>
            {availableSizes.map((size, index) => <option key={index}>{size}</option>)}
        </Form.Control>
        <Button onClick={() => addOnCart(article)}>Add on cart</Button>
    </div>
}

const toCartArticle = ({id, name, imgSrc, price, description, availableSizes, maxQuantityByCart}: IArticle, size: Size): ICartArticle => ({
    id,
    name,
    imgSrc,
    price,
    description,
    availableSizes,
    maxQuantityByCart,
    size,
    quantity: 1
})

export default ArticleDetail
export type IArticleDetailProps = IProps