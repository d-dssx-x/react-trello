import {combineReducers} from 'redux'
import {todosReducers} from './todosReducer'
import {statusesReducer} from './statusesReducer'
import {tagReducer} from './tagReducer'

export const rootReducer = combineReducers({
  todos: todosReducers,
  statuses: statusesReducer,
  tags: tagReducer,
})
