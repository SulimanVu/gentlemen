

export type Dormitory = {
        '0'?: unknown
'1'?: unknown
'2'?: unknown
'3'?: unknown
'4'?: unknown
'5'?: unknown
'6'?: unknown
'7'?: unknown
'8'?: unknown
'9'?: unknown
'10'?: unknown
'11'?: unknown
'12'?: unknown
'13'?: unknown
'14'?: unknown
'15'?: unknown
'16'?: unknown
'17'?: unknown
'18'?: unknown
'19'?: unknown
'20'?: unknown
'21'?: unknown
'22'?: unknown
'23'?: unknown
'24'?: unknown
'25'?: unknown
'26'?: unknown
'27'?: unknown
'28'?: unknown
'29'?: unknown
'30'?: unknown
'31'?: unknown
'32'?: unknown
'33'?: unknown
'34'?: unknown
'35'?: unknown
    };

export type Institute = {
        '0'?: unknown
'1'?: unknown
'2'?: unknown
'3'?: unknown
'4'?: unknown
'5'?: unknown
'6'?: unknown
'7'?: unknown
'8'?: unknown
'9'?: unknown
'10'?: unknown
'11'?: unknown
'12'?: unknown
'13'?: unknown
'14'?: unknown
'15'?: unknown
'16'?: unknown
'17'?: unknown
'18'?: unknown
'19'?: unknown
'20'?: unknown
'21'?: unknown
'22'?: unknown
'23'?: unknown
'24'?: unknown
'25'?: unknown
'26'?: unknown
'27'?: unknown
'28'?: unknown
'29'?: unknown
'30'?: unknown
'31'?: unknown
'32'?: unknown
'33'?: unknown
'34'?: unknown
'35'?: unknown
    };

export type Review = {
        '0'?: unknown
'1'?: unknown
'2'?: unknown
'3'?: unknown
'4'?: unknown
'5'?: unknown
'6'?: unknown
'7'?: unknown
'8'?: unknown
'9'?: unknown
'10'?: unknown
'11'?: unknown
'12'?: unknown
'13'?: unknown
'14'?: unknown
'15'?: unknown
'16'?: unknown
'17'?: unknown
'18'?: unknown
'19'?: unknown
'20'?: unknown
'21'?: unknown
'22'?: unknown
'23'?: unknown
'24'?: unknown
'25'?: unknown
'26'?: unknown
'27'?: unknown
'28'?: unknown
'29'?: unknown
'30'?: unknown
'31'?: unknown
'32'?: unknown
    };

export type University = {
        /**
 * Уникальный идентификатор новости университета
 */
_id?: string
/**
 * Название университета
 */
name: string
/**
 * Список URL изображений университета
 */
image?: Array<string>
/**
 * Электронная почта университета
 */
email?: string
/**
 * URL сайта университета
 */
siteUrl?: string
/**
 * Адрес университета
 */
address?: string
/**
 * Список новостей университета
 */
news?: Array<UniversityNews>
/**
 * Список институтов университета
 */
institute?: Array<Institute>
/**
 * Общежитие университета
 */
dormitory?: Dormitory
/**
 * URL изображения документов университета
 */
docsImg?: string
/**
 * Контактная информация приемной комиссии университета
 */
selectionCommittee?: {
        /**
 * Электронная почта приемной комиссии университета
 */
mail?: string
/**
 * Телефон приемной комиссии университета
 */
phone?: string
    }
/**
 * Список отзывов о университете
 */
reviews?: Array<Review>
/**
 * Список комментариев пользователей о университете
 */
users?: Array<UserComment>
/**
 * Список идентификаторов пользователей, имеющих доступ к университету
 */
access?: Array<string>
/**
 * Идентификатор администратора университета
 */
admin?: string
    };

export type UniversityNews = {
        /**
 * Уникальный идентификатор новости университета
 */
_id?: string
/**
 * Заголовок новости
 */
title: string
/**
 * Описание новости
 */
description: string
/**
 * Список URL изображений новости
 */
image?: Array<string>
/**
 * Список идентификаторов отзывов к новости
 */
reviews?: Array<Review>
    };

export type UserComment = {
        '0'?: unknown
'1'?: unknown
'2'?: unknown
'3'?: unknown
'4'?: unknown
'5'?: unknown
'6'?: unknown
'7'?: unknown
'8'?: unknown
'9'?: unknown
'10'?: unknown
'11'?: unknown
'12'?: unknown
'13'?: unknown
'14'?: unknown
'15'?: unknown
'16'?: unknown
'17'?: unknown
'18'?: unknown
'19'?: unknown
'20'?: unknown
'21'?: unknown
'22'?: unknown
'23'?: unknown
'24'?: unknown
'25'?: unknown
'26'?: unknown
'27'?: unknown
'28'?: unknown
'29'?: unknown
'30'?: unknown
'31'?: unknown
'32'?: unknown
'33'?: unknown
'34'?: unknown
'35'?: unknown
'36'?: unknown
'37'?: unknown
'38'?: unknown
'39'?: unknown
'40'?: unknown
'41'?: unknown
'42'?: unknown
'43'?: unknown
'44'?: unknown
'45'?: unknown
'46'?: unknown
'47'?: unknown
'48'?: unknown
'49'?: unknown
'50'?: unknown
    };

export type User = {
        name?: string
nikname?: string
login?: string
password?: string
role?: string
photo?: string
institute?: string
raiting?: number
showName?: boolean
passport?: string
myMessage?: Array<string>
favorite?: Array<string>
    };

export type ErrorResponse = {
        message?: string
    };