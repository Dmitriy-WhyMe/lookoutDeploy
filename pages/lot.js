import Layout from '../components/help/Layout/Layout'
import Contacts from './../components/pages/Main/Contacts/Contacts'
import Consultation from '../components/pages/Main/Consultation/Consultation'
import Footer from '../components/ui/Footer/Footer'
import Picking from '../components/ui/Picking/Picking'
import TopBlock from '../components/pages/Lot/TopBlock/TopBlock'
import Slider from '../components/pages/Lot/Slider/Slider'
import Description from '../components/pages/Lot/Description/Description'
import Map from '../components/pages/Lot/Map/Map'
import Interested from '../components/pages/Lot/Interested/Interested'

export default function Guide() {
    return (
        <Layout title='Страница лота-Кипр' description='Страница лота-Кипр'>
            <TopBlock />
            <Slider />
            <Description />
            <Map/>
            <Interested />
            <Picking />
            <Consultation />
            <Contacts />
            <Footer />
        </Layout>
    )
}
