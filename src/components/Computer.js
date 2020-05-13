import React from 'react'

import styled, {keyframes} from 'styled-components'

export default function Computer(props) {
    return (
        <ComputerFrame>
            <ScreenBackground>

            </ScreenBackground>
            {props.children}
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


`

const ScreenOverlay = styled.div``


const AppleLogo = styled.div``


const Light = styled.div``
