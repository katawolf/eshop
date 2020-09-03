import React, {useEffect, useState} from "react";
import {Button, Form, Image} from "react-bootstrap";
import IArticle from "../../domain/models/IArticle";
import {formatPrice} from "../../domain/services/format.service";
import ICartArticle from "../../domain/models/ICartArticle";
import Size from "../../domain/models/Size";

interface IProps {
    cartError?: string
    article: IArticle
    addCartArticle: (cartArticle: ICartArticle) => void
    cleanCartError: () => void
}

const ArticleDetail: React.FC<IProps> = ({article, addCartArticle, cartError, cleanCartError}) => {
    const {name, imgSrc, description, availableSizes, price} = article
    const [sizeSelected, setSizeSelected] = useState(undefined as Size | undefined)
    const [displaySizeError, setDisplaySizeError] = useState(false)
    const addOnCart = (article: IArticle) => {
        setDisplaySizeError(!sizeSelected)
        if (sizeSelected) addCartArticle(toCartArticle(article, sizeSelected))
    }

    useEffect(() => cleanCartError, [cleanCartError])

    const selectSizeRender = () =>
        <Form.Control data-testid={'size-select'} as="select"
                      onChange={(event: any) => setSizeSelected(event.target.value)}>
            <option key={-1} value=''>Select available size</option>
            {availableSizes.map((size, index) => <option key={index}>{size}</option>)}
        </Form.Control>

    return <div data-testid={'article-detail'}>
        {displaySizeError && <div>{'Please select a size'}</div>}
        {cartError && <div>{cartError}</div>}
        <Image data-testid='img' src={imgSrc}/>
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <div>{description}</div>
        {selectSizeRender()}
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