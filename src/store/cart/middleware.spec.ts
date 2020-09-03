import {ICartState} from "./reducer";
import {CartActionType} from "./type";
import {redirectMiddleware} from "./middleware";
import history from '../../context/History'

const createRedirectMiddleware = (state: ICartState) => {
    const store: any = {
        getState: jest.fn(() => state),
        dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = (action: CartActionType) => redirectMiddleware(store)(next)(action)

    return {store, next, invoke}
}

describe('middleware spec', () => {
    describe('redirect middleware spec', () => {

        describe('When is CREATE_COMMAND', () => {

            beforeEach(() => {
                history.push = jest.fn()
            })
            test('should redirect when there are no error', () => {
                const action = {type: 'CREATE_COMMAND'} as CartActionType
                const {invoke} = createRedirectMiddleware({cartArticles: []})
                invoke(action)
                expect(history.push).toBeCalledWith('/command-success')
            })
            test('should redirect when there are an error', () => {
                const action = {type: 'CREATE_COMMAND'} as CartActionType
                const {invoke} = createRedirectMiddleware({cartArticles: [], error: 'An error'})
                invoke(action)
                expect(history.push).not.toBeCalledWith('/command-success')
            })
        })

    })
})
