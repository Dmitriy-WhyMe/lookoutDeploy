import cn from 'classnames'
import classes from './Button.module.scss'

export const Button = ({ children, onClick, type, disabled, className, outline, white }) => {
    return (
        <button
            className={cn(classes.Button, className, { [classes.White]: white, [classes.Outline]: outline })}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
