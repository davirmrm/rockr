import { combineReducers } from 'redux'
import alerts from './components/alert/alertsRedux'
import layoutState from './layout/redux/layoutReducer'

export const rootReducer = combineReducers({
  alerts,
  layoutState,
})

export default rootReducer
