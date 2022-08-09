import classes from './Consulting.module.scss'
import Container from './../../../ui/Container/Container'
import NextImage from 'next/image'
import { mockData } from './mockData'

function Consulting() {
    return (
        <section className={classes.Section}>
            <Container>
                {mockData?.title && <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}

                {mockData?.photo && (
                    <div className={classes.ItemImageBlock}>
                        <div className={classes.ItemImage}>
                            <NextImage src={mockData.photo} layout='fill' objectFit='cover' alt='' quality={95} />
                        </div>

                        <div className={classes.ItemImageCopy} />
                    </div>
                )}

                {(mockData?.subTitle || mockData?.text || (mockData?.btnDetail?.link && mockData?.btnDetail?.title)) && (
                    <div className={classes.Content}>
                        {mockData?.subTitle && <p className={classes.SubTitle} dangerouslySetInnerHTML={{ __html: mockData.subTitle }} />}

                        <div className={classes.Right}>
                            {mockData?.text && <div className={classes.Text} dangerouslySetInnerHTML={{ __html: mockData.text }} />}

                            {mockData?.btnDetail?.link && mockData?.btnDetail?.title && (
                                <a href={mockData.btnDetail.link} className={classes.BtnDetail}>
                                    {mockData.btnDetail.title}
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default Consulting
