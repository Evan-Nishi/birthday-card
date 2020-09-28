import Layout from '../components/Layout'
import Header from '../components/Header'
import { Link } from '../components/Button'
import BodyCard from '../components/BodyCard';
function Error() {
    return(
        <Layout title="Error">
        <br/>
        <Header>
            404 Page Not Found
        </Header>
        <br/>
        <BodyCard>
            <p>The page you were looking for wasn't found.  If you think it's an error on our end,
            feel free to email us </p><Link href={'mailto:evan@evannishi.me'}>here</Link>
        </BodyCard>
        </Layout>

    )
}

export default Error