import React, {useState} from "react";
import {Button, Form, Image} from "react-bootstrap";
import IArticle from "../../models/IArticle";
import {formatPrice} from "../../services/format.service";
import ICartArticle from "../../models/ICartArticle";
import Size from "../../models/Size";

interface IProps {
    article: IArticle
    addCartArticle: (cartArticle: ICartArticle) => void
}

const ArticleDetail: React.FC<IProps> = ({article, addCartArticle}) => {
    const {name, imgSrc, description, availableSizes, price} = article
    const [sizeSelected, setSizeSelected] = useState(undefined as Size | undefined)
    const [errorMsg, setErrorMsg] = useState(undefined as string | undefined)
    const addOnCart = (article: IArticle) => {
        if (!sizeSelected) {
            setErrorMsg('Please select a size')
        } else {
            setErrorMsg(undefined)
            addCartArticle(toCartArticle(article, sizeSelected))
        }
    }
    return <div data-testid={'articleDetail'}>
        {errorMsg && <div>{errorMsg}</div>}
        <Image data-testid='img' src={imgSrc}/>
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <div>{description}</div>
        <Form.Control data-testid={'select'} as="select" onChange={(event: any) => setSizeSelected(event.target.value)}>
            <option key={-1} value=''>Select available size</option>
            {availableSizes.map((size, index) => <option key={index}>{size}</option>)}
        </Form.Control>
        <Button onClick={() => addOnCart(article)}>Add on cart</Button>
    </div>
}

const toCartArticle = ({id, name, imgSrc, price}: IArticle, size: Size): ICartArticle => ({
    id,
    name,
    imgSrc,
    price,
    size,
    quantity: 1
})

export default ArticleDetail
export type IArticleDetailProps = IProps