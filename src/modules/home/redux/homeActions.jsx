import { AddAlert } from '../../../components'
import api from '../../../helpers/api'
import { loaded, loading } from '../../../layout/redux/layoutActions'

export const LISTAR_POSTS = 'LISTAR_POSTS'
export const setPostList = e => ({
  type: LISTAR_POSTS,
  payload: e
})

export const PAGE_POSTS = 'PAGE_POSTS'
export const setPagePost = e => ({
  type: PAGE_POSTS,
  payload: e
})

export const postList = e => {
  return dispatch => {
    dispatch(loading())
    let params = `?`
    if (e?.params) {
      console.log(e.params, 'postList');
      Object.keys(e.params).map((par)=> {
        console.log(par, 'postList par');
        params = `${params === '?' ? params : params + '&'}${par}=${e.params[par]}`
      })
    }
    api.get(`/articles${params}`)
    .then(resposta => {
      console.log(resposta, 'postList resposta');
      dispatch([
        setPostList(resposta.data),
        setPagePost(Number(e.params._page) + 1),
        loaded()
      ])
    })
    .catch(error => {
      console.log(error, 'erro postList');
      dispatch(loaded())
      // dispatch(AddAlert('error', nls.mensagem[error.request.response]))
    })
  }
}