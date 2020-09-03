import React from "react";
import IBankCard from "../../domain/models/IBankCard";

interface IProps {
    updateBankCard: (value: Partial<IBankCard>) => void
}

const BankCardForm: React.FC<IProps> = ({updateBankCard}) =>
    <div data-testid={'bank-card-form'}>
        <h3>Bank card</h3>
        <label>number :</label>
        <input data-testid={'input-bank-card-number'} onChange={event => updateBankCard({number: event.target.value})}/>
        <label>Expiration date :</label>
        <input data-testid={'input-expiration-date'} type={'date'} onChange={event => updateBankCard({expirationDate: event.target.value})}/>
        <label>Secret code :</label>
        <input data-testid={'input-secret-code'} onChange={event => updateBankCard({secretCode: event.target.value})}/>
    </div>

export default BankCardForm
export type IBankCardFormProps = IProps
