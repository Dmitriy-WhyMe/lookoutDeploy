import classes from './Immigration.module.scss'
import Container from './../../../ui/Container/Container'
import NextImage from 'next/image'
import { mockData } from './mockData'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { getPhotoSize } from '../../../../utils/getPhotoSize'

function Immigration() {
    const { width } = useWindowSize()
    const sizePhoto = getPhotoSize(width)

    const photo = sizePhoto < 1280 ? mockData?.photoHorizontal : mockData?.photoVertical

    if (!mockData) {
        return null
    }

    return (
        <section className={classes.Section}>
            <Container>
                {mockData?.title && <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}
            </Container>

            <div className={classes.Inner}>
                <div className={classes.Content}>
                    {photo && (
                        <div className={classes.Left}>
                            <div className={classes.ItemImage}>
                                <NextImage src={photo} layout='fill' objectFit='cover' alt='' quality={95} />
                            </div>

                            <div className={classes.ItemImageCopy} />
                        </div>
                    )}

                    {(mockData?.text || (mockData?.btnDetail?.link && mockData?.btnDetail?.title)) && (
                        <div className={classes.Right}>
                            {mockData?.subTitle && (
                                <div className={classes.SubTitle} dangerouslySetInnerHTML={{ __html: mockData.subTitle }} />
                            )}

                            {mockData?.text && (
                                <div className={classes.Text} dangerouslySetInnerHTML={{ __html: mockData.text }} />
                            )}

                            {mockData?.btnDetail?.link && mockData?.btnDetail?.title && (
                                <a href={mockData.btnDetail.link} className={classes.BtnDetail}>
                                    {mockData.btnDetail.title}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Immigration
