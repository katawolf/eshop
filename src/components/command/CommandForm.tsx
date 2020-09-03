import React, {useState} from "react";
import BankCardForm from "../payment/BankCardForm";
import UserForm from "../user/UserForm";
import {Button} from "react-bootstrap";
import IUser, {emptyUser} from "../../domain/models/IUser";
import IBankCard, {emptyBankCard} from "../../domain/models/IBankCard";

interface IProps {
    createCommand: (user: IUser, bankCard: IBankCard) => void
}

const CommandForm: React.FC<IProps> = ({createCommand}) => {
    const [user, setUser] = useState(emptyUser())
    const [bankCard, setBankCard] = useState(emptyBankCard())

    const updateBankCard = (partialBanCard: Partial<IBankCard>) => setBankCard({...bankCard, ...partialBanCard})

    const updateUser = (partialUser: Partial<IUser>) => setUser({...user, ...partialUser})

    return <div data-testid={'command-form'}>
        <UserForm updateUser={updateUser}/>
        <BankCardForm updateBankCard={updateBankCard}/>
        <Button onClick={() => createCommand(user, bankCard)}>Submit</Button>
    </div>
}

export default CommandForm
export type ICommandFormProps = IProps
