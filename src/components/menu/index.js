import React, {useState} from 'react'
import './index.scss'
import Cover from '../cover'
import Lables from '../lables/'
import {useDispatch} from 'react-redux'
import {addCheckList} from '../../redux/actions'


const Menu = (props) => {
  const {id, tag, checklist} = props

  const dispatch = useDispatch()

  const [showCover, setShowCover] = useState(false)
  const [showLables, setShowLables] = useState(false)
  const onClickShowCoverHandler = () => {
    setShowLables(false)
    return setShowCover(!showCover)
  }
  const onClickShowLablesHandler = () => {
    setShowCover(false)
    return setShowLables(!showLables)
  }

  const createCheckbox = () => {
    if (!checklist) {
      dispatch(addCheckList({
        id,
      }))
    }
  }

  return (
    <div
      className="menu"
      id="menu">
      <span>ADD TO CARD</span>
      <Button
        title={'Cover'}
        onClick={onClickShowCoverHandler}/>
      {showCover && <Cover
        onCancel={onClickShowCoverHandler}
        {...props} />}
      <Button
        title={'Lables'}
        onClick={onClickShowLablesHandler}/>
      {showLables && <Lables
        targ={id}
        currentTag={tag}
        onCancel={onClickShowLablesHandler}/>}
      <Button
        title={'Checklist'}
        onClick={createCheckbox}
      />
    </div>
  )
}

export default Menu


const Button = ({title, onClick}) => {
  return (
    <button
      className="menu__button"
      onClick={onClick}>{title}</button>
  )
}
