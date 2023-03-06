import React from 'react'
import Container from './layout/Container'
import Content from './layout/Content'
import SideBar from './layout/SideBar'
import Widget from './layout/Widget'

const App = () => {
  return (
    <Container>
      <SideBar/>
      <Content/>
      <Widget/>
    </Container>
  )
}

export default App
