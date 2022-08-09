import classes from './NewsItem.module.scss'
import NextImage from 'next/image'
import Link from 'next/link'
import IconArrowRight from '../../../../icons/IconArrowRight'

function NewsItem({ item }) {
    return (
        <div className={classes.Item}>
            {item?.photo && (
                <div className={classes.ItemImage}>
                    <NextImage src={item.photo} layout='fill' objectFit='cover' alt='' quality={95} />
                </div>
            )}

            {item?.date && <span className={classes.ItemDate}>{item.date}</span>}
            {item?.title && <h4 className={classes.ItemTitle} dangerouslySetInnerHTML={{ __html: item.title }} />}
            {item?.desc && <div className={classes.ItemDesc} dangerouslySetInnerHTML={{ __html: item.desc }} />}

            {item?.link && (
                <div className={classes.ItemLinkWrap}>
                    <Link href={item.link}>
                        <a className={classes.ItemLink} target='_blank' rel='noopener noreferrer'>
                            <IconArrowRight />
                        </a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default NewsItem
