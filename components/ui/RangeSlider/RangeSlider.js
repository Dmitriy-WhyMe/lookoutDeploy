import Slider from 'rc-slider'
import { useState } from 'react'
import classes from './RangeSlider.module.scss'

const RangeSlider = ({title}) => {

    const [value, setValue] = useState([0,1000])

    const handleChange = (value) => {
        setValue(value)
    }

    return (
        <div className={classes.RangeSlider}>
            <div className={classes.RangeTitle}>{title}</div>
            <div className={classes.RangeRow}>
                <input value={value[0]} readOnly/>
                <input value={value[1]} readOnly/>
            </div>
            <div className={classes.Range}>
                <Slider
                    range
                    defaultValue={value}
                    min={0}
                    max={1000}
                    onChange={handleChange}
                    tipFormatter={value => <span className="tooltip">{value}€</span>}
                />
            </div>
            
        </div>
    )
}

export default RangeSlider