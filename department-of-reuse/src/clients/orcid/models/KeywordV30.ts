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
    CreatedDateV30,
    CreatedDateV30FromJSON,
    CreatedDateV30FromJSONTyped,
    CreatedDateV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    SourceV30,
    SourceV30FromJSON,
    SourceV30FromJSONTyped,
    SourceV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface KeywordV30
 */
export interface KeywordV30 {
    /**
     * 
     * @type {CreatedDateV30}
     * @memberof KeywordV30
     */
    createdDate?: CreatedDateV30;
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof KeywordV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {SourceV30}
     * @memberof KeywordV30
     */
    source?: SourceV30;
    /**
     * 
     * @type {string}
     * @memberof KeywordV30
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof KeywordV30
     */
    visibility?: KeywordV30VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof KeywordV30
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof KeywordV30
     */
    putCode?: number;
    /**
     * 
     * @type {number}
     * @memberof KeywordV30
     */
    displayIndex?: number;
}

/**
* @export
* @enum {string}
*/
export enum KeywordV30VisibilityEnum {
    Limited = 'limited',
    RegisteredOnly = 'registered-only',
    Public = 'public'
}

export function KeywordV30FromJSON(json: any): KeywordV30 {
    return KeywordV30FromJSONTyped(json, false);
}

export function KeywordV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30FromJSON(json['source']),
        'content': !exists(json, 'content') ? undefined : json['content'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function KeywordV30ToJSON(value?: KeywordV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'source': SourceV30ToJSON(value.source),
        'content': value.content,
        'visibility': value.visibility,
        'path': value.path,
        'put-code': value.putCode,
        'display-index': value.displayIndex,
    };
}


