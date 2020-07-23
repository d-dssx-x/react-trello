import React, {useState} from 'react'
import './index.scss'
import {connect} from 'react-redux'
import {addNewTask} from '../../redux/actions'
import TextareaBlock from '../textareaBlock'

const AddCard = ({status, dispatch}) => {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')

  const clear = () => {
    setTitle('')
  }

  const onClickShowHandler = (event) => {
    return setShow(true)
  }

  const onChangeHandler = (event) => {
    return setTitle(event.target.value)
  }
  const onKeyHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(addNewTask({
        title,
        status,
      }))
      return clear()
    }
  }

  const onClickButtonsHandler = (event) => {
    event.stopPropagation()
    if (event.target.id === 'rej') {
      return setShow(false)
    }
    if (event.target.id === 'res') {
      dispatch(addNewTask({
        title,
        status,
      }))
      return clear()
    }
  }
  return (
    <div
      className="add-card"
      onClick={onClickShowHandler}>
      {!show && <span>+ Add card</span>}
      {show &&
        <TextareaBlock
          placeholder={'Enter a title of this card...'}
          value={title}
          onChangeHandler={onChangeHandler}
          onKeyHandler={onKeyHandler}
          onClickButtonsHandler={onClickButtonsHandler}
        />
      }
    </div>
  )
}

export default connect()(AddCard)
