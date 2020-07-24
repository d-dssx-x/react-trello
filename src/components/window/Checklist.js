import React, {useRef, useState} from 'react'
import './Checklist.scss'
import {useDispatch} from 'react-redux'
import {
  changeChecklistTitle,
  addNewItemChecklist,
  deleteChecklist} from '../../redux/actions'
import TextareaBlock from '../../components/textareaBlock'
import Item from './CheckItem.js'


const Checklist = ({checklist: {title, items}, id}) => {
  const [showInput, setShowInput] = useState(true)
  const [newItem, setNewItem] = useState('')
  const ref = useRef(null)
  const dispatch = useDispatch()

  const onChangeTitleHandler = (event) => {
    return dispatch(changeChecklistTitle({
      id,
      title: event.target.value,
    }))
  }

  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      ref.current.blur()
    }
  }

  const onClickShow = () => {
    return setShowInput(true)
  }

  const onClickButtonsHandler = (event) => {
    event.stopPropagation()
    if (event.target.id === 'rej') {
      return setShowInput(false)
    }
    if (event.target.id === 'res') {
      dispatch(addNewItemChecklist({
        id,
        title: newItem,
      }))
      return setNewItem('')
    }
  }
  const onChangeNewItem = (event) => {
    return setNewItem(event.target.value)
  }

  const onClickDeleteChecklistHandler = () => {
    return dispatch(deleteChecklist({owner: id}))
  }

  return (
    <div className="checklist">
      <div className="icon">
        <i className="fas fa-tasks" />
      </div>
      <input
        type="default"
        ref={ref}
        onKeyPress={onKeyPressHandler}
        onChange={onChangeTitleHandler}
        placeholder="Cecklist rename me:)"
        value={title}
      />
      {!showInput &&
        <>
          <div
            onClick={onClickShow}
            className="icon-edit">
            <i className="fas fa-pencil-alt"/>
          </div>
          <div
            onClick={onClickDeleteChecklistHandler}
            className="icon-delete">
            <i className="fas fa-trash-alt"></i>
          </div>
        </>}
      {items.map((el, i) => <Item
        key={i}
        {...el}
        owner={id}/>)}
      {showInput &&
        <TextareaBlock
          onChangeHandler={onChangeNewItem}
          value={newItem}
          title="Add"
          placeholder={'Add an item ...'}
          onClickButtonsHandler={onClickButtonsHandler} />}
    </div>
  )
}


export default Checklist
