import {aBankCard, aUser} from "../../data.mock";
import createCommand from "./command.service";
import commandResource from "../../resources/command.resource";

describe('command service', () => {
    const mockCreateCommand = jest.spyOn(commandResource, 'createCommand')

    afterEach(() => {
        mockCreateCommand.mockClear()
    })
    describe('when create command', () => {
        describe('When there are no error', () => {
            const commandId = '9f70ec0c-4354-4e2a-8d44-bddb8c3c5e06'
            let result: Promise<string>
            beforeEach(() => {
                mockCreateCommand.mockResolvedValue(commandId)
                result = createCommand([], aUser(), aBankCard())
            })
            test('should call create command resource', () => {
                expect(mockCreateCommand).toBeCalledWith([], aUser(), aBankCard())
            })
            test('should return command id', async () => {
                await expect(result).resolves.toBe(commandId)
            })
        })
        describe.each(['firstName', 'lastName', 'email', 'address'])('When user is not valid', (key: string) => {
            test('should throw error when %s is empty and should not call create command', async () => {
                await expect(
                    createCommand([], aUser({[key]: ''}), aBankCard())
                ).rejects.toThrow('An error occurred while creating the order.')
                expect(mockCreateCommand).not.toBeCalled()
            })
        })
        describe.each(['number', 'expirationDate', 'secretCode'])('When bank card is not valid', (key: string) => {
            test('should throw error when %s is empty and should not call create command', async () => {
                await expect(
                    createCommand([], aUser(), aBankCard({[key]: ''}))
                ).rejects.toThrow('An error occurred while creating the order.')
                expect(mockCreateCommand).not.toBeCalled()
            })
        })
    })
})