import Layout from '../components/help/Layout/Layout'
import Contacts from './../components/pages/Main/Contacts/Contacts'
import Consultation from '../components/pages/Main/Consultation/Consultation'
import Footer from '../components/ui/Footer/Footer'
import Picking from '../components/ui/Picking/Picking'
import Intro from '../components/pages/About/Intro/Intro'
import Service from '../components/pages/About/Service/Service'
import Expertise from '../components/pages/About/Expertise/Expertise'
import Garant from '../components/pages/About/Garant/Garant'

export default function Guide() {
    return (
        <Layout title='О компании' description='О компании'>
            <Intro />
            <Service />
            <Expertise />
            <Garant />
            <Picking />
            <Consultation />
            <Contacts />
            <Footer />
        </Layout>
    )
}
