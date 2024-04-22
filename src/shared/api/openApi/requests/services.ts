import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { Dormitory, Institute, Review, University, UserComment, UniversityNews, User } from './models';

export type DormitoryData = {
        GetDormitoreById: {
                    /**
 * User ID
 */
id: string
                    
                };
PostAddDorm: {
                    requestBody: Dormitory
                    
                };
    }

export type InstituteData = {
        PostInstitute: {
                    formData: {
        id?: string
title?: string
description?: string
image?: Array<string>
    }
                    
                };
    }

export type ReviewData = {
        PostReview: {
                    requestBody: Review
                    
                };
GetReviewById: {
                    /**
 * Идентификатор отзыва
 */
id: string
                    
                };
DeleteReviewById: {
                    /**
 * Идентификатор отзыва
 */
id: string
                    
                };
    }

export type UniversityData = {
        PostUniversityById: {
                    /**
 * ID администратора
 */
id: string
/**
 * Изображение университета
 */
image: unknown
requestBody: University
                    
                };
GetUniversityById: {
                    /**
 * ID университета
 */
id: string
                    
                };
PatchUniversityById: {
                    /**
 * ID университета
 */
id: string
/**
 * Изображение университета
 */
image?: unknown
requestBody: University
                    
                };
DeleteUniversityById: {
                    /**
 * ID университета
 */
id: string
                    
                };
PostUniversityAddCommentById: {
                    /**
 * ID университета
 */
id: string
requestBody: {
        user?: string
comment?: string
time?: string
    }
                    
                };
PostUniversityAddUserById: {
                    /**
 * ID университета
 */
id: string
requestBody: {
        user?: string
    }
                    
                };
PostUniversityDeleteUserById: {
                    /**
 * ID университета
 */
id: string
requestBody: {
        user?: string
    }
                    
                };
    }

export type UniversityNewsData = {
        GetNewsById: {
                    /**
 * Идентификатор новости
 */
id: string
                    
                };
PatchNewsById: {
                    formData: {
        title?: string
description?: string
image?: Array<string>
    }
/**
 * Идентификатор новости
 */
id: string
                    
                };
DeleteNewsById: {
                    /**
 * Идентификатор новости
 */
id: string
                    
                };
PostNews: {
                    formData: {
        title?: string
description?: string
image?: Array<string>
    }
                    
                };
    }

export type UserData = {
        PostUser: {
                    requestBody: {
        name: string
login: string
password: string
    }
                    
                };
PostLogin: {
                    requestBody: {
        login: string
password: string
    }
                    
                };
GetUserById: {
                    /**
 * User ID
 */
id: string
                    
                };
    }

export class DormitoryService {

