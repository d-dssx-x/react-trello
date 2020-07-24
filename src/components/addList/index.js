import React, {useState, useEffect} from 'react'
import './index.scss'
import TextareaBlock from '../textareaBlock'
import {addNewList} from '../../redux/actions'
import {connect} from 'react-redux'

const AddList = ({index, dispatch}) => {
  const [show, setShow] = useState(false)
  const [className, setClassName] = useState('')
  const [title, setTitle] = useState('')

  const changeBackgound = (show) => {
    return show ? setClassName('active') : ''
  }

  const clear = () => {
    setTitle('')
  }


  const onClickHandler = () => {
    return setShow(true)
  }

  const onKeyHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(addNewList({
        title,
        index,
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
      dispatch(addNewList({
        title,
        index,
      }))
      return clear()
    }
  }
  const onChangeHandler = (event) => {
    return setTitle(event.target.value)
  }

  useEffect(() => {
    changeBackgound(show)
  }, [show])

  return (
    <div
      className={'add-list '+ className}
      onClick={onClickHandler}>
      {!show && <span>+ Add list . . .</span>}
      {show &&
        <TextareaBlock
          title="Add a list"
          value={title}
          onClickButtonsHandler={onClickButtonsHandler}
          onChangeHandler={onChangeHandler}
          onKeyHandler={onKeyHandler}
          placeholder="Enter title of this list..."/>}
    </div>
  )
}

export default connect()(AddList)
