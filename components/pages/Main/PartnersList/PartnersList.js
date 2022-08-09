import classes from './PartnersList.module.scss'
import Container from './../../../ui/Container/Container'
import NextImage from 'next/image'
import { mockData } from './mockData'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation, Pagination])

function PartnersList() {
    return (
        <section className={classes.Section}>
            <Container>
                <div className={classes.Inner}>
                    {mockData?.title && <h4 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}

                    <div className={classes.Slider} id='partners-list-slider'>
                        <Swiper
                            pagination={true}
                            navigation={true}
                            spaceBetween={15}
                            breakpoints={{
                                320: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 15
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                }
                            }}
                        >
                            {mockData.items.map((item, index) => (
                                <SwiperSlide className={classes.Slide} key={index}>
                                    <div className={classes.Logo}>
                                        <NextImage src={item.photo} layout='intrinsic' objectFit='contain' alt='' quality={95} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PartnersList
