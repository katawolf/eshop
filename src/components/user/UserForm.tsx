import React from "react";
import IUser from "../../domain/models/IUser";

interface IProps {
    updateUser: (partialUser: Partial<IUser>) => void
}

const UserForm: React.FC<IProps> = ({updateUser}) => <div data-testid={'user-form'}>
    <h3>User information</h3>
    <label>First name :</label>
    <input data-testid={'first-name-input'} onChange={event => updateUser({firstName: event.target.value})}/>
    <label>Last name :</label>
    <input data-testid={'last-name-input'} onChange={event => updateUser({lastName: event.target.value})}/>
    <label>Email :</label>
    <input data-testid={'email-input'} type={'email'} onChange={event => updateUser({email: event.target.value})}/>
    <label>Address :</label>
    <input data-testid={'address-input'} onChange={event => updateUser({address: event.target.value})}/>
</div>

export default UserForm
export type IUserFormProps = IProps