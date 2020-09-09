import {aBankCard, aUser} from "../../data.mock";
import createOrder from "./order.service";
import orderResource from "../../resources/order.resource";

describe('order service', () => {
    const mockCreateOrder = jest.spyOn(orderResource, 'createOrder')

    afterEach(() => {
        mockCreateOrder.mockClear()
    })
    describe('when create order', () => {
        describe('When there are no error', () => {
            const orderId = '9f70ec0c-4354-4e2a-8d44-bddb8c3c5e06'
            let result: Promise<string>
            beforeEach(() => {
                mockCreateOrder.mockResolvedValue(orderId)
                result = createOrder([], aUser(), aBankCard())
            })
            test('should call create order resource', () => {
                expect(mockCreateOrder).toBeCalledWith([], aUser(), aBankCard())
            })
            test('should return order id', async () => {
                await expect(result).resolves.toBe(orderId)
            })
        })
        describe.each(['firstName', 'lastName', 'email', 'address'])('When user is not valid', (key: string) => {
            test('should throw error when %s is empty and should not call create order', async () => {
                await expect(
                    createOrder([], aUser({[key]: ''}), aBankCard())
                ).rejects.toThrow('An error occurred while creating the order.')
                expect(mockCreateOrder).not.toBeCalled()
            })
        })
        describe.each(['number', 'expirationDate', 'secretCode'])('When bank card is not valid', (key: string) => {
            test('should throw error when %s is empty and should not call create order', async () => {
                await expect(
                    createOrder([], aUser(), aBankCard({[key]: ''}))
                ).rejects.toThrow('An error occurred while creating the order.')
                expect(mockCreateOrder).not.toBeCalled()
            })
        })
    })
})