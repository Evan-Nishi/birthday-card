import styled from 'styled-components'
import { useState, useEffect } from 'react'

//this is very messy please fix soon
interface FlipProps {
  flipped:boolean
}

const Wrapper = styled.div<FlipProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: -1rem 4px 8px 0 rgba(0,0,0,0.2);
  transform-origin: 0% 100%;
  transform: rotateY(-${props => props.flipped ? 180 : 0}deg);
`
export function FlipWrapper(props){
  const [isFlipped, setFlipped] = useState<boolean>(false)
  
  return(
    <Wrapper onClick={() => {setFlipped(!isFlipped)}} flipped={isFlipped}>
      {props.children}
    </Wrapper>
  )
}

export const Front = styled.div`
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
  border-width: 0.3vw;
  border-style: solid;
  border-color: black;
  background-color:white;
  width: 100%;
  margin:0 auto;
  float: left;
  height: 100%;
  @media screen and (max-width: 800px){
    border-width: .75vw;
    width: 48.3%;
  }

`

export const Back = styled(Front)`
  transform: rotateY(180deg);
`