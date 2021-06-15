import Layout, {Wrapper} from '../../components/Layout'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Timer from '../../components/Countdown'
import { FlipWrapper, Front, Back } from '../../components/Page'
import { useState, useEffect } from 'react'
import ConfettiGenerator from 'confetti-js'
import Button from '../../components/Button'
import Head from 'next/head'
import { Body } from '../../components/Note';
import Image  from 'next/image'

Page.getInitialProps = async ({ query: { roomcode } }) => {
    let config, signatures
    try{
        let [conf, sig] = await Promise.all([
            fetch(`https://bday-generator.vercel.app/api/config/${roomcode}`),
            fetch(`https://bday-generator.vercel.app/api/signatures/${roomcode}`)
        ])
        config = await conf.json()
        signatures = await sig.json()
        
    } catch (error) {
        console.log(error)
    }
    return({config: config, signatures: signatures})
}
/*function checkOverFlow(element, signatures){
    let container = document.getElementById(element)
    return (container.clientHeight < container.scrollHeight) //only care about height
}*/

function Page({ config, signatures }){
    let date = ( config ? new Date(config.data.date): new Date("0"))
    console.log(config.data)
    let yearOld = config.data.old
    if( !config ){
        return(
            <Layout title={'room code not found'} bgcolors={["white"]}>
                <h1>Roomcode not found</h1>
            </Layout>
        )
    }
    else if(Date.now() < date.getTime()){
        return(
            <Layout title={'No peeking!'} bgcolors={config.data.bgcolors.toString()}>
                <br/>
                <h1>It's not {config.data.name}'s birthday yet!</h1>
                <br/>
                <br/>
                <br/>
                <Timer activationDate={date}>Until {config.data.name}'s birthday</Timer>
            </Layout>
        )
    }
    else{
        let suf = ''
        console.log("years old: " + yearOld)
        console.log("bgcolors" + config.data.bgcolors)

        //this is horrible
        if(yearOld >= 11 && yearOld <= 13){
            suf = 'th'
        } else if(yearOld % 10 == 3){
            suf = 'rd'
        } else if(yearOld % 10 == 2){
            suf = 'nd'
        } else if(yearOld % 10 == 1){
            suf = 'st'
        } else {
            suf = 'th'
        }
        //console.log(signatures)
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
            <Wrapper bgcolors={config.data.bgcolors.toString()}>
                <Head>
                    <title>🎉Happy {yearOld.toString() + suf} Birthday {config.data.name}!!!🎉</title>
                </Head>
                <canvas id="confetti-card"/>
                <br/>
                <Header>🎉Happy Birthday {config.data.name}!!!🎉</Header>
                <br/>
                <div style={{marginLeft:"5vw", width: "5vw", height: "1vh"}}>
                    <h4>Confetti: </h4>
                    <Button onClick={() => setConfetti(!confettiOn)}>{confettiOn ? "on":"off"}</Button>
                </div>
                <Card>
                    <FlipWrapper>
                        <Front>
                            <p>Also sorry that this is so broken 🙈</p>
                        </Front>
                        <Back>
                        </Back>
                    </FlipWrapper>
                    <FlipWrapper>
                        <Front>
                            <h3>Happy Birthday {config.data.name}!</h3>
                            <Image 
                                src={config.data.front}
                                width= {"50%"}
                                height= {"50%"}
                            />
                        </Front>
                        <Back>
                            <Body author={signatures.data[0].first_name} message={signatures.data[0].message}></Body>
                        </Back>
                    </FlipWrapper>
                </Card>
                <br/>
                <br/>
                <br/>
            </Wrapper>
        )
    }
}

export default Page
