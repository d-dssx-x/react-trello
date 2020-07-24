import React from 'react'
import './Description.scss'
import {useDispatch} from 'react-redux'
import {addDesc} from '../../redux/actions'
import TextareaAutosize from 'react-textarea-autosize'


const Description = ({desc, id}) => {
  const dispatch = useDispatch()
  const onChangeHandler = (event) => {
    return dispatch(addDesc({id, desc: event.target.value}))
  }
  return (
    <div className="dialog__desc">
      <i className="fas fa-align-justify"></i>
      <span>Description</span>
      <TextareaAutosize
        className="textarea"
        value={desc}
        onChange={onChangeHandler}
        placeholder="Add a description..."
        maxRows={15} />
    </div>
  )
}


export default Description
