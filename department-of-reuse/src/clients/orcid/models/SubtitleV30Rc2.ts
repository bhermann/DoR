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
/**
 * 
 * @export
 * @interface SubtitleV30Rc2
 */
export interface SubtitleV30Rc2 {
    /**
     * 
     * @type {string}
     * @memberof SubtitleV30Rc2
     */
    value?: string;
}

export function SubtitleV30Rc2FromJSON(json: any): SubtitleV30Rc2 {
    return SubtitleV30Rc2FromJSONTyped(json, false);
}

export function SubtitleV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SubtitleV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function SubtitleV30Rc2ToJSON(value?: SubtitleV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}


