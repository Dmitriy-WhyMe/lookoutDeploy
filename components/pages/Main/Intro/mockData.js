import photo_1920 from './mockImages/1920.jpeg'
import photo_1440 from './mockImages/1440.jpeg'
import photo_1024 from './mockImages/1024.jpeg'
import photo_768 from './mockImages/768.jpeg'
import photo_360 from './mockImages/360.jpeg'

export const mockData = {
    photo: {
        1920: photo_1920,
        1440: photo_1440,
        1024: photo_1024,
        768: photo_768,
        360: photo_360
    },

    title: `Недвижимость на Кипре`,

    btnMap: {
        name: 'Показать на карте',
        link: 'https://yandex.ru/'
    },

    btnOffers: {
        name: 'Показать 28 предложений',
        link: 'https://yandex.ru/'
    },

    filter: [
        {
            name: 'Покупка',
            code: 'purchase',
            items: [
                {
                    placeholder: 'Регион или район',
                    code: 'geo',
                    variants: [
                        {
                            name: 'Район 1'
                        },
                        {
                            name: 'Район 2'
                        },
                        {
                            name: 'Район 3'
                        }
                    ]
                },
                {
                    placeholder: 'Квартира',
                    code: 'flat',
                    variants: [
                        {
                            name: 'Квартира 1'
                        },
                        {
                            name: 'Квартира 2'
                        }
                    ]
                },
                {
                    placeholder: 'Спален',
                    code: 'bedrooms',
                    variants: [
                        {
                            name: '1'
                        },
                        {
                            name: '2'
                        }
                    ]
                },
                {
                    placeholder: 'Площадь',
                    code: 'square',
                    variants: [
                        {
                            name: '43'
                        },
                        {
                            name: '61'
                        },
                        {
                            name: '74'
                        }
                    ]
                },
                {
                    placeholder: 'Цена',
                    code: 'price',
                    variants: [
                        {
                            name: '26000'
                        },
                        {
                            name: '60000'
                        },
                        {
                            name: '74000'
                        }
                    ]
                },
                {
                    placeholder: 'Название проекта',
                    code: 'project',
                    variants: [
                        {
                            name: 'Проект 1'
                        },
                        {
                            name: 'Проект 2'
                        },
                        {
                            name: 'Проект 3'
                        }
                    ]
                }
            ]
        },

        {
            name: 'Городская',
            code: 'town',
            items: [
                {
                    placeholder: '2 Реги или район',
                    code: 'geo',
                    variants: [
                        {
                            name: 'Район 1'
                        },
                        {
                            name: 'Район 2'
                        },
                        {
                            name: 'Район 3'
                        }
                    ]
                },
                {
                    placeholder: 'Квартира',
                    code: 'flat',
                    variants: [
                        {
                            name: 'Квартира 1'
                        },
                        {
                            name: 'Квартира 2'
                        }
                    ]
                },
                {
                    placeholder: 'Спален',
                    code: 'bedrooms',
                    variants: [
                        {
                            name: '1'
                        },
                        {
                            name: '2'
                        }
                    ]
                },
                {
                    placeholder: 'Площадь',
                    code: 'square',
                    variants: [
                        {
                            name: '43'
                        },
                        {
                            name: '61'
                        },
                        {
                            name: '74'
                        }
                    ]
                },
                {
                    placeholder: 'Цена',
                    code: 'price',
                    variants: [
                        {
                            name: '26000'
                        },
                        {
                            name: '60000'
                        },
                        {
                            name: '74000'
                        }
                    ]
                },
                {
                    placeholder: 'Название проекта',
                    code: 'project',
                    variants: [
                        {
                            name: 'Проект 1'
                        },
                        {
                            name: 'Проект 2'
                        },
                        {
                            name: 'Проект 3'
                        }
                    ]
                }
            ]
        },

        {
            name: 'Загородная',
            code: 'suburban',
            items: [
                {
                    placeholder: '3 Реги или район',
                    code: 'geo',
                    variants: [
                        {
                            name: 'Район 1'
                        },
                        {
                            name: 'Район 2'
                        },
                        {
                            name: 'Район 3'
                        }
                    ]
                },
                {
                    placeholder: 'Квартира',
                    code: 'flat',
                    variants: [
                        {
                            name: 'Квартира 1'
                        },
                        {
                            name: 'Квартира 2'
                        }
                    ]
                },
                {
                    placeholder: 'Спален',
                    code: 'bedrooms',
                    variants: [
                        {
                            name: '1'
                        },
                        {
                            name: '2'
                        }
                    ]
                },
                {
                    placeholder: 'Площадь',
                    code: 'square',
                    variants: [
                        {
                            name: '43'
                        },
                        {
                            name: '61'
                        },
                        {
                            name: '74'
                        }
                    ]
                },
                {
                    placeholder: 'Цена',
                    code: 'price',
                    variants: [
                        {
                            name: '26000'
                        },
                        {
                            name: '60000'
                        },
                        {
                            name: '74000'
                        }
                    ]
                },
                {
                    placeholder: 'Название проекта',
                    code: 'project',
                    variants: [
                        {
                            name: 'Проект 1'
                        },
                        {
                            name: 'Проект 2'
                        },
                        {
                            name: 'Проект 3'
                        }
                    ]
                }
            ]
        },

        {
            name: 'Эксклюзивная',
            code: 'exclusive',
            items: [
                {
                    placeholder: '4 Реги или район',
                    code: 'geo',
                    variants: [
                        {
                            name: 'Район 1'
                        },
                        {
                            name: 'Район 2'
                        },
                        {
                            name: 'Район 3'
                        }
                    ]
                },
                {
                    placeholder: 'Квартира',
                    code: 'flat',
                    variants: [
                        {
                            name: 'Квартира 1'
                        },
                        {
                            name: 'Квартира 2'
                        }
                    ]
                },
                {
                    placeholder: 'Спален',
                    code: 'bedrooms',
                    variants: [
                        {
                            name: '1'
                        },
                        {
                            name: '2'
                        }
                    ]
                },
                {
                    placeholder: 'Площадь',
                    code: 'square',
                    variants: [
                        {
                            name: '43'
                        },
                        {
                            name: '61'
                        },
                        {
                            name: '74'
                        }
                    ]
                },
                {
                    placeholder: 'Цена',
                    code: 'price',
                    variants: [
                        {
                            name: '26000'
                        },
                        {
                            name: '60000'
                        },
                        {
                            name: '74000'
                        }
                    ]
                },
                {
                    placeholder: 'Название проекта',
                    code: 'project',
                    variants: [
                        {
                            name: 'Проект 1'
                        },
                        {
                            name: 'Проект 2'
                        },
                        {
                            name: 'Проект 3'
                        }
                    ]
                }
            ]
        }
    ]
}
