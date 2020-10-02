import Layout from '../components/Layout'
import Header from '../components/Header'
import BodyCard from '../components/BodyCard';
import Spacer from '../components/Spacer'
import { Link } from '../components/Button'

function Index() {
    return(
        <Layout title="Birthday Card Creator">
        <br/>
        <Header>
            Birthday Card Generator
        </Header>
        <Spacer height={5}/>
        <BodyCard>
            Hai this is a small project that I made that automatically generates birthday cards.
            Click here to 
            <Link href={"/create"}> generate a new card</Link>
        </BodyCard>
        </Layout>
    )
}

export default Index