import React from 'react'

import styled from 'styled-components'

import Computer from './components/Computer'
import NavBar from './components/NavBar'
import PerspectivePlane from './components/PerspectivePlane'

function App() {
  return (
    <Container>
      <Computer>
        <NavBar />


        <PerspectivePlane />

      </Computer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App;
