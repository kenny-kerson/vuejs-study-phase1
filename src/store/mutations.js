import Constant from '../Constant'
export default {
    [Constant.SELECT_TS_ID]: (state, payload) => {
        state.selectTsId = payload.selectTsId
    },

    [Constant.SET_TS_LIST]: (state, payload) => {
        state.tsList = payload.tsList
    },

    [Constant.SET_TC_LIST]: (state, payload) => {
        state.originTcList = payload.originTcList
    },

    [Constant.SET_TH_LIST]: (state, payload) => {
        state.thList = payload.thList
    },

    [Constant.CHANGE_IS_LOADING]: (state, payload) => {
        state.isLoading = payload.isLoading
    },

    [Constant.CHANGE_IS_COLLAPSE]: (state, payload) => {
        state.isCollapse = payload.isCollapse
    }
}
