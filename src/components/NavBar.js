import React from 'react'

import styled from 'styled-components'

export default function NavBar(props) {
    return (
        <Bar>
            <span></span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Special</span>

        </Bar>
    )
}

const Bar = styled.nav`
    width: 100%;
    height: 24px;
    background: white;
    border-bottom: 2px solid #333;

    padding: 0 32px;
    
    display: flex;
    align-items: center;

    & > span {
        font-family: 'VT323', monospace;
        color: #333;
        margin: 0 0 0 16px;
        font-weight: 700;
        letter-spacing: 2px;
    }
`
