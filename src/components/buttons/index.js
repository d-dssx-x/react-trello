import React from 'react'
import './index.scss'

const Buttons = ({title, onRes, onRej}) => {
  return (
    <div className="buttons">
      <button
        className="buttons__res"
        id="res"
        onClick={onRes}>{title}</button>
      <button
        className="buttons__rej"
        id="rej"
        onClick={onRej}>
        <i
          id="rej"
          onClick={onRej}
          className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default Buttons
