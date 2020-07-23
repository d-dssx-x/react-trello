import React from 'react'
import {connect} from 'react-redux'

import './index.scss'

import List from '../../components/list/'
import AddList from '../../components/addList/'
import ListWrapper from '../../components/listWrapper'
import Window from '../../components/window'


const Home = ({statuses}) => {
  return (
    <div className="container">
      <div className="lists">
        {/* {statuses.map((el) =>{<List
          key={el.id}
          {...el}/>)} */}
        {statuses.map((el) => <ListWrapper
          key={el.id}
          {...el}/>)

        }
        <AddList index={statuses.length ? statuses.length : 0}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    statuses: state.statuses,
  }
}

export default connect(mapStateToProps)(Home)
