import React from 'react'

import styled, {keyframes} from 'styled-components'

import AppleLogo from './AppleLogo'

export default function Computer(props) {
    return (
        <ComputerFrame>
          <ScreenBackground>
            <ScreenOverlay />
            {props.children}
          </ScreenBackground>
          <PositionedAppleLogo />
          <Light />
        </ComputerFrame>
    )
}

const ComputerFrame = styled.div`

  width: 100%;
  height: 100%;

  position: relative;

  background: rgb(190, 186, 180);
  background: linear-gradient(
    94deg,
    rgba(190, 186, 180, 1) 0%,
    rgba(182, 172, 162, 1) 20%,
    rgba(185, 179, 171, 1) 49%,
    rgba(196, 189, 182, 1) 72%,
    rgba(186, 179, 172, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;

`

const ScreenBackground = styled.div`

  width: calc(100% - 40px);
  height: calc(100% - 120px);

  margin: 20px 0 0 0;

  position: relative;

  border: inset 4px rgb(180, 175, 167);
  border-radius: 36px;

  overflow: hidden;

  background: rgb(171, 121, 164);
  background: linear-gradient(
    180deg,
    rgba(171, 121, 164, 1) 18%,
    rgba(186, 173, 204, 1) 47%,
    rgba(109, 190, 221, 1) 100%
  );

`

const scanlines = keyframes`

  0% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }

`

const ScreenOverlay = styled.div`
  position: absolute;

  z-index: 4;

  border-radius: 32px;

  pointer-events: none;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  animation: ${scanlines} 80s linear infinite;

  box-shadow: inset 0 0 24px 8px rgba(3, 2, 19, 0.7);

  background: repeating-linear-gradient(
    rgba(44, 50, 53, 0.15),
    rgba(44, 50, 53, 0.3) 1px,
    transparent 4px
  );

  background-size: 200% 200%;
`

const PositionedAppleLogo = styled(AppleLogo)`
  position: absolute;
  left: 60px;
  bottom: 20px;

`

const pulse = keyframes`
  0% {
    box-shadow: 0 0 1px 2px #cbfd4d, 0 0 2px 4px #beff1bb6;
  }

  50% {
    box-shadow: 0 0 1px 2.5px #c0f833, 0 0 2px 4.5px #b8ff05b6;
  }

  100% {
    box-shadow: 0 0 1px 2px #cbfd4d, 0 0 2px 4px #beff1bb6;
  }
`

const Light = styled.div`

  position: absolute;
  bottom: 50px;
  right: 80px;
  width: 16px;
  height: 6px;
  border-radius: 2px;
  background: #d1ff5d;
  animation: ${pulse} 1.6s ease-in-out infinite;

`
