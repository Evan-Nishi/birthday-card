import { createGlobalStyle } from 'styled-components'
import palette from '../theme/palette'
//used https://webdevtrick.com/css-gradient-background/ for the background css animation

const GlobalStyle = createGlobalStyle`
    html{
        font-family: sans-serif;
        background: linear-gradient(45deg, rgba(137,255,255,0.75), rgba(161,252,143, 0.25),rgba(255,167,137, 1));
        background-size: 400% 400%;
        -webkit-animation: gradientBG 20s ease infinite;
        animation: gradientBG 20s ease infinite;
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
    @-webkit-keyframes gradientBG {
	    0% {
		    background-position: 0% 50%;
	    }
	    50% {
	    	background-position: 100% 50%;
	    }
	    100% {
	    	background-position: 0% 50%;
	    }
    }
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`
export default GlobalStyle