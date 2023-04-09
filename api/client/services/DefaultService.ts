/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Achivment } from '../models/Achivment';
import type { UpdateAchivment } from '../models/UpdateAchivment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Создаёт объект ачивки
     * Создаёт объект ачивки, возвращает id
     * @param requestBody
     * @returns Achivment Объект успешно создан
     * @throws ApiError
     */
    public static createAchivment(
        requestBody: Achivment,
    ): CancelablePromise<Achivment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/achivment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * возвращает пагиринованный список ачивок
     * @param page индекс страницы
     * @param authorization
     * @param size кол-во элементов в ответе
     * @returns Achivment Пагинированный список ачивок юзера
     * @throws ApiError
     */
    public static listAchivments(
        page: number,
        authorization: string,
        size: number = 20,
    ): CancelablePromise<Array<Achivment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/achivment',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * Возвращает ачивку по id
     * Возвращает ачивку по указанному "schema_id"
     * @param id
     * @returns Achivment Ачивка найдена
     * @throws ApiError
     */
    public static getAchivment(
        id: number,
    ): CancelablePromise<Achivment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/achivment/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Обновляет поля ачивки
     * Обновляет поля ачивки
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateAchivment(
        requestBody: UpdateAchivment,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/achivment/{id}',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Удаляет ачивку по id
     * Удаляет ачивку по id
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteAcivmentById(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/achivment/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Позволяет загрузить изображение в систему
     * Позволяет загрузить изображение ачивки.
     * @param requestBody
     * @returns string Изображение загружено
     * @throws ApiError
     */
    public static uploadAchivmentIcon(
        requestBody: Blob,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/achivment/upload_icon',
            body: requestBody,
            mediaType: 'image/png',
        });
    }

    /**
     * создаёт организацию
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static createOrganization(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization',
            body: requestBody,
        });
    }

    /**
     * обновляет информацию об организации
     * @param requestBody
     * @throws ApiError
     */
    public static updateOrganizationInfo(
        requestBody?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/organization',
            body: requestBody,
        });
    }

    /**
     * удаляет организацию по id
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteOrganization(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/organization/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * получить информацию об организации по id
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static getOrganizationInfo(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organization/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Позволяет загрузить изображение в систему
     * Позволяет загрузить изображение огранизации.
     * @param requestBody
     * @returns string Изображение загружено
     * @throws ApiError
     */
    public static uploadOrganizationIcon(
        requestBody: Blob,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/upload_icon',
            body: requestBody,
            mediaType: 'image/png',
        });
    }

    /**
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static changePassword(
        requestBody?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organization/change_password',
            body: requestBody,
        });
    }

}
