import React from "react";
import IUser from "../../models/IUser";

interface IProps {
    updateUser: (partialUser: Partial<IUser>) => void
}

const UserForm: React.FC<IProps> = ({updateUser}) => <div data-testid={'userForm'}>
    <h3>User information</h3>
    <label>First name :</label>
    <input data-testid={'firstNameInput'} onChange={event => updateUser({firstName: event.target.value})}/>
    <label>Last name :</label>
    <input data-testid={'lastNameInput'} onChange={event => updateUser({lastName: event.target.value})}/>
    <label>Email :</label>
    <input data-testid={'emailInput'} type={'email'} onChange={event => updateUser({email: event.target.value})}/>
    <label>Address :</label>
    <input data-testid={'addressInput'} onChange={event => updateUser({address: event.target.value})}/>
</div>

export default UserForm
export type IUserFormProps = IProps