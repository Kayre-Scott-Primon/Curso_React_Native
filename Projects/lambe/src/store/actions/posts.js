import { ADD_POST, ADD_COMMENT } from "./actionsTypes";
import axios from "axios";

export const addPost = post => {
     return dispatch => {
          axios({
               url: ''
          })
          axios.post('/post.json', {...post})
          .catch(err => console.log(err))
          .then(res => console.log(res.data))
     }
}

export const addComment = payload => {
     return {
          type: ADD_COMMENT,
          payload: payload
     }
}