import Container from '../../../ui/Container/Container'
import { mockData } from './mockData'
import IconMap from '../../../icons/IconMap'
import IconFavourite from '../../../icons/IconFavourite'
import IconBell from '../../../icons/IconBell'
import IconSelect from '../../../icons/IconSelect'
import { Button } from '../../../ui/Button/Button'
import classes from './TopBlock.module.scss'
import SelectCustom from '../../../ui/SelectCustom/SelectCustom'
import { useState } from 'react'
import BreadCrumbs from '../../../ui/BreadCrumbs/BreadCrumbs'

const TopBlock = () => {

	const [filter, setFilter] = useState({
        currency: mockData?.currency?.[0]
    })

	const onChangeFilter = (nameField, valueField) => {
        setFilter((prev) => ({ ...prev, [nameField]: valueField }))
    }

	return (
		<section className={classes.Section}>
			<Container>
				{mockData?.crumbs?.length > 0 && <BreadCrumbs list={mockData.crumbs}/>}

				<div className={classes.RowOne}>
					<div className={classes.Id}>ID: <b>{mockData.id}</b></div>
					<div className={classes.MapTag}><IconMap/> {mockData.mapTag}</div>
				</div>

				<div className={classes.RowTwo}>
					<button className={classes.Favourite}><IconFavourite/>Добавить в избранное</button>
					<button className={classes.Bell}><IconBell/>{mockData.bell}</button>
				</div>

				<div className={classes.RowThree}>
					<h3>{mockData.title}</h3>
					<div className={classes.Price}>
						{mockData?.currency?.length > 0 && (
                            <SelectCustom
                                className={`${classes.ControlSelect} ${classes.Currency}`}
                                options={mockData.currency}
                                placeholder={'Город'}
                                activeValue={filter.currency}
                                onChangeFilter={onChangeFilter}
                                onChange={(obj) => onChangeFilter('currency', obj)}
                            />
                        )}

					</div>
				</div>

				<div className={classes.RowFour}>
					<Button className={classes.Btn}>
                        {mockData.btnTitle}
                    </Button>
				</div>

				<div className={classes.Benefits}>
					{mockData.benefits.map((item, index) => (
                        <div className={classes.BenefitsItem} key={index}>{item.ico}{item.title}</div>
                    ))}
				</div>
			</Container>
		</section>
	)
}

export default TopBlock