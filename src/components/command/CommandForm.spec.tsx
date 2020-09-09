import {fireEvent, render, RenderResult} from "@testing-library/react"
import React from "react";
import CommandForm, {ICommandFormProps} from "./CommandForm";
import {IUserFormProps} from "../user/UserForm";
import {IBankCardFormProps} from "../payment/BankCardForm";
import {aBankCard, aCartArticle, aUser} from "../../data.mock";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {act} from "react-dom/test-utils";
import {emptyUser} from "../../domain/models/IUser";
import {emptyBankCard} from "../../domain/models/IBankCard";

jest.mock('../payment/BankCardForm', () => ({updateBankCard}: IBankCardFormProps) =>
    <input data-testid={'bank-card-form'} onChange={event => updateBankCard(JSON.parse(event.target.value))}/>)
jest.mock('../user/UserForm', () => ({updateUser}: IUserFormProps) =>
    <input data-testid={'user-form'} onChange={event => updateUser(JSON.parse(event.target.value))}/>)

describe('command form spec', () => {
    let commandForm: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            commandForm = component()
        })
        test('should display component', () => {
            expect(commandForm.queryByTestId('command-form')).toBeInTheDocument()
        })
        test('should display user form component', () => {
            expect(commandForm.queryByTestId('user-form')).toBeInTheDocument()
        })
        test('should display bank card form component', () => {
            expect(commandForm.queryByTestId('bank-card-form')).toBeInTheDocument()
        })
        test('should display submit button', () => {
            expect(commandForm.queryByText('Submit')).toBeInTheDocument()
        })
    })
    describe('When click on submit button', () => {
        const createCommand = jest.fn()
        const cartArticles = [
            aCartArticle({id: '1'}),
            aCartArticle({id: '2'})
        ];
        const resetCart = jest.fn()
        let history: any
        beforeEach(async () => {
            createCommand.mockResolvedValue('')
            history = createMemoryHistory({initialEntries: ['/command']})
        })
        afterEach(() => {
            createCommand.mockClear()
            resetCart.mockClear()
        })
        describe('and the user and the bank card are not updated', () => {
            beforeEach(async () => {
                await act(async () => {
                    commandForm = component({cartArticles, createCommand, resetCart}, history)
                })
                fireEvent.click(commandForm.getByText('Submit'))
            })
            test('should call create command function with args', () => {
                expect(createCommand).toBeCalledWith(cartArticles, emptyUser(), emptyBankCard())
            })
        })
        describe('and the user and the bank card are updated', () => {
            const user = aUser()
            const bankCard = aBankCard()

            beforeEach(async () => {
                await act(async () => {
                    commandForm = component({cartArticles, createCommand, resetCart}, history)
                })
                fireEvent.change(commandForm.getByTestId('user-form'), {target: {value: JSON.stringify(user)}})
                fireEvent.change(commandForm.getByTestId('bank-card-form'), {target: {value: JSON.stringify(bankCard)}})
                fireEvent.click(commandForm.getByText('Submit'))
            })
            test('should call create command function with args', () => {
                expect(createCommand).toBeCalledWith(cartArticles, user, bankCard)
            })
        })
        describe('and there are an error when call create command function', () => {
            beforeEach(async () => {
                createCommand.mockRejectedValue('an error')
                await act(async () => {
                    commandForm = component({cartArticles, createCommand, resetCart}, history)
                    fireEvent.click(commandForm.getByText('Submit'))
                })
            })
            test('should not call clean cart function', () => {
                expect(resetCart).not.toBeCalled()
            })
            test('should not redirect on command success page', () => {
                expect(history.location.pathname).toBe('/command')
            })
            test('should display error', () => {
                expect(commandForm.queryByText('an error')).toBeInTheDocument()
            })
        })
        describe('and there are no error when call create command function', () => {
            beforeEach(async () => {
                createCommand.mockResolvedValue('')
                await act(async () => {
                    commandForm = component({cartArticles, createCommand, resetCart}, history)
                })
                fireEvent.click(commandForm.getByText('Submit'))
            })
            test('should call clean cart function', () => {
                expect(resetCart).toBeCalled()
            })
            test('should redirect on command success page', () => {
                expect(history.location.pathname).toBe('/command-success')
            })
        })
    })
})

const component = (partialProps: Partial<ICommandFormProps> = {}, history = createMemoryHistory()) =>
    render(
        <Router history={history}>
            <CommandForm {...{
                cartArticles: [],
                createCommand: () => Promise.resolve(''), resetCart: () => {
                }, ...partialProps
            }}/>
        </Router>)

