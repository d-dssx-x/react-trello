import {CHANGE_LIST_TITLE, ADD_NEW_LIST} from '../types'

const init = [
  {
    title: 'ToDo',
    id: 'todo',
  },
  {
    title: 'Done',
    id: 'done',
  },
]

export const statusesReducer = (state = init, action) => {
  switch (action.type) {
    case CHANGE_LIST_TITLE:
      return state
          .map((el) => el.id === action.values.id
          ? {...el, title: action.values.title} : el)
    case ADD_NEW_LIST:
      return [...state, {
        title: action.values.title,
        id: Date.now().toString(),
        index: action.values.index,
      }]
    default:
      return state
  }
}
