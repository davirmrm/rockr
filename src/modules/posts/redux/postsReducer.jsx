import {
  LISTAR_POSTS,
  LOAD_POST,
} from './postsActions'

const initialState = {
  posts: [],
  post: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LISTAR_POSTS:
      return { ...state, posts: payload }
    case LOAD_POST:
      return { ...state, post: payload }
    default:
      return state
  }
}
