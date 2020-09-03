import {CartActionType} from "./type";
import history from '../../context/History'

export const redirectMiddleware = (store: any) => (next: any) => (action: CartActionType) => {
    switch (action.type) {
        case "CREATE_COMMAND":
            next(action)
            const {error} = store.getState()
            if (!error) {
                history.push('/command-success')
            }
            break
        default:
            next(action)
    }
}
