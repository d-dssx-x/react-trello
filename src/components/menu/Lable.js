import React, {useState, useRef, useEffect} from 'react'
import './Lables.scss'
import {connect} from 'react-redux'
import {changeTagTitle, changeTag} from '../../redux/actions'

const Lable = ({color, id, title, currentTag, targ, dispatch}) => {
  console.log(id, currentTag)
  const [disable, setDisable] = useState(true)
  const [selected, setSelected] = useState(null)
  const ref = useRef()
  const disableHandler = () => {
    return setDisable(!disable)
  }

  const onClickHandler = () => {
    return dispatch(changeTag({
      targetId: targ,
      id,
    }))
  }


  useEffect(() => {
    if (currentTag === id) {
      setSelected({opacity: .5})
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
      <input
        ref={ref}
        disabled={disable}
        value={title}
      ></input>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
  }
}

export default connect(mapStateToProps)(Lable)
