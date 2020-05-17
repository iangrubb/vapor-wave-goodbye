import React from 'react'

import styled, { css } from 'styled-components'

import Dolphin from './PlaneComponents/Dolphin'
import Building from './PlaneComponents/Building'
import Palm from './PlaneComponents/Palm'
import Bars from './PlaneComponents/Bars'
import Statue from './PlaneComponents/Statue'
import Matt from './PlaneComponents/Matt'

export default function PerspectivePlane() {
    return (
        <Floor>
            <Sun lift="62%" top="0" left="10%"/>

            <PopBuilding lift="130%" top="34%" right="16%" />

            <PopDolphin lift="50%" top="48%" left="63%" size="21vw"/>
            <PopDolphin lift="50%" top="38%" left="60%" size="10vw"/>
            <PopDolphin lift="50%" top="28%" left="35%" size="12vw"/>
            <PopDolphin lift="50%" top="28%" left="20%" size="10vw"/>
            <PopDolphin lift="50%" top="28%" left="20%" size="10vw"/>
            <PopDolphin lift="50%" top="58%" left="30%" size="18vw"/>
            <PopDolphin lift="50%" top="46%" left="12%" size="10vw"/>
            
            <PopPalm lift="100%" top="43%" left="3%" size="14%"/>
            <PopPalm lift="100%" top="30%" left="6%" size="12%"/>
            <PopPalm lift="100%" top="20%" left="13%" size="10%"/>

            <PopPalm lift="100%" top="14%" left="6%" size="8%"/>
            <PopPalm lift="100%" top="12%" left="16%" size="6%" disappear/>
            <PopPalm lift="100%" top="16%" left="22%" size="10%" />
            <PopPalm lift="100%" top="12%" left="36%" size="8%" />
            <PopPalm lift="100%" top="16%" left="42%" size="7%" disappear/>
            <PopPalm lift="100%" top="70%" left="6%" size="14%" disappear/>

            <PopBars lift="50%" top="43%" left="35%"/>

            <PopStatue lift="100%" top="14%" right="48%"/>

            <PopMatt lift="100%" top="64%" left="12%"/>

            {/* <PopGifMonitor lift="140%" top="72%" left="11%"/> */}

        </Floor>
    )
}

const Floor = styled.div`

    position: absolute;
    bottom: -10vh;
    left: 20vw;
    right: -20vw;
    height: 80%;

    background-image:
        linear-gradient(45deg, #9ce4d4 25%, transparent 25%),
        linear-gradient(-45deg, #9ce4d4 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #9ce4d4 75%),
        linear-gradient(-45deg, transparent 75%, #9ce4d4 75%)
    ;
    background-size: 80px 80px;
    background-position: 0 0, 0 40px, 40px -40px, -40px 0px;

    transform: perspective(calc((300px + 10vw) / 2)) rotateX(40deg);
    transform-style: preserve-3d;

`

const popUp = css`
    position: absolute;
    transform-origin: 0% 0%;
    transform: rotateX(-40deg) translateY(-${props=>props.lift});
    top: ${props=>props.top};
    bottom: ${props=>props.bottom};
    left: ${props=>props.left};
    right: ${props=>props.right};
`


const Sun = styled.div`

    ${popUp}
    
    min-width: 200px;
    width: 40vw;
    min-height: 200px;
    height: 40vw;
    border-radius: 50%;
    
    background: rgb(255, 240, 177);
    background: linear-gradient(
    180deg,
    rgba(255, 240, 177, 1) 10%,
    rgba(246, 216, 180, 1) 36%,
    rgba(255, 126, 180, 1) 36%,
    rgba(255, 126, 180, 1) 38%,
    rgba(243, 208, 181, 1) 38%,
    rgba(241, 202, 182, 1) 43%,
    rgba(255, 126, 180, 1) 43%,
    rgba(255, 126, 180, 1) 46%,
    rgba(238, 195, 182, 1) 46%,
    rgba(236, 190, 183, 1) 50%,
    rgba(255, 126, 180, 1) 51%,
    rgba(255, 126, 180, 1) 55%,
    rgba(235, 185, 183, 1) 55%,
    rgba(233, 181, 184, 1) 60%,
    rgba(255, 126, 180, 1) 60%,
    rgba(255, 126, 180, 1) 65%,
    rgba(232, 176, 185, 1) 65%,
    rgba(230, 170, 186, 1) 70%,
    rgba(255, 126, 180, 1) 70%,
    rgba(255, 126, 180, 1) 76%,
    rgba(229, 165, 187, 1) 76%,
    rgba(225, 157, 188, 1) 81%,
    rgba(255, 126, 180, 1) 81%,
    rgba(255, 126, 180, 1) 86%,
    rgba(221, 149, 189, 1) 87%,
    rgba(220, 147, 189, 1) 90%,
    rgba(255, 126, 180, 1) 91%,
    rgba(255, 126, 180, 1) 97%,
    rgba(220, 146, 189, 1) 97%,
    rgba(219, 144, 190, 1) 100%
    );
`

const PopDolphin = styled(Dolphin)`
    ${popUp}
`

const PopBuilding = styled(Building)`
    ${popUp}
`

const PopPalm = styled(Palm)`
    ${popUp}
    min-width: 40px;
`

const PopBars = styled(Bars)`
    ${popUp}
`

const PopStatue = styled(Statue)`
    ${popUp}
    width: 10vw;
    min-width: 80px;
`

const PopMatt = styled(Matt)`
    ${popUp}
    width: 10vw;
    min-width: 70px;
`
