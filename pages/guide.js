import Layout from '../components/help/Layout/Layout'
import Contacts from './../components/pages/Main/Contacts/Contacts'
import Consultation from '../components/pages/Main/Consultation/Consultation'
import Footer from '../components/ui/Footer/Footer'
import Intro from '../components/pages/Guide/Intro/Intro'
import Purchase from '../components/pages/Guide/Purchase/Purchase'
import Projects from '../components/pages/Guide/Projects/Projects'
import AboutCountry from '../components/pages/Guide/AboutCountry/AboutCountry'
import Picking from '../components/ui/Picking/Picking'

export default function Guide() {
    return (
        <Layout title='Страница гида с поисковой выдачей проектов - Кипр' description='Страница гида с поисковой выдачей проектов - Кипр'>
            <Intro />
            <Purchase />
            <Projects />
            <AboutCountry />
            <Picking />
            <Consultation />
            <Contacts />
            <Footer />
        </Layout>
    )
}
