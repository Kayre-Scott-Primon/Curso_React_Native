import { ADD_POST, ADD_COMMENT } from "../actions/actionsTypes";

const initialState = {
     post: [{
          id: Math.random(),
          nickname: 'Rafael Pereira Filho',
          email: 'rafaelFilho@gmail.com',
          image: require('../../../assets/assets/imgs/fence.jpg'),
          comments: [{
               nickname: 'John Ray Sheldon',
               comment: 'Stunning!'
          },{
               nickname: 'Ana Julia Arruda',
               comment: 'Foto linda!'
          }]
     },{
          id: Math.random(),
          nickname: 'Francisco Leandro Lima',
          email: 'fllima@gmail.com',
          image: require('../../../assets/assets/imgs/bw.jpg'),
          comment: []
     }]
}

const reducer = (state = initialState, action) => {
     switch(action.type){
          case ADD_POST:
               return {
                    ...state,
                    post: state.post.concat({
                         ...action.payload
                    })
               }
          case ADD_COMMENT:
               return {
                    ...state,
                    post: state.post.map(post => {
                         if(post.id === action.payload.postId) {
                              if(post.comments) {
                                   post.comments = post.comments.concat(
                                        action.payload.comment
                                   )
                             
                              } else {
                                   post.comments = [action.payload.comment]
                              }
                              return post
                         }
                    })
               }
          default: 
               return state
     }
}

export default reducer