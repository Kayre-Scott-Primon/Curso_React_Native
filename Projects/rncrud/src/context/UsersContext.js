import React, {createContext, useReducer} from 'react'
import users from '../data/users'

const UsersContext = createContext({})
const initialState = { users }

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user]
        }
    },
    updateUser(state, action) {
        const update = action.payload
        return {
            ...state,
            users: setInterval.users.map(u.id === update.id ? update : u)
        }
    },
    deleteUser(state, action){
        const user = action.payload
        return {
            //...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProveider = props => {

    function reducer(state, action) {
        if(action.type === 'deleteUser'){
            const fn = actions[action.type]
            return fn ? fn(state, action) : state
        }
        return state
    }

    const [state , dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{
            state, dispatch
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext