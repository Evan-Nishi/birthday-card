import Layout, {Wrapper} from '../../components/Layout'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Timer from '../../components/Countdown'
import { FlipWrapper, Front, Back } from '../../components/Page'
import { useState, useEffect } from 'react'
import ConfettiGenerator from 'confetti-js'
import Button from '../../components/Button'
import Head from 'next/head'

Page.getInitialProps = async ({ query: { roomcode } }) => {
    const res = await fetch(`http://localhost:3000/api/config/${roomcode}`)
    const { data } =  await res.json()
    const signatures = await fetch(`https://localhost:300/api/config/${roomcode}`)
    return({config: data})
}

function Page({ config }){
    let date = ( config ? new Date(config.date): new Date("0"))
    if( !config ){
        return(
            <Layout title={'room code not found'} bgcolors={["white"]}>
                <h1>Roomcode not found</h1>
            </Layout>
        )
    }
    else if(Date.now() < date.getTime()){
        return(
            <Layout title={'No peeking!'} bgcolors={config.bgcolors.toString()}>
                <br/>
                <Header>It's not {config.name}'s birthday yet!</Header>
                <br/>
                <br/>
                <br/>
                <Timer activationDate={date}>Until {config.name}'s birthday</Timer>
            </Layout>
        )
    }
    else{
        const [confettiOn, setConfetti] = useState<boolean>(true)
        useEffect(() => {
            const confettiSettings = { target: 'confetti-card', respawn: true, start_from_edge: true, max: 100}
            const confetti = new ConfettiGenerator(confettiSettings)
            
            if(!confettiOn){
                confetti.clear()
            } else {
                confetti.render()
            }
            return () => confetti.clear()
        })
        return(
            <Wrapper bgcolors={config.bgcolors}>
                <Head>
                    <title>🎉Happy Birthday {config.name}!!!🎉</title>
                </Head>
                <canvas id="confetti-card"/>
                <br/>
                <Header>🎉Happy Birthday {config.name}!!!🎉</Header>
                <br/>
                <div style={{marginLeft:"5vw", width: "5vw"}}>
                    <h4>Confetti: </h4>
                    <Button onClick={() => setConfetti(!confettiOn)}>{confettiOn ? "on":"off"}</Button>
                </div>
                <Card>
                    <FlipWrapper>
                        <Front>
                            <p>Hai</p>
                        </Front>
                        <Back>
                            <p>Hai</p>
                        </Back>
                    </FlipWrapper>
                </Card>
                <br/>
            </Wrapper>
        )
    }
}

export default Page