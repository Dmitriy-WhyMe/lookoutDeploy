import classes from './Intro.module.scss'
import Container from './../../../ui/Container/Container'
import { mockData } from './mockData'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { getPhotoSize } from '../../../../utils/getPhotoSize'
import Filter from './Filter/Filter'

function Intro({ data }) {
    const { width } = useWindowSize()
    const sizePhoto = getPhotoSize(width)

    if (!mockData?.filter && !mockData?.title) {
        return null
    }

    return (
        <section className={classes.Section} style={{ backgroundImage: `url(${mockData.photo[sizePhoto].src})` }}>
            <Container>
                <div className={classes.Content}>
                    {mockData?.title && <h1 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}

                    {mockData?.filter?.length > 0 && <Filter data={mockData.filter} />}

                    <div className={classes.Btns}>
                        {mockData?.btnMap?.link && mockData?.btnMap?.name && (
                            <a className={classes.BtnMap} href={mockData.btnMap.link} target='_blank' rel='noreferrer'>
                                {mockData.btnMap.name}
                            </a>
                        )}

                        {mockData?.btnOffers?.link && mockData?.btnOffers?.name && (
                            <a className={classes.BtnOffers} href={mockData.btnMap.link} target='_blank' rel='noreferrer'>
                                {mockData.btnOffers.name}
                            </a>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Intro
