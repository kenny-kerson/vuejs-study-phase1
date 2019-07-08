import Constant from '../Constant'
export default {
    [Constant.CHANGE_CURRENT_COMPONENT]: ( state, payload ) => {
        state.currentComponent = payload.currentComponent
    },

    [Constant.SELECT_TS_ID]: (state, payload) => {
        state.selectTsId = payload.selectTsId
    }
}