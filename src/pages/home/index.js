import React from 'react'
import {useSelector} from 'react-redux'

import './index.scss'

import AddList from '../../components/addList/'
import ListWrapper from '../../components/listWrapper'


const Home = () => {
  const statuses = useSelector((state) => state.statuses)
  return (
    <div className="container">
      <div className="lists">
        {statuses.map((el) => <ListWrapper
          key={el.id}
          {...el}/>)
        }
        <AddList index={statuses.length ? statuses.length : 0}/>
      </div>
    </div>
  )
}
export default Home
