import Container from '../../../ui/Container/Container'
import { mockData } from '../mockData'
import classes from './Service.module.scss'

const Service = () => {
    return (
        <section className={classes.Section}>
            <Container>
                {mockData?.serviceSection?.title && <h3>{mockData.serviceSection.title}</h3>}
                <div className={classes.Row}>
                    {mockData.serviceSection.carts.map((item, index) => (
                        <div className={classes.Item} key={index}>
                            <div className={classes.Number}>{item.number}</div>
                            <p>{item.text}</p>
                        </div>
					))}
                </div>
            </Container>
        </section>
    )
}

export default Service