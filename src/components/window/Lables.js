import React from 'react'
import './Lables.scss'
import {useSelector} from 'react-redux'

const Lables = ({tag}) => {
  const {color} = useSelector((state) => state.tags)
      .find((el) => el.id === tag)
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

export default Lables
