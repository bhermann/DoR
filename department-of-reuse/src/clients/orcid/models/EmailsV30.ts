/* tslint:disable */
/* eslint-disable */
/**
 * ORCID Public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EmailV30,
    EmailV30FromJSON,
    EmailV30FromJSONTyped,
    EmailV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface EmailsV30
 */
export interface EmailsV30 {
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof EmailsV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {Array<EmailV30>}
     * @memberof EmailsV30
     */
    email?: Array<EmailV30>;
    /**
     * 
     * @type {string}
     * @memberof EmailsV30
     */
    path?: string;
}

export function EmailsV30FromJSON(json: any): EmailsV30 {
    return EmailsV30FromJSONTyped(json, false);
}

export function EmailsV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailsV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'email': !exists(json, 'email') ? undefined : ((json['email'] as Array<any>).map(EmailV30FromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function EmailsV30ToJSON(value?: EmailsV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'email': value.email === undefined ? undefined : ((value.email as Array<any>).map(EmailV30ToJSON)),
        'path': value.path,
    };
}

