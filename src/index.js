import React from 'react'
import {render} from 'react-dom'
import './index.scss'
import App from './App'
import {createStore, compose} from 'redux'
import {rootReducer} from './redux/reducers'
import {Provider} from 'react-redux'


const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
))

const Wrap = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
    <React.StrictMode>
      <Wrap />
    </React.StrictMode>,
    document.getElementById('root'),
)
