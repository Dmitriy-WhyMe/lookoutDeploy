import NextImage from 'next/image'
import photo from './mockImages/photo.png'
import classes from './Map.module.scss'
import Container from '../../../ui/Container/Container'

const Map = () => {
    return (
        <section className={classes.Section}>
            <Container>
                <h3>Объект на карте</h3>
                <div className={classes.Img}>
                    <NextImage src={photo} alt='' quality={95} />
                </div>
            </Container>
        </section>
    )
}

export default Map