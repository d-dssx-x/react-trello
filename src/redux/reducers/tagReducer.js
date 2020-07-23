import {CHANGE_TAG_TITLE} from '../actions'
const init = [
  {
    id: '1',
    title: 'main',
    color: '#34ebe8',
  },
  {
    id: '2',
    title: 'some lable',
    color: '#e3324a',
  },
  {
    id: '3',
    title: 'some lable',
    color: '#4cf598',
  },
  {
    id: '4',
    title: 'some lable',
    color: '#f2e418',
  },
  {
    id: '5',
    title: 'some lable',
    color: '#f76df7',
  },
  {
    id: '6',
    title: 'some lable',
    color: '#7377f0',
  },
]
export const tagReducer = (state = init, action) => {
  switch (action.type) {
    case CHANGE_TAG_TITLE:
      return state
          .map((el) => el.id === action.values.id
          ? {...el, title: action.values.title}: el)
  }
  return state
}
