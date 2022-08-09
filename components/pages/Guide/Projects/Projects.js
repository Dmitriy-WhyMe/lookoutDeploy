import IconList from '../../../icons/IconList'
import IconMap from '../../../icons/IconMap'
import Container from '../../../ui/Container/Container'
import ProjectItem from '../../../ui/ProjectItem/ProjectItem'
import { mockData } from './mockData'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import classes from './Projects.module.scss'

const Projects = () => {
  return (
    <section className={classes.Section}>
        <Container>
            <div className={classes.Row}>
                <div className={classes.Title}>
                    <h2>{mockData?.titlePage ? mockData.titlePage.title : "Покупка недвижимости на Кипре"}</h2>
                    <span>{mockData?.titlePage ? mockData.titlePage.count : "0"}</span>
                </div>

                <div className={classes.Tabs}>
                    <button>списком<IconList/></button>
                    <button>на карте<IconMap/></button>
                </div>
            </div>
            
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