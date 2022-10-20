import { combineReducers } from 'redux'
import alerts from './components/alert/alertsRedux'
import layoutState from './layout/redux/layoutReducer'

import homeState from './modules/home/redux/homeReducer'
import postsState from './modules/posts/redux/postsReducer'

export const rootReducer = combineReducers({
  alerts,
  layoutState,
  homeState,
  postsState,
})

export default rootReducer
