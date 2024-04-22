

export const $Dormitory = {
    type: 'object',
    properties: '// Определите свойства для общежития',
    required: ['title', 'description', 'rating']
} as const;

export const $Institute = {
    type: 'object',
    properties: '// Определите свойства для института',
    required: ['title', 'description']
} as const;

export const $Review = {
    type: 'object',
    properties: '// Определите свойства для отзыва',
    required: ['userId', 'comment', 'rating']
} as const;

export const $University = {
    type: 'object',
    properties: {
        _id: {
            type: 'string',
            description: 'Уникальный идентификатор новости университета'
        },
        name: {
            type: 'string',
            description: 'Название университета'
        },
        image: {
            type: 'array',
            items: {
                type: 'string'
            },
            description: 'Список URL изображений университета'
        },
        email: {
            type: 'string',
            description: 'Электронная почта университета'
        },
        siteUrl: {
            type: 'string',
            description: 'URL сайта университета'
        },
        address: {
            type: 'string',
            description: 'Адрес университета'
        },
        news: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UniversityNews'
            },
            description: 'Список новостей университета'
        },
        institute: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Institute'
            },
            description: 'Список институтов университета'
        },
        dormitory: {
            '$ref': '#/components/schemas/Dormitory',
            description: 'Общежитие университета'
        },
        docsImg: {
            type: 'string',
            description: 'URL изображения документов университета'
        },
        selectionCommittee: {
            type: 'object',
            properties: {
                mail: {
                    type: 'string',
                    description: 'Электронная почта приемной комиссии университета'
                },
                phone: {
                    type: 'string',
                    description: 'Телефон приемной комиссии университета'
                }
            },
            description: 'Контактная информация приемной комиссии университета'
        },
        reviews: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Review'
            },
            description: 'Список отзывов о университете'
        },
        users: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserComment'
            },
            description: 'Список комментариев пользователей о университете'
        },
        access: {
            type: 'array',
            items: {
                type: 'string'
            },
            description: 'Список идентификаторов пользователей, имеющих доступ к университету'
        },
        admin: {
            type: 'string',
            description: 'Идентификатор администратора университета'
        }
    },
    required: ['name']
} as const;

export const $UniversityNews = {
    type: 'object',
    properties: {
        _id: {
            type: 'string',
            description: 'Уникальный идентификатор новости университета'
        },
        title: {
            type: 'string',
            description: 'Заголовок новости'
        },
        description: {
            type: 'string',
            description: 'Описание новости'
        },
        image: {
            type: 'array',
            items: {
                type: 'string'
            },
            description: 'Список URL изображений новости'
        },
        reviews: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Review'
            },
            description: 'Список идентификаторов отзывов к новости'
        }
    },
    required: ['title', 'description']
} as const;

export const $UserComment = {
    type: 'object',
    properties: '// Определите свойства для комментария пользователя'
} as const;

export const $User = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        nikname: {
            type: 'string'
        },
        login: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        role: {
            type: 'string'
        },
        photo: {
            type: 'string'
        },
        institute: {
            type: 'string'
        },
        raiting: {
            type: 'number'
        },
        showName: {
            type: 'boolean'
        },
        passport: {
            type: 'string'
        },
        myMessage: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        favorite: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
} as const;

export const $ErrorResponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string'
        }
    }
} as const;