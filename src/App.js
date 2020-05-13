import React from 'react'

import styled from 'styled-components'

import Computer from './components/Computer'

function App() {
  return (
    <Container>
      <Computer>

      </Computer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App;
