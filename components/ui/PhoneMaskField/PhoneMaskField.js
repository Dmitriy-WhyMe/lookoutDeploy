import cn from 'classnames'
import InputMask from 'react-input-mask'
import classes from './PhoneMaskField.module.scss'
import { CSSTransition } from 'react-transition-group'

function PhoneMaskField({ name, label, value, onChange, placeholder = ' ', required, isError, errorText, className }) {
    return (
        <div className={cn(classes.Field, className, { [classes.Error]: isError })}>
            <InputMask mask='+7 (999) 999-99-99' value={value} onChange={onChange}>
                {(inputProps) => (
                    <input
                        name={name}
                        label={label}
                        className={classes.Input}
                        type='tel'
                        placeholder={placeholder}
                        required={required}
                        {...inputProps}
                    />
                )}
            </InputMask>

            <label className={classes.Label} htmlFor={name}>
                {label}
            </label>

            <CSSTransition in={isError} timeout={200} mountOnEnter={true} unmountOnExit={true}>
                {(state) => <p className={`${classes.ErrorText} ${state}`}>{errorText}</p>}
            </CSSTransition>
        </div>
    )
}

export default PhoneMaskField
