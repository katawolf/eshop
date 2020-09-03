import {fireEvent, render, RenderResult} from "@testing-library/react"
import React from "react";
import CommandForm, {ICommandFormProps} from "./CommandForm";
import {emptyUser} from "../../models/IUser";
import {IUserFormProps} from "../user/UserForm";
import {emptyBankCard} from "../../models/IBankCard";
import {IBankCardFormProps} from "../payment/BankCardForm";
import {aBankCard, aCartArticle, aUser} from "../../data.mock";

jest.mock('../payment/BankCardForm', () => ({updateBankCard}: IBankCardFormProps) =>
    <input data-testid={'bankCardForm'} onChange={event => updateBankCard(JSON.parse(event.target.value))}/>)
jest.mock('../user/UserForm', () => ({updateUser}: IUserFormProps) =>
    <input data-testid={'userForm'} onChange={event => updateUser(JSON.parse(event.target.value))}/>)

describe('command form spec', () => {
    let commandForm: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            commandForm = component()
        })
        test('should display component', () => {
            expect(commandForm.queryByTestId('commandForm')).toBeInTheDocument()
        })
        test('should display user form component', () => {
            expect(commandForm.queryByTestId('userForm')).toBeInTheDocument()
        })
        test('should display bank card form component', () => {
            expect(commandForm.queryByTestId('bankCardForm')).toBeInTheDocument()
        })
        test('should display submit button', () => {
            expect(commandForm.queryByText('Submit')).toBeInTheDocument()
        })
    })
    describe('When click on submit button', () => {
        const createCommand = jest.fn()
        beforeEach(() => {
            commandForm = component({createCommand})
        })
        afterEach(() => {
            createCommand.mockClear()
        })
        describe('and the user and the bank card are not updated', () => {
            beforeEach(() => {
                fireEvent.click(commandForm.getByText('Submit'))
            })
            test('should call create command function with default values', () => {
                expect(createCommand).toBeCalledWith(emptyUser(), emptyBankCard())
            })
        })
        describe('and the user and the bank card are updated', () => {
            const user = aUser()
            const bankCard = aBankCard()
            beforeEach(() => {
                fireEvent.change(commandForm.getByTestId('userForm'), {target: {value: JSON.stringify(user)}})
                fireEvent.change(commandForm.getByTestId('bankCardForm'), {target: {value: JSON.stringify(bankCard)}})
                fireEvent.click(commandForm.getByText('Submit'))
            })
            test('should call create command function with user and bank card updated', () => {
                expect(createCommand).toBeCalledWith(user, bankCard)
            })
        })
    })
})

const component = (partialProps: Partial<ICommandFormProps> = {}) =>
    render(<CommandForm {...{
        createCommand: () => {
        }, ...partialProps
    }}/>)

