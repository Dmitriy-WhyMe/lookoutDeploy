import { useState } from 'react'
import IconSelect from '../../../../icons/IconSelect'
import SelectCustom from '../../../../ui/SelectCustom/SelectCustom'
import classes from './Features.module.scss'

const Features = ({data}) => {

    const [filter, setFilter] = useState({
        currency: data?.currency?.[0]
    })

	const onChangeFilter = (nameField, valueField) => {
        setFilter((prev) => ({ ...prev, [nameField]: valueField }))
    }

  return (
    <div className={classes.Features}>
        <h3>{data?.title && data.title}</h3>
        <div className={classes.Text}>
            {data?.area &&
                <div className={classes.Item}>
                    <div className={classes.Left}>Площадь</div>
                    <div className={classes.Right}>{data.area}</div>
                </div>
            }
            {data?.floors &&
                <div className={classes.Item}>
                    <div className={classes.Left}>Этажей</div>
                    <div className={classes.Right}>{data.floors}</div>
                </div>
            }
            {data?.rooms &&
                <div className={classes.Item}>
                    <div className={classes.Left}>Комнатность</div>
                    <div className={classes.Right}>{data.rooms}</div>
                </div>
            }
            {data?.trim &&
                <div className={classes.Item}>
                    <div className={classes.Left}>Отделка</div>
                    <div className={classes.Right}>{data.trim}</div>
                </div>
            }
            {data?.furniture &&
                <div className={classes.Item}>
                    <div className={classes.Left}>Мебель</div>
                    <div className={classes.Right}>{data.furniture}</div>
                </div>
            }
            {data?.price &&
                <div className={classes.Item}>
                    <div className={classes.Left}>Цена за м2</div>
                    <div className={classes.Price}>
						<div className={classes.Count}>{data.price}</div>
						{data?.currency?.length > 0 && (
                            <SelectCustom
                                className={`${classes.ControlSelect} ${classes.Currency}`}
                                options={data.currency}
                                placeholder={'Руб'}
                                activeValue={filter.currency}
                                onChangeFilter={onChangeFilter}
                                onChange={(obj) => onChangeFilter('currency', obj)}
                            />
                        )}
					</div>
                </div>
            }
        </div>
    </div>
  )
}

export default Features