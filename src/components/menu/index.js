import React, {useState} from 'react'
import './index.scss'
import Cover from './Cover'
import Lables from './Lables'


const Menu = (props) => {
  const [showCover, setShowCover] = useState(false)
  const [showLables, setShowLables] = useState(false)
  const onClickShowCoverHandler = () => {
    return setShowCover(!showCover)
  }
  const onClickShowLablesHandler = () => {
    return setShowLables(!showLables)
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
        targ={props.id}
        currentTag={props.tag}
        onCancel={onClickShowLablesHandler}/>}
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
