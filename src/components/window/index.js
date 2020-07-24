import React from 'react'
import './index.scss'
import Header from './Header'
import InList from './InList'
import Description from './Description'
import Menu from '../menu'
import Lables from './Lables'
import Checklist from './Checklist'


const Window = ({title, id, status, color, desc, tag, checklist, onCancel}) => {
  const canelClickHandler = () => {
    return onCancel()
  }

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'

  //   return () => {
  //     document.body.style.overflow = 'auto'
  //   }
  // }, [])


  return (
    <div
      id="window"
      className="window">
      <div className="dialog">
        <Header
          color={color}
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
            {!!tag &&
              <Lables
                tag={tag}/>}
            {!!checklist &&
              <Checklist
                checklist={checklist}
                id={id}
              />
            }
          </div>
          <div className="right">
            <Menu
              {...{id, title, status, desc, color, tag, checklist}}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Window
