import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeListTitle} from '../../redux/actions/'
import Textarea from 'react-textarea-autosize'

import './index.scss'

import Card from '../card/'
import AddCard from '../addCard'

const List = ({title, id}) => {
  // Ref to input blur
  const ref = useRef(null)

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()


  // Filtred and sort Todos
  const data = todos
      .filter((el)=>el.status === id)

  const onChangeHandler = (event) => {
    return dispatch(changeListTitle({
      id,
      title: event.target.value,
    }))
  }

  const onKeyHandler = (event) => {
    if (event.key === 'Enter') {
      return ref.current.blur()
    }
  }
  return (
    <div
      className="list">
      <Textarea
        ref={ref}
        value={title}
        onChange={onChangeHandler}
        onKeyPress={onKeyHandler}
        placeholder={'Todo'}
      />
      {data.map((el, i) => <Card
        key={el.id}
        {...el}
        item={el}
        index={i}/>)
      }
      <AddCard
        status={id}/>
    </div>
  )
}
export default List
