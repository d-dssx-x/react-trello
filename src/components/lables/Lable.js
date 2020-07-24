import React, {useState, useRef, useEffect} from 'react'
import './index.scss'
import {useDispatch} from 'react-redux'
import {changeTag, changeTagTitle} from '../../redux/actions'

const Lable = ({color, id, title, currentTag, targ}) => {
  const [disable, setDisable] = useState(true)
  const [selected, setSelected] = useState(null)
  const ref = useRef()

  const dispatch = useDispatch()

  const disableHandler = () => {
    return setDisable(!disable)
  }

  const onClickHandler = () => {
    if (!disable) return
    return dispatch(changeTag({
      targetId: targ,
      id,
    }))
  }
  const onClickIconHandler = (event) => {
    event.stopPropagation()
    return setDisable(!disable)
  }

  const onChangText = (event) => {
    return dispatch(changeTagTitle({
      id,
      title: event.target.value,
    }))
  }

  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      ref.current.blur()
      setDisable(true)
    }
  }

  useEffect(() => {
    if (currentTag === id) {
      setSelected({opacity: .8})
    } else {
      setSelected({})
    }
  }, [color, id, currentTag, targ])

  return (
    <div
      style={{...selected, backgroundColor: color}}
      onClick={onClickHandler}
      title='click to select or dbclick to change title'
      onDoubleClick={disableHandler}
      className="lable">
      <i
        onClick={onClickIconHandler}
        className="fas fa-pencil-alt"></i>
      <input
        ref={ref}
        disabled={disable}
        value={title}
        onChange={onChangText}
        onKeyPress={onKeyPressHandler}
      />
    </div>
  )
}


export default Lable
