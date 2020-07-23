import React, {useState, useEffect, useRef} from 'react'
import './Header.scss'
import {connect} from 'react-redux'
import {changeTitle} from '../../redux/actions'
import Textarea from 'react-textarea-autosize'

const Header = ({title, id, dispatch, onCancel}) => {
  const ref = useRef(null)

  const onChangeHandler = (event) => {
    return dispatch(changeTitle({id, title: event.target.value}))
  }

  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      return ref.current.blur()
    }
  }

  const onClickCancelHeandler = (event) => {
    event.stopPropagation()
    return onCancel()
  }
  return (
    <div className="dialog__header">
      <i className="fas fa-heading"></i>
      <Textarea
        className="textarea"
        ref={ref}
        onChange={onChangeHandler}
        value={title}
        onKeyPress={onKeyPressHandler}
        maxLength={140}
        maxRows={3}/>
      <button
        onClick={onClickCancelHeandler}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default connect()(Header)