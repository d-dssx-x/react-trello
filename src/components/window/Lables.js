import React from 'react'
import './Lables.scss'
import {connect} from 'react-redux'

const Lables = ({tag, tags}) => {
  const {color} = tags.find((el) => el.id === tag)
  return (
    <div className="window__lables">
      <span>Lables</span>
      <div className="lables__colors">
        <div
          style={{backgroundColor: color}}
          className="lables__color"></div>
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
