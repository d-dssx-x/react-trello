/* eslint-disable no-case-declarations */
import {
  ADD_NEW_TASK,
  SWITCH_CARDS,
  CHENGE_STATUS,
  CHANGE_TITLE,
  ADD_DESC,
  ADD_COVER_COLOR,
  CHANGE_TAG} from '../actions'

const init = [
  {
    title: 'Click Me',
    id: '9',
    status: 'todo',
    desc: 'dsadasd',
    tag: '1',
  },
  {
    title: 'Drag me',
    id: '2',
    status: 'todo',
    desc: 'dsadasd',
    tag: '2',
  },
  {
    title: 'Clck me',
    id: '3',
    status: 'todo',
    desc: 'dasdsd',
    tag: '3',
  },
  {
    title: 'Click',
    id: '4',
    status: 'done',
    desc: 'dasdads',
    tag: '4',
  },
  {
    title: 'Rename list:)',
    id: '1',
    status: 'done',
    desc: 'dasdadasdasdasdsd',
    tag: '5',
  },
]

export const todosReducers = (state = init, action) => {
  switch (action.type) {
    case CHANGE_TAG:
      return state
          .map((el) => el.id === action.values.targetId
          ? {...el, tag: action.values.id} : el)

    case ADD_NEW_TASK:
      return [...state, {
        title: action.values.title,
        status: action.values.status,
        id: Date.now().toString(),
        desc: '',
        tag: '1',
      }]
    case CHANGE_TITLE:
      return state
          .map((el) => el.id === action.values.id
          ? {...el, title: action.values.title} : el)
    case ADD_DESC:
      return state
          .map((el) => el.id === action.values.id
          ? {...el, desc: action.values.desc} : el)
    case SWITCH_CARDS:
      const currentStatusState = state
          .filter((el) => el.status === action.values.status)
      const otherStatusState = state
          .filter((el) => el.status !== action.values.status)
      const item = currentStatusState[action.values.dragI]
      const newCards = currentStatusState
          .filter((el, i) => i !== action.values.dragI)
      newCards.splice(action.values.hoverI, 0, item)
      return [...newCards, ...otherStatusState]
    case CHENGE_STATUS:
      const i = state.find((el) => el.id === action.values.id)
      const newState = state.filter((el) => el.id !== action.values.id)
      newState.push({...i, status: action.values.status})
      return newState
    case ADD_COVER_COLOR:
      return state
          .map((el)=> el.id === action.values.id
          ? {...el, color: action.values.color} : el)
  }
  return state
}
