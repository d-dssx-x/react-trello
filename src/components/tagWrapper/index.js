import React from 'react'
import './index.scss'
import {connect} from 'react-redux'


const TagWrapper = ({tag, tags}) => {
  const {color, title} = tags.find((el) => el.id === tag)
  return (
    <div
      style={{backgroundColor: color}}
      id="tag"
      className="tag-wrapper">
      #{title}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
  }
}

export default connect(mapStateToProps)(TagWrapper)
