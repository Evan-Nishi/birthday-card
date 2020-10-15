import Footer from'./Footer'
import Head from 'next/head'
import styled from 'styled-components'

interface WrapperProps {
    readonly bgcolors: []
}

export const Wrapper = styled.html<WrapperProps>`
    overflow-x: hidden;
    position: absolute;
    width: 120vw;
    height: 120vh;
    background: linear-gradient(45deg, ${props => props.bgcolors.toString() || "white"});
    background-size: 400% 400%;
    -webkit-animation: gradientBG 20s ease infinite;
    animation: gradientBG 20s ease infinite;
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


function Layout(props){
    return(
        <Wrapper bgcolors={props.bgcolors}>
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet"></link>
                    <title>{props.title}</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
                </Head>
                <div style={{position:"absolute",top:0,left:0,width:"100vw"}}>
                    <div id='content'>
                        {props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Layout