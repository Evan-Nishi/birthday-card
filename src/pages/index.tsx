import Layout from '../components/Layout'
import Header from '../components/Header'
import BodyCard from '../components/BodyCard';
import { Link } from '../components/Button'

function Index() {
    return(
        <Layout title="Birthday Card Creator" bgcolors={["rgba(137, 255, 255, 0.75)", "rgba(161, 252, 143, 0.35)", "rgba(255, 167, 137, 1)"]}>
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
                <Link href={"/create"}> generate a new card</Link>.  
                You can also check out the repo <Link href={"https://github.com/Evan-Nishi/birthday-card"}> here </Link>.
            </BodyCard>
        </Layout>
    )
}

export default Index