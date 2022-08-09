import React from 'react'
import classes from './TextField.module.scss'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'

export const TextField = ({ name, type = 'text', label, value, onChange, placeholder = ' ', isError, errorText, className }) => {
    return (
        <div className={cn(classes.Field, className, { [classes.Error]: isError })}>
            <input
                className={classes.Input}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />

            <label className={classes.Label} htmlFor={name}>{label}</label>

            <CSSTransition in={isError} timeout={200} mountOnEnter={true} unmountOnExit={true}>
                {state => <p className={`${classes.ErrorText} ${state}`}>{errorText}</p>}
            </CSSTransition>
        </div>
    )
}
