import Container from '../../../ui/Container/Container'
import { mockData } from './mockData'
import classes from './Intro.module.scss'
import Filter from './Filter/Filter'
import RangeSliders from './RangeSliders/RangeSliders'
import { Button } from '../../../ui/Button/Button'
import {useState} from 'react'
import BreadCrumbs from '../../../ui/BreadCrumbs/BreadCrumbs'

const Intro = () => {
	const [clicked, setClicked] = useState(false);

	return (
		<section className={classes.Section}>
			<Container>
				<div className={classes.Content}>
					{mockData?.crumbs?.length > 0 && <BreadCrumbs list={mockData.crumbs}/>}
					{mockData?.filter?.length > 0 && <Filter data={mockData.filter} />}
					<div className={classes.Footer}>
						{mockData?.range?.length > 0 && <RangeSliders data={mockData.range} />}

						<div className={classes.Btns}>
							<div className={classes.Switch}>
								<p>Рассрочка</p>
								<div className={clicked ? classes.SwitchBtnOn : classes.SwitchBtn} onClick={() => setClicked(!clicked)}></div>
							</div>

							<Button className={classes.Btn}>
								{mockData.btn.title}
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Intro