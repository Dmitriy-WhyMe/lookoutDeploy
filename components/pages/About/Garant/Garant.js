import Container from '../../../ui/Container/Container'
import { mockData } from '../mockData'
import classes from './Garant.module.scss'

const Garant = () => {
    return (
        <section className={classes.Section}>
            <Container>
                {mockData?.garantSection?.title && <h3>{mockData.garantSection.title}</h3>}
                <div className={classes.Row}>
                    {mockData.garantSection.carts.map((item, index) => (
                        <div className={classes.Item} key={index}>
                            {item.svg}
                            <p>{item.title}</p>
                        </div>
					))}
                </div>
            </Container>
        </section>
    )
}

export default Garant