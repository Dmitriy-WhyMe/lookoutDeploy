import classes from './BreadCrumbs.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

function BreadCrumbs({ list, className, hiddenLastLink = false }) {
    const router = useRouter()

    if (!list?.length) {
        return null
    }

    const prevHref = list?.length > 1 ? list[list?.length - 2] : list[0]

    return (
        <div className={cn(classes.BreadCrumbs, className)}>
            {list?.map((item, index) =>
                index !== list.length - 1 ? (
                    <Link href={`${item.url}`} key={index}>
                        <a>{item.name}</a>
                    </Link>
                ) : (
                    <div className={classes.Row} key={index}>
                        <button className={classes.BtnPrev} onClick={() => router.push(prevHref.url)}></button>
                        {!hiddenLastLink && <span>{item.name}</span>}
                    </div>
                )
            )}
        </div>
    )
}

export default BreadCrumbs
