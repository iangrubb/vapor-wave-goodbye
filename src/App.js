import React, { useEffect } from 'react'

import styled from 'styled-components'

import Computer from './components/Computer'
import NavBar from './components/NavBar'
import PerspectivePlane from './components/PerspectivePlane'

function App() {

  useEffect(() => {

    const audioElement = document.getElementById("song")
    audioElement.play()

  })

  return (
    <Container>
      <audio id="song">
          <source src="song.mp3"></source>
      </audio>
      <Computer>
        <NavBar />
        <GoodByeMarquee>さようなら</GoodByeMarquee>

        <PerspectivePlane />

      </Computer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const GoodByeMarquee = styled.marquee`
  position: absolute;
  top: 10%;
  left: 0;
  height: 60px;
  z-index: 2;
  font-size: 48px;
  
  color: rgb(31, 252, 233);
  text-shadow:
    2px 2px rgba(15, 187, 173, 0.445),
    4px 4px rgba(154, 219, 205, 0.452)
  ;

  font-weight: 700;

`

export default App;
