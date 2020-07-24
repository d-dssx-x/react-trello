import React from 'react'
import {connect} from 'react-redux'

import './index.scss'

import AddList from '../../components/addList/'
import ListWrapper from '../../components/listWrapper'


const Home = ({statuses}) => {
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

const mapStateToProps = (state) => {
  return {
    statuses: state.statuses,
  }
}

export default connect(mapStateToProps)(Home)
