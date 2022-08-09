import classes from './Projects.module.scss'
import Container from './../../../ui/Container/Container'
import { mockData } from './mockData'
import ProjectItem from '../../../ui/ProjectItem/ProjectItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation, Pagination])

function Projects() {
    return (
        <section className={classes.Section}>
            <Container>
                <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />

                <div className={classes.Items}>
                    {mockData.items.map((item, index) => (
                        <ProjectItem item={item} key={index} />
                    ))}
                </div>

                <div className={classes.Slider} id='projects-slider'>
                    <Swiper spaceBetween={15} pagination={true} slidesPerView={'auto'}>
                        {mockData.items.map((item, index) => (
                            <SwiperSlide className={classes.Slide} key={index}>
                                <ProjectItem item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Projects
