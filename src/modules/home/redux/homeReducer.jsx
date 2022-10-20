import {
  LISTAR_POSTS,
  PAGE_POSTS,
} from './homeActions'

const initialState = {
  posts: [],
  page: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LISTAR_POSTS:
      return { ...state, posts: [...state.posts, ...payload]}
      
      // return { ...state, posts: [...state.posts, ...payload].filter((p, i, s)=> {
      //   const have = s.filter(f=> f.id === p.id)
      //   return have.length > 1 ? null : p  
      // }) }
    case PAGE_POSTS:
      return { ...state, page: payload }
    default:
      return state
  }
}
