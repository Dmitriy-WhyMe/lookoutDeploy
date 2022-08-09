import Intro from '../components/pages/Main/Intro/Intro'
import Layout from '../components/help/Layout/Layout'
import Contacts from './../components/pages/Main/Contacts/Contacts'
import Projects from '../components/pages/Main/Projects/Projects'
import Consultation from '../components/pages/Main/Consultation/Consultation'
import Advantages from '../components/pages/Main/Advantages/Advantages'
import Consulting from '../components/pages/Main/Consulting/Consulting'
import Immigration from '../components/pages/Main/Immigration/Immigration'
import Partners from '../components/pages/Main/Partners/Partners'
import About from '../components/pages/Main/About/About'
import News from '../components/pages/Main/News/News'
import Subscribe from '../components/pages/Main/Subscribe/Subscribe'
import PartnersList from '../components/pages/Main/PartnersList/PartnersList'
import Footer from '../components/ui/Footer/Footer'

export default function Home() {
    return (
        <Layout title='LOOKOUT' description='LOOKOUT'>
            <Intro />
            <Projects />
            <Consultation />
            <Advantages />
            <Consulting />
            <Immigration />
            <Partners />
            <About />
            <News />
            <Subscribe />
            <PartnersList />
            <Contacts />
            <Footer />
        </Layout>
    )
}
