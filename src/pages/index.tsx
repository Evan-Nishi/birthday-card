import Layout from '../components/Layout'
import Header from '../components/Header'
import BodyCard from '../components/BodyCard';
import { Link } from '../components/Button'

function Index() {
    return(
        <Layout title="Birthday Card Creator" bgcolors={"rgba(137, 255, 255, 0.75), rgba(161, 252, 143, 0.35), rgba(255, 167, 137, 1)"}>
            <br/>
            <Header>
                Birthday Card Generator
            </Header>
            <br/>
            <br/>
            <br/>
            <BodyCard>
                Hai this is a small project that I made that automatically generates birthday cards.
                Click here to 
                <Link href={"/happy-birthday/example"}> view an example Card</Link>.  
                You can also check out the repo <Link href={"https://github.com/Evan-Nishi/birthday-card"}> here </Link>.
                This project was made with nextjs, typescript, mongodb, and styled-components and was mainly a way for me to
                toy around with serverless functions.
            </BodyCard>
            <br/>
            <br/>
            <br/>
            <BodyCard>
                Here is an example POST request for creating a card sent to https://bday.evannishi.me/api/config/
                <br/>
                <code>
                    {"{"}
                    "roomcode": "example", {"\n"}
                    "name": "Evan", {"\n"}
                    "date": "5/3/2022", {"\n"}
                    "old": "18", {"\n"}
                    "bgcolors": ["#AA4465","#FFA69E","#DDFFF7","#93E1D8"], {"\n"}
                    "email": {"\n"}
                    "evan@evannishi.me",{"\n"}
                    "password":"examplepass" {"\n"}
                    {"}"}
                </code>
            </BodyCard>
            <br/>
            <br/>
            <br/>
            <BodyCard>
                And for creating a message sent to https://bday.evannishi.me/api/signatures/example
                <br/>
                <code>
                    {"{"}
                    "first": "Evan",
                    "last": "Nishi",
                    "message": "Testing, testing, testing"
                    {"}"}
                </code>
            </BodyCard>
        </Layout>
    )
}

export default Index
