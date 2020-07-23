import React from 'react'
import './Lables.scss'
import {connect} from 'react-redux'
import Lable from './Lable'


const Lables = ({tags, onCancel, currentTag, targ}) => {
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
const mapStateToProps = (state) => {
  return {
    tags: state.tags,
  }
}

export default connect(mapStateToProps)(Lables)
