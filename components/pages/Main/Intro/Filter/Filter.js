import { useState, useRef } from 'react'
import classes from './Filter.module.scss'
import cn from 'classnames'
import IconSelect from '../../../../icons/IconSelect'
import { useOnClickOutside } from '../../../../../hooks/useOnClickOutside'

function Filter({ data, defaultActiveTab = 1 }) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab)
    const [activeSelect, setActiveSelect] = useState(null)
    const [activeItems, setActiveItems] = useState(data?.[activeTab - 1]?.items || [])
    const [filterResult, setFilterResult] = useState({})

    const ref = useRef()

    useOnClickOutside(ref, () => setActiveSelect(null))

    const onChangeActiveTab = (index) => {
        if (activeTab === index) {
            return
        }

        const newObj = { type: data[index - 1].code }
        setActiveTab(index)
        setFilterResult((prev) => ({ ...prev, ...newObj }))
        setActiveItems(data?.[index - 1]?.items || [])
    }

    const onChangeActiveSelect = (index) => {
        if (activeSelect === index) {
            setActiveSelect(null)
            return
        }

        setActiveSelect(index)
    }

    const onChangeFilterResult = (name, value) => {
        const newObj = { [name]: value, type: data[activeTab - 1].code }

        const newItems = activeItems.map((item) => {
            if (item.code === name) {
                return { ...item, placeholder: value }
            }
            return item
        })

        setFilterResult((prev) => ({ ...prev, ...newObj }))
        setActiveSelect(null)
        setActiveItems(newItems)
    }

    return (
        <div className={classes.Filter}>
            {data?.length > 0 && (
                <div className={classes.Header}>
                    <div className={classes.HeaderInner}>
                        {data.map((item, index) => (
                            <button
                                className={cn(classes.HeaderBtn, { [classes.Active]: index + 1 === activeTab })}
                                key={index}
                                onClick={() => onChangeActiveTab(index + 1)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {activeItems?.length > 0 && (
                <div className={classes.ItemsWrap}>
                    <div className={classes.Items} ref={ref}>
                        {activeItems.map((item, index) => (
                            <div className={classes.Select} key={index}>
                                <button className={classes.SelectBtn} onClick={() => onChangeActiveSelect(index + 1)}>
                                    {item.placeholder}
                                    <IconSelect />
                                </button>

                                {item.variants.length > 0 && (
                                    <div className={cn(classes.SelectDropdown, { [classes.Open]: activeSelect === index + 1 })}>
                                        {item.variants.map((variant, variantIndex) => (
                                            <div
                                                className={classes.SelectVariant}
                                                key={variantIndex}
                                                onClick={() => onChangeFilterResult(item.code, variant.name)}
                                            >
                                                {variant.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Filter
