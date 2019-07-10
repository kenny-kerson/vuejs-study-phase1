import axios from 'axios'

import Constant from '../Constant'
import Config from '../Config'

export default {
    [Constant.GET_TS_LIST]: (store, payload) => {
        axios.get( Config.LOCAL_SERVER_BASE_URL + "/simple/ts/list")
            .then((response) => {
                console.log( response )

                store.commit( Constant.SET_TS_LIST, {
                    tsList: response.data.grid01
                })
            })
            .catch((e) => {
                console.log( "__KENNY__ GET_TS_LIST 호출오류발생!!")
            })
    },

    [Constant.GET_TC_LIST]: (store, payload) => {
        axios.get( Config.LOCAL_SERVER_BASE_URL + "/simple/tc/list")
            .then((response) => {
                console.log( response )

                store.commit( Constant.SET_TC_LIST, {
                    originTcList: response.data.grid01
                })
            })
            .catch((e) => {
                console.log( "__KENNY__ GET_TS_LIST 호출오류발생!!")
            })
    },

    [Constant.GET_TH_LIST]: (store, payload) => {
        store.commit( Constant.CHANGE_IS_LOADING, {
            isLoading: true
        })

        axios.get( Config.LOCAL_SERVER_BASE_URL + "/simple/th/list")
            .then((response) => {
                console.log( response )

                store.commit( Constant.SET_TH_LIST, {
                    thList: response.data.grid01
                })

                store.commit( Constant.CHANGE_IS_LOADING, {
                    isLoading: false
                })
            })
            .catch((e) => {
                console.log( "__KENNY__ GET_TS_LIST 호출오류발생!!")

                store.commit( Constant.CHANGE_IS_LOADING, {
                    isLoading: false
                })
            })
    },
}