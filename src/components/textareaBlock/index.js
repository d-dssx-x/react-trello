import React, {useRef, useEffect} from 'react'
import Textarea from 'react-textarea-autosize'
import Buttons from '../buttons/'
import './index.scss'


const TextareaBlock = ({
  value,
  onChangeHandler,
  onKeyHandler,
  onClickButtonsHandler,
  placeholder,
  title}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (value === '') {
      ref.current.value = ''
    }
  }, [value])


  return (
    <div className="block">
      <Textarea
        className="textarea"
        ref={ref}
        onChange={onChangeHandler}
        onKeyPress={onKeyHandler}
        placeholder={placeholder}
        minLength={140}
        maxRows={3}
        autoFocus/>
      <Buttons
        title={title}
        onRes={onClickButtonsHandler}
        onRej={onClickButtonsHandler}/>
    </div>
  )
}


export default TextareaBlock

