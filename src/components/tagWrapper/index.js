import React from 'react'
import './index.scss'
import {useSelector} from 'react-redux'


const TagWrapper = ({tag}) => {
  const {color, title} = useSelector((state) => state.tags)
      .find((el) => el.id === tag)
  return (
    <div
      style={{backgroundColor: color}}
      id="tag"
      className="tag-wrapper">
      #{title}
    </div>
  )
}


export default TagWrapper

