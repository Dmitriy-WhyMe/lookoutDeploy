import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'
import {mockData} from './mockData'
import classes from './Showcase.module.scss'

const Showcase = () => {
    return (
        <section className={classes.Section}>
            <Sidebar data={mockData.sidebar}/>
            <Main data={mockData.main}/>
        </section>
    )
}

export default Showcase