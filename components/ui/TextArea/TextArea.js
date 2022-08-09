import classes from './TextArea.module.scss'
import cn from 'classnames'

export const TextArea = ({ name, label, value, onChange, placeholder = ' ', className }) => {
    return (
        <div className={cn(classes.TextAreaWrap, className)}>
            <div className={classes.Inner}>
                <textarea className={classes.TextArea} name={name} id={name} onChange={onChange} value={value} placeholder={placeholder} />

                <label className={classes.Label} htmlFor={name}>
                    {label}
                </label>
            </div>
        </div>
    )
}
