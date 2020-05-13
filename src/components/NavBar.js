import React from 'react'

import styled from 'styled-components'

export default function NavBar(props) {
    return (
        <Bar>

        </Bar>
    )
}

const Bar = styled.nav`
    width: 100%;
    height: 24px;
    background: white;
    border-bottom: 1px solid rgba(90, 90, 90, 0.6);

    padding: 0 32px;
    font-family: "VT323", monospace;
    font-weight: 700;
    display: flex;
    align-items: center;
`
