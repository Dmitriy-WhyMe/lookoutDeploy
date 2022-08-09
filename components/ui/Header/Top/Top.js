import { useState, useContext } from 'react'
import IconLogo from '../../../icons/IconLogo'
import SelectCustom from '../../SelectCustom/SelectCustom'
import classes from './Top.module.scss'
import cn from 'classnames'
import IconGeo from '../../../icons/IconGeo'
import { Button } from '../../Button/Button'
import { FormContext } from '../../../../context'
import IconSearch from '../../../icons/IconSearch'

function Top({ data }) {
    const { showModal, onOpenModal, onCloseModal } = useContext(FormContext)

    const [filter, setFilter] = useState({
        language: null,
        city: null,
        currency: data?.currency?.[0]
    })

    const onChangeFilter = (nameField, valueField) => {
        setFilter((prev) => ({ ...prev, [nameField]: valueField }))
    }

    const handlerToggleMenu = () => {
        if (showModal === 'menu') {
            return onCloseModal()
        }

        onOpenModal('menu')
    }

    return (
        <div className={classes.Top}>
            <div className={classes.Col}>
                <div
                    className={cn(classes.Burger, {
                        [classes.Active]: showModal === 'menu'
                    })}
                    onClick={handlerToggleMenu}
                >
                    <span className={classes.BurgerLine} />
                    <span className={classes.BurgerLine} />
                    <span className={classes.BurgerLine} />
                </div>

                <IconLogo className={classes.Logo} />

                {(data?.languages?.length > 0 || data?.citys?.length > 0) && (
                    <div className={classes.Control}>
                        {data?.languages?.length > 0 && (
                            <SelectCustom
                                className={classes.ControlSelect}
                                activeValue={filter.language}
                                options={data.languages}
                                placeholder={'Язык'}
                                onChange={(obj) => onChangeFilter('language', obj)}
                            />
                        )}

                        {data?.citys?.length > 0 && (
                            <SelectCustom
                                className={classes.ControlSelect}
                                options={data.citys}
                                placeholder={'Страна'}
                                onChangeFilter={onChangeFilter}
                                onChange={(obj) => onChangeFilter('city', obj)}
                            />
                        )}

                        {data?.currency?.length > 0 && (
                            <SelectCustom
                                className={`${classes.ControlSelect} ${classes.Currency}`}
                                options={data.currency}
                                placeholder={'Город'}
                                activeValue={filter.currency}
                                onChangeFilter={onChangeFilter}
                                onChange={(obj) => onChangeFilter('currency', obj)}
                            />
                        )}
                    </div>
                )}
            </div>

            {data?.address && (
                <div className={classes.Address}>
                    <IconGeo />
                    <div dangerouslySetInnerHTML={{ __html: data.address }} />
                </div>
            )}

            <div className={classes.Col}>
                {(data?.phone || data?.btnCall) && (
                    <div className={classes.PhoneBlock}>
                        {data?.phone && (
                            <a className={classes.Phone} href={data.phone}>
                                {data.phone}
                            </a>
                        )}

                        {data?.btnCall && (
                            <button className={classes.Call} onClick={() => onOpenModal('call')}>
                                {data.btnCall}
                            </button>
                        )}
                    </div>
                )}

                {data?.btnSend && (
                    <Button className={classes.BtnPopup} onClick={() => onOpenModal('request')} outline>
                        {data.btnSend}
                    </Button>
                )}

                <Button className={classes.BtnSearch}>
                    <IconSearch />
                </Button>
            </div>
        </div>
    )
}

export default Top
