import {fireEvent, render, RenderResult} from "@testing-library/react"
import React from "react";
import OrderForm, {IOrderFormProps} from "./OrderForm";
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

describe('order form spec', () => {
    let orderForm: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            orderForm = component()
        })
        test('should display component', () => {
            expect(orderForm.queryByTestId('order-form')).toBeInTheDocument()
        })
        test('should display user form component', () => {
            expect(orderForm.queryByTestId('user-form')).toBeInTheDocument()
        })
        test('should display bank card form component', () => {
            expect(orderForm.queryByTestId('bank-card-form')).toBeInTheDocument()
        })
        test('should display submit button', () => {
            expect(orderForm.queryByText('Submit')).toBeInTheDocument()
        })
    })
    describe('When click on submit button', () => {
        const createOrder = jest.fn()
        const cartArticles = [
            aCartArticle({id: '1'}),
            aCartArticle({id: '2'})
        ];
        const resetCart = jest.fn()
        let history: any
        beforeEach(async () => {
            createOrder.mockResolvedValue('')
            history = createMemoryHistory({initialEntries: ['/order']})
        })
        afterEach(() => {
            createOrder.mockClear()
            resetCart.mockClear()
        })
        describe('and the user and the bank card are not updated', () => {
            beforeEach(async () => {
                await act(async () => {
                    orderForm = component({cartArticles, createOrder, resetCart}, history)
                })
                fireEvent.click(orderForm.getByText('Submit'))
            })
            test('should call create order function with args', () => {
                expect(createOrder).toBeCalledWith(cartArticles, emptyUser(), emptyBankCard())
            })
        })
        describe('and the user and the bank card are updated', () => {
            const user = aUser()
            const bankCard = aBankCard()

            beforeEach(async () => {
                await act(async () => {
                    orderForm = component({cartArticles, createOrder, resetCart}, history)
                })
                fireEvent.change(orderForm.getByTestId('user-form'), {target: {value: JSON.stringify(user)}})
                fireEvent.change(orderForm.getByTestId('bank-card-form'), {target: {value: JSON.stringify(bankCard)}})
                fireEvent.click(orderForm.getByText('Submit'))
            })
            test('should call create command function with args', () => {
                expect(createOrder).toBeCalledWith(cartArticles, user, bankCard)
            })
        })
        describe('and there are an error when call create order function', () => {
            beforeEach(async () => {
                createOrder.mockRejectedValue('an error')
                await act(async () => {
                    orderForm = component({cartArticles, createOrder, resetCart}, history)
                    fireEvent.click(orderForm.getByText('Submit'))
                })
            })
            test('should not call clean cart function', () => {
                expect(resetCart).not.toBeCalled()
            })
            test('should not redirect on order success page', () => {
                expect(history.location.pathname).toBe('/order')
            })
            test('should display error', () => {
                expect(orderForm.queryByText('an error')).toBeInTheDocument()
            })
        })
        describe('and there are no error when call create order function', () => {
            beforeEach(async () => {
                createOrder.mockResolvedValue('')
                await act(async () => {
                    orderForm = component({cartArticles, createOrder: createOrder, resetCart}, history)
                })
                fireEvent.click(orderForm.getByText('Submit'))
            })
            test('should call clean cart function', () => {
                expect(resetCart).toBeCalled()
            })
            test('should redirect on order success page', () => {
                expect(history.location.pathname).toBe('/order-success')
            })
        })
    })
})

const component = (partialProps: Partial<IOrderFormProps> = {}, history = createMemoryHistory()) =>
    render(
        <Router history={history}>
            <OrderForm {...{
                cartArticles: [],
                createOrder: () => Promise.resolve(''), resetCart: () => {
                }, ...partialProps
            }}/>
        </Router>)

