import { 
     USER_LOGGED_IN, 
     USER_LOGGED_OUT,
     USER_LOADED,
     LOADING_USER
} from "../actions/actionsTypes";

const initialState = {
     name: null,
     email: null,
     isLoading: false
}

const reducer = (state = initialState, action) => {
     switch(action.type) {
          case USER_LOGGED_IN: 
               return {
                    ...state,
                    name: action.payload.name,
                    email: action.payload.email
               }
          case USER_LOGGED_OUT:
               return {
                    ...state,
                    name: null,
                    email: null
               }
          case LOADING_USER: 
               return {
                    ...state,
                    isLoading: true
               }
          case USER_LOADED: 
               return {
                    ...state,
                    isLoading: false
               }
          default: 
          return state
     }
}

export default reducer