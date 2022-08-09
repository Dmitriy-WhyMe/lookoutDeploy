import classes from './CartProduct.module.scss'
import NextImage from 'next/image'
import Link from 'next/link'
import IconArrowRight from '../../../icons/IconArrowRight'
import IconSelect from '../../../icons/IconSelect'
import IconFavourite from '../../../icons/IconFavourite'
import SelectCustom from '../../SelectCustom/SelectCustom'
import { useState } from 'react'

const CartProduct = ({data}) => {
    const [filter, setFilter] = useState({
        currency: data?.currency?.[0]
    })

	const onChangeFilter = (nameField, valueField) => {
        setFilter((prev) => ({ ...prev, [nameField]: valueField }))
    }
  return (
    <div className={classes.Item}>
        <div className={classes.ImgBlock}>
            {data?.img && (
                <div className={classes.ItemImage}>
                    <NextImage
                        src={data.img}
                        alt=''
                        quality={95}
                    />
                </div>
            )}
            <button className={classes.Call}>Связаться</button>
            <button className={classes.Favourites}><IconFavourite/></button>

        </div>

        <div className={classes.Content}>
            {data?.bonus && (
                <div className={classes.Bonus}>{data.bonus}</div>
            )}
            {data?.title && (
                <div className={classes.Title}>{data.title}</div>
            )}
            {data?.id && (
                <div className={classes.Id}><p>ID:</p><b>{data.id}</b></div>
            )}
            {data?.type && (
                <div className={classes.Type}><p>Тип недвижимости:</p><b>{data.type}</b></div>
            )}
            {data?.area && (
                <div className={classes.Area}><p>Площадь:</p><b>{data.area}</b></div>
            )}
            {data?.terrace && (
                <div className={classes.Terrace}><p>Терраса:</p><b>{data.terrace}</b></div>
            )}
            {data?.section && (
                <div className={classes.Section}><p>Участок:</p><b>{data.section}</b></div>
            )}
        </div>

        <div className={classes.Row}>
            <div className={classes.Flex}>
                {data?.section && (
                    <div className={classes.Price}>{data.price}</div>
                )}
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
            <Link href={data.link}><a><IconArrowRight/></a></Link>
        </div>
    </div>
  )
}

export default CartProduct