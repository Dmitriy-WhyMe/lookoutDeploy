import Container from '../../../ui/Container/Container'
import Accordion from './Accordion/Accordion'
import {mockData} from './mockData'
import classes from './Description.module.scss'
import Features from './Features/Features'

const Description = () => {
    return (
        <section className={classes.Section}>
            <Container>
                <div className={classes.Content}>
                    <div className={classes.Row}>
                        <Accordion data={mockData.accordion}/>
                        <Features data={mockData.features}/>
                    </div>
                </div>
                <p className={classes.Description}>{mockData?.description && mockData.description}</p>
            </Container>
        </section>
    )
}

export default Description