import palette from '../theme/palette'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: white;
    color: ${palette.colors.dark};
    border-radius: 15px;
    margin: auto;
    text-align: center;
    padding: 3vh;
    width: 90vw;
    font-size: 15px;
    border:solid 5px black;
`
export default function BodyCard(props){
    return(
        <Wrapper>
            <p>{props.children}</p>
        </Wrapper>
    )
}