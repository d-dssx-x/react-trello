import React from 'react'
import './index.scss'
import {colors} from '../../data/colors'
import Color from './Color'


const Cover = ({onCancel, id, color}) => {
  const items = colors.map((el) => ({id, color: el}))

  return (
    <div className="cover">
      <div className="title">
        <span>Cover</span>
        <i
          className="fas fa-times"
          onClick={onCancel}></i>
      </div>
      <div className="colors">
        <span>Colors</span>
        <div className="colors__block">
          {items.map((el, i) => <Color
            key={i}
            {...el}
            current={color}/>)}
        </div>
      </div>
    </div>
  )
}

export default Cover
