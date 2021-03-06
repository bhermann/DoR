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
    CreatedDateV30Rc1,
    CreatedDateV30Rc1FromJSON,
    CreatedDateV30Rc1FromJSONTyped,
    CreatedDateV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface BiographyV30Rc1
 */
export interface BiographyV30Rc1 {
    /**
     * 
     * @type {CreatedDateV30Rc1}
     * @memberof BiographyV30Rc1
     */
    createdDate?: CreatedDateV30Rc1;
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof BiographyV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof BiographyV30Rc1
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof BiographyV30Rc1
     */
    visibility?: BiographyV30Rc1VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof BiographyV30Rc1
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum BiographyV30Rc1VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function BiographyV30Rc1FromJSON(json: any): BiographyV30Rc1 {
    return BiographyV30Rc1FromJSONTyped(json, false);
}

export function BiographyV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): BiographyV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc1FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'content': !exists(json, 'content') ? undefined : json['content'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function BiographyV30Rc1ToJSON(value?: BiographyV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30Rc1ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'content': value.content,
        'visibility': value.visibility,
        'path': value.path,
    };
}


