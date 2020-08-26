import React from "react";
import IBankCard from "../../models/IBankCard";

interface IProps {
    updateBankCard: (value: Partial<IBankCard>) => void
}

const BankCardForm: React.FC<IProps> = ({updateBankCard}) =>
    <div data-testid={'bankCardForm'}>
        <h3>Bank card</h3>
        <label>number :</label>
        <input data-testid={'inputBankCardNumber'} onChange={event => updateBankCard({number: event.target.value})}/>
        <label>Expiration date :</label>
        <input data-testid={'inputExpirationDate'} type={'date'} onChange={event => updateBankCard({expirationDate: event.target.value})}/>
        <label>Secret code :</label>
        <input data-testid={'inputSecretCode'} onChange={event => updateBankCard({secretCode: event.target.value})}/>
    </div>

export default BankCardForm
export type IBankCardFormProps = IProps
