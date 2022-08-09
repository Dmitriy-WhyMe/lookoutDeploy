import photo_1920 from './mockImages/1920.jpeg'
import photo_1024 from './mockImages/1024.jpeg'
import photo_768 from './mockImages/768.jpeg'
import photo_360 from './mockImages/360.jpeg'

export const mockData = {
    photo: {
        1920: photo_1920,
        1440: '',
        1024: photo_1024,
        768: photo_768,
        360: photo_360
    },
    title: 'О нас',
    subTitle: `Агентство <br/> недвижимости Lookout`,
    text: `
    <p>
    Также как современная методология разработки позволяет выполнить важные задания по разработке модели развития. 
    С учётом сложившейся международной обстановки, начало повседневной работы по формированию 
    позиции выявляет срочную потребность прогресса профессионального сообщества.
    </p>
    `,
    btnDetail: {
        title: 'Подробнее',
        link: '/about/'
    }
}
