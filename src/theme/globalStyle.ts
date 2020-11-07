import { createGlobalStyle } from 'styled-components'
//used https://webdevtrick.com/css-gradient-background/ for the background css animation

const GlobalStyle = createGlobalStyle`
    html{
        font-family: sans-serif;
        height: 100vw;
        overflow-x: hidden;
    }
    .flipped{
        transform: rotateY(180deg);
    }
    .centered{
        margin-left: 50vw;
    }
    canvas{
        z-index: 5;
        position: absolute;
        pointer-events: none;
    }
`
export default GlobalStyle