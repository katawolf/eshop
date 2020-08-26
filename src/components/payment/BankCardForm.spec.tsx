import {fireEvent, render, RenderResult} from "@testing-library/react"
import React from "react"
import BankCardForm, {IBankCardFormProps} from "./BankCardForm";

describe('bank card form spec', () => {
    let bankCardForm: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            bankCardForm = component()
        })
        test('should display component', () => {
            expect(bankCardForm.queryByTestId('bankCardForm')).toBeInTheDocument()
        })
        test('should display bank card number label', () => {
            expect(bankCardForm.queryByText('Bank card number :')).toBeInTheDocument()
        })
        test('should display bank card number input', () => {
            expect(bankCardForm.queryByTestId('inputBankCardNumber')).toBeInTheDocument()
        })
        test('should display bank card number input with text type', () => {
            expect((bankCardForm.queryByTestId('inputBankCardNumber') as HTMLInputElement).type).toBe('text')
        })
        test('should display expiration date label', () => {
            expect(bankCardForm.queryByText('Expiration date :')).toBeInTheDocument()
        })
        test('should display expiration date input', () => {
            expect(bankCardForm.queryByTestId('inputExpirationDate')).toBeInTheDocument()
        })
        test('should display expiration date input with date type', () => {
            expect((bankCardForm.queryByTestId('inputExpirationDate') as HTMLInputElement).type).toBe('date')
        })
        test('should display secret code label', () => {
            expect(bankCardForm.queryByText('Secret code :')).toBeInTheDocument()
        })
        test('should display secret code input', () => {
            expect(bankCardForm.queryByTestId('inputSecretCode')).toBeInTheDocument()
        })
        test('should display secret code input with text type', () => {
            expect((bankCardForm.queryByTestId('inputSecretCode') as HTMLInputElement).type).toBe('text')
        })
    })
    describe('When change value of input bank card number', () => {
        const value = 'a value'
        const updateBankCard = jest.fn()
        beforeEach(() => {
            bankCardForm = component({updateBankCard})
            fireEvent.change(bankCardForm.getByTestId('inputBankCardNumber'), {target: {value}})
        })
        afterEach(() => {
            updateBankCard.mockClear()
        })
        test('should display input value', () => {
            expect((bankCardForm.getByTestId('inputBankCardNumber') as HTMLInputElement).value).toBe(value)
        })
        test('should call update input value function', () => {
            expect(updateBankCard).toBeCalledWith({number: value})
        })
    })
    describe('When change value of input expiration date', () => {
        const value = '2018-01-01'
        const updateBankCard = jest.fn()
        beforeEach(() => {
            bankCardForm = component({updateBankCard})
            fireEvent.change(bankCardForm.getByTestId('inputExpirationDate'), {target: {value}})
        })
        test('should display input value', () => {
            expect((bankCardForm.getByTestId('inputExpirationDate') as HTMLInputElement).value).toBe(value)
        })
        test('should call update input value function', () => {
            expect(updateBankCard).toBeCalledWith({expirationDate: value})
        })
    })
    describe('When change value of input secret code', () => {
        const value = '063'
        const updateBankCard = jest.fn()
        beforeEach(() => {
            bankCardForm = component({updateBankCard})
            fireEvent.change(bankCardForm.getByTestId('inputSecretCode'), {target: {value}})
        })
        afterEach(() => {
            updateBankCard.mockClear()
        })
        test('should display input value', () => {
            expect((bankCardForm.getByTestId('inputSecretCode') as HTMLInputElement).value).toBe(value)
        })
        test('should call update input value function', () => {
            expect(updateBankCard).toBeCalledWith({secretCode: value})
        })
    })

})

const component = (partialProps: Partial<IBankCardFormProps> = {}) =>
    render(<BankCardForm {...{
        updateBankCard: () => {
        }, ...partialProps
    }}/>)
