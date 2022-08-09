import Container from '../../../ui/Container/Container'
import {mockData} from './mockData'
import classes from './Interested.module.scss'
import CartsProduct from '../../../ui/CartsProduct/CartsProduct'

const Interested = () => {
    return (
        <section className={classes.Section}>
            <Container>
                <div className={classes.Content}>
                    <h3>{mockData.title}</h3>
                    <CartsProduct data={mockData.cartsProduct}/>
                </div>
            </Container>
        </section>
    )
}

export default Interested