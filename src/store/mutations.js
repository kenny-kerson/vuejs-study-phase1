import Constant from '../Constant'
export default {
    [Constant.CHANGE_CURRENT_COMPONENT]: ( state, payload ) => {
        state.currentComponent = payload.currentComponent
    }
}