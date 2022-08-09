import classes from './ProjectItem.module.scss'
import NextImage from 'next/image'
import Link from 'next/link'
import IconArrowRight from '../../icons/IconArrowRight'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { getPhotoSize } from '../../../utils/getPhotoSize'

function ProjectItem({ item }) {
    const { width } = useWindowSize()
    const sizePhoto = getPhotoSize(width)

    return (
        <Link href={item.link}>
            <div className={classes.Item}>
                {item?.photo && item?.photo?.[1920] && (
                    <div className={classes.ItemImage}>
                        <NextImage
                            src={item?.photo?.[sizePhoto] || item.photo[1920]}
                            layout='fill'
                            objectFit='cover'
                            alt=''
                            quality={95}
                            priority
                        />
                    </div>
                )}

                <div className={classes.ItemContent}>
                    {item?.name && <div className={classes.ItemName} dangerouslySetInnerHTML={{ __html: item.name }} />}

                    <div className={classes.ItemFooter}>
                        <div className={classes.ItemLots}>
                            {item?.lotsCount && <b>{item.lotsCount}</b>}
                            {item?.lotsName && <span>{item.lotsName}</span>}
                        </div>

                        {item?.link && (
                            <a className={classes.ItemLink} target='_blank' rel='noopener noreferrer'>
                                <IconArrowRight />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export default ProjectItem
