import Vuex from 'vuex'
import firebase from 'firebase'

import { vuexfireMutations, firebaseAction } from 'vuexfire'


function createNewAccount(user, account) {
    return firebase.databas().ref(`accounts/${user.uid}`).set({
        displayName: account.name,
        email: user.email
    })
}

const createStore=()=>{
    return new Vuex.Store({
        state:{
            user: null,
            account: null
        },
        getters: {
            isAuthenticated(state){
                return !!state.user
            }
        },
        actions:{
            setAccountRef: firebaseAction(({ bindFirebaseRef}, path) =>{
                return bindFirebaseRef('account',firebase.database().ref(path))
            })
            ,
            resetUser( { state }){
                state.user=null
            },
            userCreate( { state }, account){
                return firebase.auth()
                    .createUserWithEmailAndPassword(account.email, account.password)
                    .then(( { user } )=>{
                        createNewAccount(user, account)
                    })
            },
            userLogin( { state }, account){
                return firebase.auth().signInWithEmailAndPassword(account.email, account.password)
                    .then(( { user }) =>{
                        return this.dispatch('setUser',user)
                    })
            },
            userLogout( { state } ){
                return firebase.auth().signOut()
                    .then(()=>{
                        this.dispatch('resetUser')
                    })
            }

        },
        mutations:{
            ...vuexfireMutations,
            setUser(state, user)
            {
                state.user = user
                return this.dispatch(setAccountRef, `accounts/${state.user.id}`)
            }
        },
    })
}

export default createStore