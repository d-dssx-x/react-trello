import React from 'react'
import './InList.scss'
import { connect } from 'react-redux'

const InList = ({id, statuses}) => {
  const title = statuses.find((el) => el.id === id).title


  return (
    <div className="in-list">
      <span>in list <span className="in-list__list">{title}</span></span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    statuses: state.statuses,
  }
}

export default connect(mapStateToProps)(InList)
