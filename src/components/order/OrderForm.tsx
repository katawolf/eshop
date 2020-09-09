import React, {useState} from "react";
import BankCardForm from "../payment/BankCardForm";
import UserForm from "../user/UserForm";
import {Button} from "react-bootstrap";
import IUser, {emptyUser} from "../../domain/models/IUser";
import IBankCard, {emptyBankCard} from "../../domain/models/IBankCard";
import ICartArticle from "../../domain/models/ICartArticle";
import {useHistory} from "react-router-dom";

interface IProps {
    cartArticles: ICartArticle[]
    createOrder: (cartArticles: ICartArticle[], user: IUser, bankCard: IBankCard) => Promise<String>
    resetCart: () => void
}

const OrderForm: React.FC<IProps> = ({cartArticles, createOrder, resetCart}) => {
    const [user, setUser] = useState(emptyUser())
    const [bankCard, setBankCard] = useState(emptyBankCard())
    const [error, setError] = useState(undefined)

    const history = useHistory()

    const submit = () => {
        createOrder(cartArticles, user, bankCard).then(() => {
            resetCart()
            history.push('/order-success')
        }).catch((e) => {
            setError(e.message || e)
        })
    }

    const updateBankCard = (partialBanCard: Partial<IBankCard>) => setBankCard({...bankCard, ...partialBanCard})

    const updateUser = (partialUser: Partial<IUser>) => setUser({...user, ...partialUser})

    return <div data-testid={'order-form'}>
        {error && <div>{error}</div>}
        <UserForm updateUser={updateUser}/>
        <BankCardForm updateBankCard={updateBankCard}/>
        <Button onClick={submit}>Submit</Button>
    </div>
}

export default OrderForm
export type IOrderFormProps = IProps
