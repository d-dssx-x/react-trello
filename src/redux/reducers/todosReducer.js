/* eslint-disable no-case-declarations */
import {
  ADD_NEW_TASK,
  SWITCH_CARDS,
  CHENGE_STATUS,
  CHANGE_TITLE,
  ADD_DESC,
  ADD_COVER_COLOR,
  CHANGE_TAG,
  ADD_CHECKLIST,
  CHANGE_TITLE_CHECKLIST,
  ADD_NEW_ITEM_CHECKLIST,
  CHEKED_ITEM_CHECKLIST,
  CHENGE_ITEM_TITLE_CHECKLIST,
  DELETE_CHECKLIST,
  DELETE_ITEM_CHECKLIST} from '../types'

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
    color: '#e3324a',
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
    checklist: {
      title: 'some checklist',
      items: [
        {
          title: 'Some title',
          id: 'check_1',
          done: false,
        },
        {
          title: 'Some title',
          id: 'check_2',
          done: true,
        },
      ],
    },
  },
]

export const todosReducers = (state = init, action) => {
  switch (action.type) {
    case DELETE_ITEM_CHECKLIST:
      return state.map((el) => el.id === action.values.owner
      ?{...el, checklist: {...el.checklist,
        items: [
          ...el.checklist.items.filter((el) => el.id !== action.values.id)]}}
          : el)
    case DELETE_CHECKLIST:
      return state
          .map((el) => el.id === action.values.owner
          ? {
            id: el.id,
            title: el.title,
            tag: el.tag,
            status: el.status,
            desc: el.desc}
          : el)
    case CHENGE_ITEM_TITLE_CHECKLIST:
      return state.map((el) => el.id === action.values.owner
      ?{...el, checklist: {...el.checklist,
        items: [...el.checklist.items.map((el) => el.id === action.values.id
          ? {...el, title: action.values.title}:el)]}} : el)
    case CHEKED_ITEM_CHECKLIST:
      return state.map((el) => el.id === action.values.owner
      ?{...el, checklist: {...el.checklist,
        items: [...el.checklist.items.map((el) => el.id === action.values.id
          ? {...el, done: action.values.done}:el)]}} : el)
    case ADD_NEW_ITEM_CHECKLIST:
      return state.map((el) => el.id === action.values.id
        ? {...el, checklist: {...el.checklist, items: [...el.checklist.items, {
          title: action.values.title,
          id: 'chek_' + Date.now(),
          done: false,
        }]}}: el)
    case CHANGE_TITLE_CHECKLIST:
      return state
          .map((el) => el.id === action.values.id
          ? {...el, checklist:
            {...el.checklist, title: action.values.title}}: el)
    case ADD_CHECKLIST:
      return state.map((el) => el.id === action.id ? {...el, checklist: {
        title: '',
        items: [],
      }} : el)

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
    default:
      return state
  }
}
