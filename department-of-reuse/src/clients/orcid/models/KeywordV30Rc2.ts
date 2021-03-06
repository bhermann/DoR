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
    CreatedDateV30Rc2,
    CreatedDateV30Rc2FromJSON,
    CreatedDateV30Rc2FromJSONTyped,
    CreatedDateV30Rc2ToJSON,
    LastModifiedDateV30Rc2,
    LastModifiedDateV30Rc2FromJSON,
    LastModifiedDateV30Rc2FromJSONTyped,
    LastModifiedDateV30Rc2ToJSON,
    SourceV30Rc2,
    SourceV30Rc2FromJSON,
    SourceV30Rc2FromJSONTyped,
    SourceV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface KeywordV30Rc2
 */
export interface KeywordV30Rc2 {
    /**
     * 
     * @type {CreatedDateV30Rc2}
     * @memberof KeywordV30Rc2
     */
    createdDate?: CreatedDateV30Rc2;
    /**
     * 
     * @type {LastModifiedDateV30Rc2}
     * @memberof KeywordV30Rc2
     */
    lastModifiedDate?: LastModifiedDateV30Rc2;
    /**
     * 
     * @type {SourceV30Rc2}
     * @memberof KeywordV30Rc2
     */
    source?: SourceV30Rc2;
    /**
     * 
     * @type {string}
     * @memberof KeywordV30Rc2
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof KeywordV30Rc2
     */
    visibility?: KeywordV30Rc2VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof KeywordV30Rc2
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof KeywordV30Rc2
     */
    putCode?: number;
    /**
     * 
     * @type {number}
     * @memberof KeywordV30Rc2
     */
    displayIndex?: number;
}

/**
* @export
* @enum {string}
*/
export enum KeywordV30Rc2VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function KeywordV30Rc2FromJSON(json: any): KeywordV30Rc2 {
    return KeywordV30Rc2FromJSONTyped(json, false);
}

export function KeywordV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc2FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc2FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30Rc2FromJSON(json['source']),
        'content': !exists(json, 'content') ? undefined : json['content'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function KeywordV30Rc2ToJSON(value?: KeywordV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30Rc2ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30Rc2ToJSON(value.lastModifiedDate),
        'source': SourceV30Rc2ToJSON(value.source),
        'content': value.content,
        'visibility': value.visibility,
        'path': value.path,
        'put-code': value.putCode,
        'display-index': value.displayIndex,
    };
}


