import React, {useRef, useState, useEffect} from 'react'
import './index.scss'
import Window from '../window/'
import {useDispatch} from 'react-redux'
import {useDrag, useDrop} from 'react-dnd'
import {ITEM_TYPE} from '../../constants/'
import {switchCards} from '../../redux/actions'
import TagWrapper from '../tagWrapper'


const Card = ({item, title, index, status, color, tag}) => {
  const ref = useRef(null)
  const refHelp = useRef(null)
  const [showWindow, setShowWindow] = useState(false)
  const [textColor, setTextColor] = useState('#000')
  const [showShowTag, setShowTag] = useState(false)
  const dispatch = useDispatch()
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragI = item.index
      const hoverI = index

      if (dragI === hoverI) {
        return
      }
      if (item.status !== status) {
        return
      }


      dispatch(switchCards({dragI, hoverI, status}))
      item.index = hoverI
    },
  })

  const [{isDragging}, drag] = useDrag({
    item: {type: ITEM_TYPE, ...item, index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const onClickHandler = () => {
    return setShowWindow(true)
  }

  const onCancel = () => {
    return setShowWindow(false)
  }

  useEffect(() => {
    if (color !== '#fff' && color !== undefined) {
      return setTextColor('#fff')
    }
    return setTextColor('#000')
  }, [color, tag])

  useEffect(() => {
    const con = (event) => {
      if (tag &&
        (event.target === refHelp.current || event.target.id === 'tag')) {
        setShowTag(true)
      } else {
        setShowTag(false)
      }
    }
    document.addEventListener('mousemove', con)
    return () => {
      document.removeEventListener('mouseover', con)
    }
  }, [tag])

  return (
    <>
      <div
        style={{opacity: isDragging ? 0 : 1, backgroundColor: color}}
        className="card"
        ref={drag(drop(ref))}
        onClick={onClickHandler}>
        <span
          style={{color: textColor}}
          className="text">{title}</span>
        <div
          className="helper"
          ref={refHelp}></div>
        {showShowTag &&
          <TagWrapper
            tag={tag}/>
        }
      </div>
      {showWindow &&
        <Window
          onCancel={onCancel}
          {...item}
        />
      }
    </>
  )
}


export default Card
