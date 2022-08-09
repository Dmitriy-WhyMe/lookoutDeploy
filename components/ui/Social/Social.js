import classes from './Social.module.scss'
import cn from 'classnames'
import IconVk from './IconVk'
import IconTg from './IconTg'
import IconZen from './IconZen'

function Social({ vkLink, tglink, zenLink, className, light }) {
    if (!vkLink && !tglink && !zenLink) {
        return null
    }

    return (
        <div className={cn(classes.Social, className, { [classes.Light]: light })}>
            {vkLink && (
                <a className={classes.Link} href={vkLink} target='_blank' rel='noopener noreferrer'>
                    <IconVk />
                </a>
            )}

            {tglink && (
                <a className={classes.Link} href={tglink} target='_blank' rel='noopener noreferrer'>
                    <IconTg />
                </a>
            )}

            {zenLink && (
                <a className={classes.Link} href={zenLink} target='_blank' rel='noopener noreferrer'>
                    <IconZen />
                </a>
            )}
        </div>
    )
}

export default Social
