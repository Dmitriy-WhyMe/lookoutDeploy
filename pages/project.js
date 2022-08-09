import Layout from '../components/help/Layout/Layout'
import Contacts from './../components/pages/Main/Contacts/Contacts'
import Consultation from '../components/pages/Main/Consultation/Consultation'
import Footer from '../components/ui/Footer/Footer'
import Picking from '../components/ui/Picking/Picking'
import Intro from '../components/pages/Project/Intro/Intro'
import Showcase from '../components/pages/Project/Showcase/Showcase'

export default function Project() {
    return (
        <Layout title='Страница проекта с фильтрами и списком лотов-Кипр' description='Страница проекта с фильтрами и списком лотов-Кипр'>
            <Intro />
            <Showcase />
            <Picking />
            <Consultation />
            <Contacts />
            <Footer />
        </Layout>
    )
}
