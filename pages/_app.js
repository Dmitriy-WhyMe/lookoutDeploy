import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import 'flatpickr/dist/themes/light.css'
import '../css/fonts.css'
import '../css/normalize.css'
import '../css/global.css'
import '../css/projectsSlider.css'
import '../css/newsSlider.css'
import '../css/partnersList.css'

import { FormProvider } from '../context'
import Head from 'next/head'

/* eslint-disable */
// eslint@next/next/no-img-element
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* <link rel='apple-touch-icon' sizes='180x180' href='/180.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/16.png' /> */}
            </Head>

            <FormProvider>
                <Component {...pageProps} />
            </FormProvider>
        </>
    )
}

export default MyApp
