import React from 'react'
import './Checklist.scss'
import {connect} from 'react-redux'
import {checkdItemChecklist,
  changeItemTitleChecklist,
  deleteItemChecklist} from '../../redux/actions'


const CheckItem = ({title, id, done, owner, dispatch}) => {
  const onChangeCheckboxHandler = (event) => {
    dispatch(checkdItemChecklist({
      owner,
      id,
      done: event.target.checked,
    }))
  }

  const onChangeTitle = (event) => {
    return dispatch(changeItemTitleChecklist({
      owner,
      id,
      title: event.target.value,
    }))
  }

  const deleteItemHendler = () => {
    return dispatch(deleteItemChecklist({
      owner,
      id,
    }))
  }

  return (
    <div className="checklist__item">
      <input
        onChange={onChangeCheckboxHandler}
        type="checkbox"
        checked={done}/>
      <input
        className="item__title"
        type="default"
        value={title}
        onChange={onChangeTitle}/>
      <div
        onClick={deleteItemHendler}
        className="delete-icon">
        <i className="fas fa-trash-alt"/>
      </div>
    </div>
  )
}


export default connect()(CheckItem)
