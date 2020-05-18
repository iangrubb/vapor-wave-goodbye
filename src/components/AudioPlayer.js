import React, { useState, useRef } from 'react'

import styled from 'styled-components'

export default function AudioPlayer() {

    const audioElement = useRef(null);

    const [playing, setPlaying] = useState(false)

    const toggleAudio = () => {
        
        if (!playing) {
            audioElement.current.play()
            setPlaying(true)
        } else {
            audioElement.current.pause()
            setPlaying(false)
        }
    }

    return (
        <Container onClick={toggleAudio}>
            <Button pressed={playing}><span>Audio</span></Button>
            
            <audio id="song" ref={audioElement}>
                <source src="song.mp3"></source>
            </audio>
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 60px;
    height: 45px;

    cursor: pointer;

    position: absolute;

    background: #333;

    border-radius: 4px;

    transform: skew(-20deg);


    right: 110px;
    bottom: 30px;

`

const Button = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 94%;
    height: 92%;

    background: rgba(190, 186, 180, 1);

    border-radius: 4px;

    border: 2px solid rgba(20, 20, 20, 0.2);
    box-shadow: inset 0 0 8px rgba(20, 20, 20, 0.2);

    transition: transform 0.1s ease;

    transform: translateX(-1px) translateY(${props => props.pressed ? -1 : -3}px);

    &:active {
        transform: translateX(-1px) translateY(0);
    }

    & > span {
        font-family: 'VT323', monospace;
        color: #333;
        margin: 0 0 2px 4px;
        font-weight: 700;
        letter-spacing: 2px;
    }



`
