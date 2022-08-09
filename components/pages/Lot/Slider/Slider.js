import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
import { useState } from "react"
import { mockData } from './mockData'
import NextImage from 'next/image'
import Container from '../../../ui/Container/Container'
import classes from './Slider.module.scss'

import { Thumbs } from 'swiper'
SwiperCore.use([Thumbs])

const Slider = () => {

    const [slider, setSlider] = useState(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const swiperConfig = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: -109,
        navigation: false,
        speed: 200,
        speed: 1000,
        autoplay: {
            delay: 5000
        },
    }

    const swiperConfigSmall = {
        slidesPerView: 6,
        spaceBetween: 24,
        loop: true,
		navigation: false,
        speed: 1000,
	}

    return (
        <section className={classes.Section}>
            <Container>
                <Swiper
                    className={classes.SliderBig}
                    {...swiperConfig}
                    thumbs={{ swiper: thumbsSwiper }}
                    onSwiper={(swiper) => setSlider(swiper)}
                >
                    {mockData.slider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="WrapSlide">
                                <div className={classes.Image}>
                                    <NextImage
                                        src={item.img}
                                        alt=''
                                        quality={95}
                                        priority
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    className={classes.SliderSmall}
                    {...swiperConfigSmall}
                    watchSlidesProgress={true}
                    onSwiper={setThumbsSwiper}
                >
                    {mockData.slider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={classes.Image}>
                                <NextImage
                                    width={92}
                                    height={82}
                                    src={item.img}
                                    alt=''
                                    quality={95}
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
            

            <div className={classes.Btns}>
                <button
                    className={classes.ArrowLeft}
                    onClick={() => (slider ? slider.slidePrev() : null)}
                >
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.84889 9.99702L9.21583 15.364C9.40336 15.5515 9.50872 15.8059 9.50872 16.0711C9.50872 16.3363 9.40336 16.5906 9.21583 16.7782C9.02829 16.9657 8.77394 17.0711 8.50872 17.0711C8.2435 17.0711 7.98915 16.9657 7.80161 16.7782L0.730544 9.70711C0.639259 9.61359 0.567189 9.50308 0.518412 9.38184C0.417385 9.1373 0.417385 8.8627 0.518412 8.61816C0.567189 8.49692 0.639259 8.38641 0.730544 8.29289L7.80161 1.22183C7.98915 1.03429 8.2435 0.928932 8.50872 0.928932C8.77394 0.928932 9.02829 1.03429 9.21583 1.22183C9.40336 1.40936 9.50872 1.66372 9.50872 1.92893C9.50872 2.19415 9.40336 2.4485 9.21583 2.63604L3.84889 8.00298L15.5798 7.99591C15.7118 7.99537 15.8426 8.02097 15.9647 8.07124C16.0867 8.12151 16.1976 8.19545 16.291 8.28879C16.3843 8.38214 16.4583 8.49304 16.5085 8.61511C16.5588 8.73718 16.5844 8.86799 16.5839 9C16.5844 9.13201 16.5588 9.26282 16.5085 9.38489C16.4583 9.50696 16.3843 9.61786 16.291 9.71121C16.1976 9.80455 16.0867 9.87849 15.9647 9.92876C15.8426 9.97903 15.7118 10.0046 15.5798 10.0041L3.84889 9.99702Z" fill="#F9365E"/></svg>
                </button>

                <button
                    className={classes.ArrowRight}
                    onClick={() => (slider ? slider.slideNext() : null)}
                >
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1511 9.99702L7.78417 15.364C7.59664 15.5515 7.49128 15.8059 7.49128 16.0711C7.49128 16.3363 7.59664 16.5906 7.78417 16.7782C7.97171 16.9657 8.22606 17.0711 8.49128 17.0711C8.7565 17.0711 9.01085 16.9657 9.19839 16.7782L16.2695 9.70711C16.3607 9.61359 16.4328 9.50308 16.4816 9.38184C16.5826 9.1373 16.5826 8.8627 16.4816 8.61816C16.4328 8.49692 16.3607 8.38641 16.2695 8.29289L9.19839 1.22183C9.01085 1.03429 8.7565 0.928932 8.49128 0.928932C8.22606 0.928932 7.97171 1.03429 7.78417 1.22183C7.59664 1.40936 7.49128 1.66372 7.49128 1.92893C7.49128 2.19415 7.59664 2.4485 7.78417 2.63604L13.1511 8.00298L1.42021 7.99591C1.2882 7.99537 1.15739 8.02097 1.03532 8.07124C0.913258 8.12151 0.802353 8.19545 0.709007 8.28879C0.615661 8.38214 0.54172 8.49304 0.491451 8.61511C0.441182 8.73718 0.415582 8.86799 0.416123 9C0.415582 9.13201 0.441182 9.26282 0.491451 9.38489C0.54172 9.50696 0.615661 9.61786 0.709007 9.71121C0.802353 9.80455 0.913258 9.87849 1.03532 9.92876C1.15739 9.97903 1.2882 10.0046 1.42021 10.0041L13.1511 9.99702Z" fill="#F9365E"/></svg>
                </button>
            </div>
        </section>
    )
}

export default Slider