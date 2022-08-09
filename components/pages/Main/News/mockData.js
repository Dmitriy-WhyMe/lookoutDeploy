import photo_1 from './mockImages/1.jpeg'
import photo_2 from './mockImages/2.jpeg'
import photo_3 from './mockImages/3.jpeg'

export const mockData = {
    title: 'Новости',
    btnMore: {
        title: 'Все новости',
        link: '/news/'
    },
    items: [
        {
            photo: photo_1,
            date: '8.07.2022',
            title: `Куда инвестировать <br/> в недвижимость в Сочи <br/> в 2022 году?`,
            desc: `Проекты в Сочи для жизни <br> и инвестиций – выбор Lookout`,
            link: '/'
        },
        {
            photo: photo_2,
            date: '8.07.2022',
            title: `Дубай, Турция, Кипр: <br/> самые быстрые программы инвестиционного ВНЖ`,
            desc: `Рассказываем о трех направлениях с самым быстрым процессом оформления инвестиционного ВНЖ`,
            link: '/'
        },
        {
            photo: photo_3,
            date: '8.07.2022',
            title: `Как получить ПМЖ <br/> Кипра в 2022 году?`,
            desc: `Кипр — островное государство в восточной части Средиземного моря. 
            Теплый климат, невысокая стоимость...`,
            link: '/'
        }
    ]
}
