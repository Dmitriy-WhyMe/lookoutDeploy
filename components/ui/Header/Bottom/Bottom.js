import classes from './Bottom.module.scss'
import Link from 'next/link'
import IconFavourites from '../../../icons/IconFavourites'
import { Button } from '../../Button/Button'
import IconSearch from '../../../icons/IconSearch'

function Bottom({ data }) {
    return (
        <div className={classes.Wrapper}>
            {data.menu.length > 0 && (
                <nav className={classes.Menu}>
                    {data.menu.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <a className={classes.Link}>{item.name}</a>
                        </Link>
                    ))}
                </nav>
            )}

            <div className={classes.Col}>
                {(data?.favourites?.title || data?.favourites?.count) && (
                    <div className={classes.Favourites}>
                        <IconFavourites />
                        {data?.favourites?.title && <span className={classes.FavouritesTitle}>{data.favourites.title}</span>}
                        {data?.favourites?.count && <span className={classes.FavouritesCount}>{data.favourites.count}</span>}
                    </div>
                )}

                <Button className={classes.BtnSearch}>
                    {data?.btnSearch}
                    <IconSearch />
                </Button>
            </div>
        </div>
    )
}

export default Bottom
