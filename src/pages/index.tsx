import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import Button from '../components/Button'

function Index() {
    return(
        <Layout title="Birthday Card Creator">
        <br/>
        <Header>
            Birthday Card Generator
        </Header>
            <Card></Card>
        </Layout>
    )
}

export default Index