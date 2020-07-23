import React from 'react'
import './index.scss'

const Buttons = ({title, onRes, onRej}) => {
  return (
    <div className="buttons">
      <button
        className="res"
        id="res"
        onClick={onRes}>{title}</button>
      <button
        className="rej"
        id="rej"
        onClick={onRej}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default Buttons
