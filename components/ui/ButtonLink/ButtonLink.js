import classes from './ButtonLink.module.scss'
import cn from 'classnames'
import Link from 'next/link'

function ButtonLink({ children, href, className, outline, white, isInner = false }) {
    if (isInner) {
        return (
            <Link href={href}>
                <a
                    className={cn(classes.ButtonLink, className, { [classes.White]: white, [classes.Outline]: outline })}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {children}
                </a>
            </Link>
        )
    }

    return (
        <a
            className={cn(classes.ButtonLink, className, { [classes.White]: white, [classes.Outline]: outline })}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            {children}
        </a>
    )
}

export default ButtonLink
