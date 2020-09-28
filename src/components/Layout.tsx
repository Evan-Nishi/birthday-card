import Footer from'./Footer'
import Head from 'next/head'
import styled from 'styled-components'

interface WrapperProps {
    readonly bgcolors: []
}

export const Wrapper = styled.div<WrapperProps>`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, ${props => props.bgcolors || "rgba(137,255,255,0.75), rgba(161,252,143, 0.25),rgba(255,167,137, 1)"});
`


function Layout(props){
    return(
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
    )
}

export default Layout