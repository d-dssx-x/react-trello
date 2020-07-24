import React from 'react'
import './index.scss'
import {useSelector} from 'react-redux'
import Lable from './Lable'


const Lables = ({onCancel, currentTag, targ}) => {
  const tags = useSelector((state) => state.tags)
  return (
    <div className="lables">
      <div className="title">
        <span>Lables</span>
        <i
          className="fas fa-times"
          onClick={onCancel}></i>
      </div>
      <div className="wrapper">
        {tags.map((el, i) => <Lable
          {...el}
          currentTag={currentTag}
          targ={targ}
          key={i}/>)}
      </div>
    </div>
  )
}

export default Lables
