import React from 'react'
import List from '../list/'
import './index.scss'
import {useDrop} from 'react-dnd'
import {ITEM_TYPE} from '../../constants'
import {useDispatch} from 'react-redux'
import {changeStatus} from '../../redux/actions'

const ListWrapper = (props) => {
  const {id} = props
  const dispatch = useDispatch()

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop(item, monitor) {
      if (item.status === id) {
        return
      }
      dispatch(changeStatus({id: item.id, status: id}))
    },
  })

  return (
    <div
      className="list-wrapper"
      ref={drop}>
      <List {...props}/>
    </div>
  )
}


export default ListWrapper

