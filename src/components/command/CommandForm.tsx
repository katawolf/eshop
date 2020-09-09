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
    createCommand: (cartArticles: ICartArticle[], user: IUser, bankCard: IBankCard) => Promise<String>
    resetCart: () => void
}

const CommandForm: React.FC<IProps> = ({cartArticles, createCommand, resetCart}) => {
    const [user, setUser] = useState(emptyUser())
    const [bankCard, setBankCard] = useState(emptyBankCard())
    const [error, setError] = useState(undefined)

    const history = useHistory()

    const submit = () => {
        createCommand(cartArticles, user, bankCard).then(() => {
            resetCart()
            history.push('/command-success')
        }).catch((e) => {
            setError(e.message || e)
        })
    }

    const updateBankCard = (partialBanCard: Partial<IBankCard>) => setBankCard({...bankCard, ...partialBanCard})

    const updateUser = (partialUser: Partial<IUser>) => setUser({...user, ...partialUser})

    return <div data-testid={'command-form'}>
        {error && <div>{error}</div>}
        <UserForm updateUser={updateUser}/>
        <BankCardForm updateBankCard={updateBankCard}/>
        <Button onClick={submit}>Submit</Button>
    </div>
}

export default CommandForm
export type ICommandFormProps = IProps
