import React, {useEffect, useState} from 'react'
import './index.scss'
import {useDispatch} from 'react-redux'
import {addCoverColor} from '../../redux/actions'


const Color = ({color, id, current}) => {
  const [opacity, setOpacity] = useState({})
  const dispatch = useDispatch()
  const onClickHandler = () => {
    if (current === color) {
      return dispatch(addCoverColor({
        id, color: '#fff',
      }))
    }
    return dispatch(addCoverColor({
      id, color,
    }))
  }

  useEffect(() => {
    if (color === current) {
      return setOpacity({opacity: .2})
    }
    return setOpacity({})
  }, [color, id, current])

  return (
    <div
      onClick={onClickHandler}
      style={{backgroundColor: color, ...opacity}}
      className="color"></div>
  )
}

export default Color
