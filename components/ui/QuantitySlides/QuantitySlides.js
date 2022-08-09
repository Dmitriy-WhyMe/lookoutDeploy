import { forwardRef } from 'react'
import cn from 'classnames'
import classes from './QuantitySlides.module.scss'

const QuantitySlides = forwardRef(({ slides, className }, ref) => {
    return (
        <div className={cn(classes.Quantity, className)}>
            <div className={classes.QuantityCurrent}>
                <div className={classes.QuantityNumbersFirst}>0</div>

                <div className={classes.QuantityNumbers} ref={ref}>
                    {slides.map((item, index) => (
                        <span key={index} className={classes.QuantityNumber}>
                            {index + 1}
                        </span>
                    ))}
                </div>
            </div>

            <span className={classes.QuantityLine} />
            <span className={classes.QuantitAll}>0{slides.length}</span>
        </div>
    )
})

QuantitySlides.displayName = 'QuantitySlides'

export default QuantitySlides
