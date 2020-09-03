interface IUser {
    firstName: string
    lastName: string
    email: string
    address: string
}

export const emptyUser = (): IUser => ({
    firstName: '',
    lastName: '',
    email: '',
    address: ''
})

export default IUser