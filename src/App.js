import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

// Header
import Header from './components/header'

// Main screen
import Home from './pages/home'


const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Home />
    </DndProvider>
  )
}


export default App
