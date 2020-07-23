import React, { useRef, useEffect } from 'react'
import './index.scss'
import Buttons from '../buttons'
import Header from './Header'
import InList from './InList'
import Description from './Description'
import Menu from '../menu'


const Window = ({title, id, status, color, desc, tag, onCancel}) => {
  const canelClickHandler = () => {
    return onCancel()
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])


  return (
    <div
      id="window"
      className="window">
      <div className="dialog">
        <Header
          title={title}
          id={id}
          status={status}
          onCancel={canelClickHandler}/>
        <InList
          id={status}/>
        <div className="dialog__col">
          <div className="left">
            <Description
              id={id}
              desc={desc}/>
          </div>
          <div className="right">
            <Menu
              {...{id, title, status, desc, color, tag}}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Window
