import classes from './News.module.scss'
import Container from './../../../ui/Container/Container'
import { mockData } from './mockData'
import NewsItem from './NewsItem/NewsItem'
import ButtonLink from '../../../ui/ButtonLink/ButtonLink'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation, Pagination])

function News() {
    return (
        <section className={classes.Section}>
            <Container>
                {mockData?.title && <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}

                <div className={classes.Items}>
                    {mockData.items.map((item, index) => (
                        <NewsItem item={item} key={index} />
                    ))}
                </div>

                <div className={classes.Slider} id='news-slider'>
                    <Swiper
                        pagination={true}
                        navigation={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 'auto',
                                spaceBetween: 20
                            },
                            767: {
                                slidesPerView: 'auto',
                                spaceBetween: 16
                            }
                        }}
                    >
                        {mockData.items.map((item, index) => (
                            <SwiperSlide className={classes.Slide} key={index}>
                                <NewsItem item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {mockData?.btnMore?.link && mockData?.btnMore?.title && (
                    <div className={classes.BtnMoreWrap}>
                        <ButtonLink className={classes.BtnMore} href={mockData.btnMore.link}>
                            {mockData.btnMore.title}
                        </ButtonLink>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default News
