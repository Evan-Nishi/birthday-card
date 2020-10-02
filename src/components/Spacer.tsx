import styled from 'styled-components'

interface SpacerProps {
    readonly height: number
}

const Spacer = styled.br<SpacerProps>`
    height: ${props => props.height}vh;
`

export default Spacer