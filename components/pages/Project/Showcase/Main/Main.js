import {useState} from 'react'
import CartsProduct from '../../../../ui/CartsProduct/CartsProduct';
import classes from './Main.module.scss'

const Main = ({data}) => {
	const [clicked, setClicked] = useState(false);
	return (
		<div className={classes.Content}>
			{data?.title && (
				<div className={classes.Title}>
					<h3>{data.title}</h3>
					<span>{data.count}</span>
				</div>
				
			)}

			<div className={classes.Row}>
				{data?.filters && (
					<div className={classes.Filters}>
						{data.filters.map((item, index) => (
							<div className={classes.Item} key={index}>{item.title}<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
						))}
					</div>
				)}

				<div className={classes.Switch}>
					<p>Рассрочка</p>
					<div className={clicked ? classes.SwitchBtnOn : classes.SwitchBtn} onClick={() => setClicked(!clicked)}></div>
				</div>
			</div>

			<CartsProduct data={data.cartsProduct}/>

		</div>
	)
}

export default Main