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
    EmailV30Rc1,
    EmailV30Rc1FromJSON,
    EmailV30Rc1FromJSONTyped,
    EmailV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface EmailsV30Rc1
 */
export interface EmailsV30Rc1 {
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof EmailsV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {Array<EmailV30Rc1>}
     * @memberof EmailsV30Rc1
     */
    email?: Array<EmailV30Rc1>;
    /**
     * 
     * @type {string}
     * @memberof EmailsV30Rc1
     */
    path?: string;
}

export function EmailsV30Rc1FromJSON(json: any): EmailsV30Rc1 {
    return EmailsV30Rc1FromJSONTyped(json, false);
}

export function EmailsV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailsV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'email': !exists(json, 'email') ? undefined : ((json['email'] as Array<any>).map(EmailV30Rc1FromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function EmailsV30Rc1ToJSON(value?: EmailsV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'email': value.email === undefined ? undefined : ((value.email as Array<any>).map(EmailV30Rc1ToJSON)),
        'path': value.path,
    };
}


