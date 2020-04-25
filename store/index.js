import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const createStore=  ()=>{
    return new Vuex.store({
        mutations:{
            ...vuexfireMutations,
        },
    })
}