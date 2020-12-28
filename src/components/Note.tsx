import styled from 'styled-components'
import palette from '../theme/palette'


export const Signature = styled.h3`
  padding-left: 3vw;
  margin:0 auto;
  font-size: 1vw;
  font-family: 'Mr Dafoe', cursive;
  color: ${palette.colors.dark};
`

const BodyWrapper = styled.div`
  margin:0 auto;
  width: 85%;
  font-size: 1vw;
`

export function Body(props){
  return(
    <BodyWrapper>
      <p>{props.message}</p>
      <Signature>-{props.author}</Signature>
    </BodyWrapper>
  )
}
