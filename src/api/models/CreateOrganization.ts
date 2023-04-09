/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOrganization = ({
    readonly id?: number;
    readonly icon_link?: string;
    login?: string;
    email?: string;
} & {
    /**
     * пароль организации
     */
    password?: string;
});

