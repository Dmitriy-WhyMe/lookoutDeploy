import photo_1920_1 from './mockImages/1/1920.jpeg'
import photo_360_1 from './mockImages/1/360.jpeg'

import photo_1920_2 from './mockImages/2/1920.jpeg'
import photo_360_2 from './mockImages/2/360.jpeg'

export const mockData = {
    titlePage:{
        title: 'Покупка недвижимости на Кипре',
        count: '18'
    },

    items: [
        {
            name: `Lotus Homes <br/> Catalkoy`,
            lotsName: 'лотов',
            lotsCount: 13,
            link: '/',
            photo: {
                1920: photo_1920_1,
                1440: '',
                1024: '',
                768: '',
                360: photo_360_1
            },
        },
        {
            name: `Alagadi <br/> Villalas`,
            lotsName: 'лотов',
            lotsCount: 5,
            link: '/',
            photo: {
                1920: photo_1920_2,
                1440: '',
                1024: '',
                768: '',
                360: photo_360_2
            }
        }
    ]
}