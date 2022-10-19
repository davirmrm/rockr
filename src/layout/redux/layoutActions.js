
export const LOADING = 'LOADING'
export const loading = e => ({
  type: LOADING,
  payload: true
})
export const loaded = e => ({
  type: LOADING,
  payload: false
})

export const MODAL_OPEN = 'MODAL_OPEN'
export const modalOpen = e => ({
  type: MODAL_OPEN,
  payload: e
})

export const VALIDACAO = 'VALIDACAO'
export const validacaoCampos = e => ({
  type: VALIDACAO,
  payload: e
})