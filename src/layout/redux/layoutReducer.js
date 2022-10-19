import React from 'react'
import { 
  LOADING,
  MODAL_OPEN,
  VALIDACAO
} from './layoutActions'

const initialState = {
  load: false,
  statusModal: '',
  listas: {},
  erro: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, load: payload }
    case MODAL_OPEN:
      return { ...state, statusModal: payload }
    case VALIDACAO:
      return { ...state, erro: payload }
    default:
      return state
  }
}
