import React from 'react'
import './InList.scss'
import {useSelector} from 'react-redux'

const InList = ({id, statuses}) => {
  const title = useSelector((state) => state.statuses)
      .find((el) => el.id == id).title
  return (
    <div className="in-list">
      <span>in list <span className="in-list__list">{title}</span></span>
    </div>
  )
}


export default InList
