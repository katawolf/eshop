import {fireEvent, render, RenderResult} from "@testing-library/react";
import React from "react";
import UserForm, {IUserFormProps} from "./UserForm";

describe('user form spec', () => {
    let userForm: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            userForm = component()
        })
        test('should display component', () => {
            expect(userForm.queryByTestId('user-form')).toBeInTheDocument()
        })
        test('should display user information title', () => {
            expect(userForm.queryByText('User information')).toBeInTheDocument()
        })
        test('should display first name label', () => {
            expect(userForm.queryByText('First name :')).toBeInTheDocument()
        })
        test('should display first name input', () => {
            expect(userForm.queryByTestId('first-name-input')).toBeInTheDocument()
        })
        test('should display first name input with text type', () => {
            expect((userForm.queryByTestId('first-name-input') as HTMLInputElement).type).toBe('text')
        })
        test('should display last name label', () => {
            expect(userForm.queryByText('Last name :')).toBeInTheDocument()
        })
        test('should display last name input', () => {
            expect(userForm.queryByTestId('last-name-input')).toBeInTheDocument()
        })
        test('should display last name input with text type', () => {
            expect((userForm.queryByTestId('last-name-input') as HTMLInputElement).type).toBe('text')
        })
        test('should display email label', () => {
            expect(userForm.queryByText('Email :')).toBeInTheDocument()
        })
        test('should display email input', () => {
            expect(userForm.queryByTestId('email-input')).toBeInTheDocument()
        })
        test('should display email input with text email', () => {
            expect((userForm.queryByTestId('email-input') as HTMLInputElement).type).toBe('email')
        })
        test('should address label', () => {
            expect(userForm.queryByText('Address :')).toBeInTheDocument()
        })
        test('should display address input', () => {
            expect(userForm.queryByTestId('address-input')).toBeInTheDocument()
        })
        test('should display address input with text type', () => {
            expect((userForm.queryByTestId('address-input') as HTMLInputElement).type).toBe('text')
        })
    })
    describe('When change value of input first name', () => {
        const value = 'Jérémy'
        const updateUser = jest.fn()
        beforeEach(() => {
            userForm = component({updateUser})
            fireEvent.change(userForm.getByTestId('first-name-input'), {target: {value}})
        })
        afterEach(() => {
            updateUser.mockClear()
        })
        test('should display input value', () => {
            expect((userForm.getByTestId('first-name-input') as HTMLInputElement).value).toBe(value)
        })
        test('should call update input value function', () => {
            expect(updateUser).toBeCalledWith({firstName: value})
        })
    })
    describe('When change value of input last name', () => {
        const value = 'Tutzo'
        const updateUser = jest.fn()
        beforeEach(() => {
            userForm = component({updateUser})
            fireEvent.change(userForm.getByTestId('last-name-input'), {target: {value}})
        })
        afterEach(() => {
            updateUser.mockClear()
        })
        test('should display input value', () => {
            expect((userForm.getByTestId('last-name-input') as HTMLInputElement).value).toBe(value)
        })
        test('should call update input value function', () => {
            expect(updateUser).toBeCalledWith({lastName: value})
        })
    })
    describe('When change value of input email', () => {
        const value = 'jtutzo@gmail.com'
        const updateUser = jest.fn()
        beforeEach(() => {
            userForm = component({updateUser})
            fireEvent.change(userForm.getByTestId('email-input'), {target: {value}})
        })
        afterEach(() => {
            updateUser.mockClear()
        })
        test('should display input value', () => {
            expect((userForm.getByTestId('email-input') as HTMLInputElement).value).toBe(value)
        })
        test('should call update input value function', () => {
            expect(updateUser).toBeCalledWith({email: value})
        })
    })
    describe('When change value of input address', () => {
        const value = 'a address'
        const updateUser = jest.fn()
        beforeEach(() => {
            userForm = component({updateUser})
            fireEvent.change(userForm.getByTestId('address-input'), {target: {value}})
        })
        afterEach(() => {
            updateUser.mockClear()
        })
        test('should display input value', () => {
            expect((userForm.getByTestId('address-input') as HTMLInputElement).value).toBe(value)
        })
        test('should call update input value function', () => {
            expect(updateUser).toBeCalledWith({address: value})
        })
    })
})

const component = (partialProps: Partial<IUserFormProps> = {}) =>
    render(<UserForm {...{updateUser: () => {}, ...partialProps}}/>)
