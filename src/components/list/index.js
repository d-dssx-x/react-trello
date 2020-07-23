import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {changeListTitle} from '../../redux/actions/'

import './index.scss'

import Card from '../card/'
import AddCard from '../addCard'

const List = ({title, id, todos, dispatch}) => {
  // Ref to input blur
  const ref = useRef(null)

  const [textareaHeight, setTextareaHeight] = useState(30)


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
    resizeTextarea(event)
    if (event.key === 'Enter') {
      return ref.current.blur()
    }
  }

  const resizeTextarea = (event) => {
    if (event.target.scrollTop > 0) {
      return setTextareaHeight(textareaHeight + 20)
    }
  }


  return (
    <div
      className="list">
      <textarea
        style={{height: textareaHeight}}
        ref={ref}
        value={title}
        onChange={onChangeHandler}
        onKeyPress={onKeyHandler}
        placeholder='Todo'
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(List)
