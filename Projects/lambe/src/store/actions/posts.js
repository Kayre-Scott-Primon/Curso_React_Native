import { ADD_POST, ADD_COMMENT } from "./actionsTypes";

export const addPost = props => {
     return {
          type: ADD_POST,
          payload: post
     }
}

export const addComment = payload => {
     return {
          type: ADD_COMMENT,
          payload: payload
     }
}