import Container from '../../../ui/Container/Container'
import { mockData } from './mockData'
import IconMap from '../../../icons/IconMap'
import IconList from '../../../icons/IconList'
import CartsProduct from '../../../ui/CartsProduct/CartsProduct'
import classes from './Purchase.module.scss'

const Purchase = () => {
  return (
    <section className={classes.Section}>
        <Container>
            <div className={classes.Row}>
                <div className={classes.Title}>
                    <h2>{mockData?.titlePage ? mockData.titlePage.title : "Покупка недвижимости на Кипре"}</h2>
                    <span>{mockData?.titlePage ? mockData.titlePage.count : "0"}</span>
                </div>

                <div className={classes.Tabs}>
                    <button>списком<IconList/></button>
                    <button>на карте<IconMap/></button>
                </div>
            </div>
            
            <CartsProduct data={mockData.cartsProduct}/>
        </Container>
    </section>
  )
}

export default Purchase