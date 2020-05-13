import React from 'react'

import styled from 'styled-components'

export default function AppleLogo(props) {
    return (
        <Logo className={props.className} >
            <Apple color="#5ebd3e" clip="0"></Apple>
            <Apple color="#ffb900" clip="43"></Apple>
            <Apple color="#f78200" clip="51"></Apple>
            <Apple color="#e23838" clip="59"></Apple>
            <Apple color="#973999" clip="67"></Apple>
            <Apple color="#009cdf" clip="75"></Apple>
        </Logo>
    )
}

const Logo = styled.div`

    width: 60px;
    height: 60px;

    background: rgb(170, 166, 159);
    border-radius: 4px;
    box-shadow: inset 1px 1px 4px rgba(41, 37, 37, 0.705);

`

const Apple = styled.div`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
    
    font-size: 62px;
    text-shadow: 1px 1px 1px rgba(51, 46, 38, 0.25);

    color: ${props => props.color};
    clip-path: polygon(0 ${props => props.clip}%, 100% ${props => props.clip}%, 100% 100%, 0 100%);
`


