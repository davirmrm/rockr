import { AddAlert } from '../../../components'
import api from '../../../helpers/api'
import { loaded, loading } from '../../../layout/redux/layoutActions'

export const LISTAR_POSTS = 'LISTAR_POSTS'
export const setPostList = e => ({
  type: LISTAR_POSTS,
  payload: e
})

export const LOAD_POST = 'LOAD_POST'
export const setPostLoad = e => ({
  type: LOAD_POST,
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
    api.get(`/articles`)
    .then(resposta => {
      console.log(resposta, 'postList resposta');
      dispatch([
        setPostList(resposta.data),
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


export const postLoad = e => {
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
      console.log(resposta, 'postList resposta ggg');
      dispatch([
        setPostLoad(resposta.data[0]),
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