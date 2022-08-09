import classes from './Container.module.scss'
import cn from 'classnames'

function Container({ children, fullHeight, className }) {
    return <div className={cn(classes.Container, className, { [classes.FullHeight]: fullHeight })}>{children}</div>
}

export default Container
