import classes from './About.module.scss'
import Container from './../../../ui/Container/Container'
import NextImage from 'next/image'
import { mockData } from './mockData'
import ButtonLink from '../../../ui/ButtonLink/ButtonLink'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { getPhotoSize } from '../../../../utils/getPhotoSize'

function About() {
    const { width } = useWindowSize()
    const sizePhoto = getPhotoSize(width)
    const photo = mockData?.photo?.[sizePhoto] || mockData?.photo?.[1920]

    return (
        <section className={classes.Section}>
            {photo && (
                <div className={classes.ItemImage}>
                    <NextImage src={photo} layout='fill' objectFit='cover' alt='' quality={95} />
                </div>
            )}

            <Container>
                <div className={classes.Inner}>
                    {mockData?.title && <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}

                    <div className={classes.Content}>
                        {mockData?.subTitle && <div className={classes.Subtitle} dangerouslySetInnerHTML={{ __html: mockData.subTitle }} />}

                        {mockData?.text && <div className={classes.Text} dangerouslySetInnerHTML={{ __html: mockData.text }} />}

                        {mockData?.btnDetail?.link && mockData?.btnDetail?.title && (
                            <ButtonLink className={classes.BtnDetail} href={mockData.btnDetail.link} isInner>
                                {mockData.btnDetail.title}
                            </ButtonLink>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About
