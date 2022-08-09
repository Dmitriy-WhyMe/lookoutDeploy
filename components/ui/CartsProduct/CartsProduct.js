import CartProduct from './CartProduct/CartProduct'
import classes from './CartsProduct.module.scss'

const CartsProduct = ({data}) => {
	return (
		<div className={classes.Block}>
			{data.map((item, index) => (
				<CartProduct key={index} data={item}/>
			))}
		</div>
	)
}

export default CartsProduct