	/**
	 * Получить список общежитий
	 * @returns Dormitory Возвращает список общежитий
	 * @throws ApiError
	 */
	public static getDormitore(): CancelablePromise<Array<Dormitory>> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/dormitore',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Получить одно общежитие
	 * @returns Dormitory A successful response, returns the requested user
	 * @throws ApiError
	 */
	public static getDormitoreById(data: DormitoryData['GetDormitoreById']): CancelablePromise<Dormitory> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/dormitore/{id}',
			path: {
				id
			},
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Создать новое общежитие
	 * @returns Dormitory Общежитие успешно создано
	 * @throws ApiError
	 */
	public static postAddDorm(data: DormitoryData['PostAddDorm']): CancelablePromise<Dormitory> {
		const {
                        
                        requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/addDorm',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

}

export class InstituteService {

	/**
	 * Создать новый институт
	 * @returns Institute Институт успешно создан
	 * @throws ApiError
	 */
	public static postInstitute(data: InstituteData['PostInstitute']): CancelablePromise<Institute> {
		const {
                        
                        formData
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/institute',
			formData: formData,
			mediaType: 'multipart/form-data',
			errors: {
				400: `Неверный запрос`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Получить список институтов
	 * @returns Institute Возвращает список институтов
	 * @throws ApiError
	 */
	public static getInstitute(): CancelablePromise<Array<Institute>> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/institute',
			errors: {
				404: `Институты не найдены`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

}

export class ReviewService {

	/**
	 * Создать новый отзыв
	 * @returns Review Отзыв успешно создан
	 * @throws ApiError
	 */
	public static postReview(data: ReviewData['PostReview']): CancelablePromise<Review> {
		const {
                        
                        requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/review',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Получить все отзывы
	 * @returns Review Возвращает список всех отзывов
	 * @throws ApiError
	 */
	public static getReview(): CancelablePromise<Array<Review>> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/review',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Получить отзыв по идентификатору
	 * @returns Review Возвращает отзыв
	 * @throws ApiError
	 */
	public static getReviewById(data: ReviewData['GetReviewById']): CancelablePromise<Review> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/review/{id}',
			path: {
				id
			},
			errors: {
				404: `Отзыв не найден`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Удалить отзыв по идентификатору
	 * @returns Review Отзыв успешно удален
	 * @throws ApiError
	 */
	public static deleteReviewById(data: ReviewData['DeleteReviewById']): CancelablePromise<Review> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/review/{id}',
			path: {
				id
			},
			errors: {
				404: `Отзыв не найден`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

}

export class UniversityService {

	/**
	 * Создать новый университет
	 * Создает новый университет с заданным ID администратора
	 * @returns University Университет успешно создан
	 * @throws ApiError
	 */
	public static postUniversityById(data: UniversityData['PostUniversityById']): CancelablePromise<University> {
		const {
                        
                        id,
image,
requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/university/{id}',
			path: {
				id
			},
			formData: {
				image
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Получить университет по ID
	 * Получает информацию об университете по его ID
	 * @returns University Университет успешно получен
	 * @throws ApiError
	 */
	public static getUniversityById(data: UniversityData['GetUniversityById']): CancelablePromise<University> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/university/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * Обновить университет
	 * Обновляет информацию об университете
	 * @returns University Университет успешно обновлен
	 * @throws ApiError
	 */
	public static patchUniversityById(data: UniversityData['PatchUniversityById']): CancelablePromise<University> {
		const {
                        
                        id,
requestBody,
image
                    } = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/university/{id}',
			path: {
				id
			},
			formData: {
				image
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Удалить университет
	 * Удаляет университет по его ID
	 * @returns University Университет успешно удален
	 * @throws ApiError
	 */
	public static deleteUniversityById(data: UniversityData['DeleteUniversityById']): CancelablePromise<University> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/university/{id}',
			path: {
				id
			},
			errors: {
				404: `Университет не найден`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Добавить комментарий к университету
	 * Добавляет комментарий к университету по его ID
	 * @returns UserComment Комментарий успешно добавлен
	 * @throws ApiError
	 */
	public static postUniversityAddCommentById(data: UniversityData['PostUniversityAddCommentById']): CancelablePromise<Array<UserComment>> {
		const {
                        
                        id,
requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/university/addComment/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Добавить пользователя к университету
	 * Добавляет пользователя к университету по его ID
	 * @returns University Пользователь успешно добавлен
	 * @throws ApiError
	 */
	public static postUniversityAddUserById(data: UniversityData['PostUniversityAddUserById']): CancelablePromise<University> {
		const {
                        
                        id,
requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/university/addUser/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Удалить пользователя из университета
	 * Удаляет пользователя из университета по его ID
	 * @returns University Пользователь успешно удален
	 * @throws ApiError
	 */
	public static postUniversityDeleteUserById(data: UniversityData['PostUniversityDeleteUserById']): CancelablePromise<University> {
		const {
                        
                        id,
requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/university/deleteUser/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Получить все университеты
	 * Получает список всех университетов
	 * @returns University Список университетов успешно получен
	 * @throws ApiError
	 */
	public static getUniversity(): CancelablePromise<Array<University>> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/university',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

}

export class UniversityNewsService {

	/**
	 * Получить одну новость университета
	 * @returns UniversityNews Возвращает новость университета
	 * @throws ApiError
	 */
	public static getNewsById(data: UniversityNewsData['GetNewsById']): CancelablePromise<UniversityNews> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/news/{id}',
			path: {
				id
			},
			errors: {
				404: `Новость не найдена`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Обновить новость университета
	 * @returns UniversityNews Новость успешно обновлена
	 * @throws ApiError
	 */
	public static patchNewsById(data: UniversityNewsData['PatchNewsById']): CancelablePromise<UniversityNews> {
		const {
                        
                        id,
formData
                    } = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/news/{id}',
			path: {
				id
			},
			formData: formData,
			mediaType: 'multipart/form-data',
			errors: {
				404: `Новость не найдена`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Удалить новость университета
	 * @returns UniversityNews Новость успешно удалена
	 * @throws ApiError
	 */
	public static deleteNewsById(data: UniversityNewsData['DeleteNewsById']): CancelablePromise<UniversityNews> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/news/{id}',
			path: {
				id
			},
			errors: {
				404: `Новость не найдена`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Получить список новостей университета
	 * @returns UniversityNews Возвращает список новостей университета
	 * @throws ApiError
	 */
	public static getNews(): CancelablePromise<Array<UniversityNews>> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/news',
			errors: {
				404: `Новости не найдены`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

	/**
	 * Создать новость университета
	 * @returns UniversityNews Новость успешно создана
	 * @throws ApiError
	 */
	public static postNews(data: UniversityNewsData['PostNews']): CancelablePromise<UniversityNews> {
		const {
                        
                        formData
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/news',
			formData: formData,
			mediaType: 'multipart/form-data',
			errors: {
				400: `Неверный запрос`,
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

}

export class UserService {

	/**
	 * Register a new user
	 * @returns User A successful response, returns the registered user
	 * @throws ApiError
	 */
	public static postUser(data: UserData['PostUser']): CancelablePromise<User> {
		const {
                        
                        requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/user',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Log in with existing credentials
	 * @returns any A successful response, returns a JWT token
	 * @throws ApiError
	 */
	public static postLogin(data: UserData['PostLogin']): CancelablePromise<{
        token?: string
login?: string
    }> {
		const {
                        
                        requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/login',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Get user by ID
	 * @returns User A successful response, returns the requested user
	 * @throws ApiError
	 */
	public static getUserById(data: UserData['GetUserById']): CancelablePromise<User> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/user/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * Получить информацию о всех пользователях
	 * @returns User Информация о всех пользователях успешно получена
	 * @throws ApiError
	 */
	public static getUsers(): CancelablePromise<Array<User>> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/users',
			errors: {
				500: `Внутренняя ошибка сервера`,
			},
		});
	}

}