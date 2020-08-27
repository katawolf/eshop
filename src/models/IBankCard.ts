interface IBankCard {
    number: string
    expirationDate: string
    secretCode: string
}

export const emptyBankCard = (): IBankCard => ({
    number: '',
    expirationDate: '',
    secretCode: ''
})

export default IBankCard