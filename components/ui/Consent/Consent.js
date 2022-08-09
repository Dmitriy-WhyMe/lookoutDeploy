import classes from './Consent.module.scss'
import Link from 'next/link'
import cn from 'classnames'

function Consent({ className }) {
    return (
        <div className={cn(classes.Wrap, className)}>
            <p className={classes.Text}>Нажимая на кнопку «Отправить», я даю свое</p>

            <Link href='/privacy'>
                <a className={classes.Link}>согласие на обработку персональных данных</a>
            </Link>
        </div>
    )
}

export default Consent
