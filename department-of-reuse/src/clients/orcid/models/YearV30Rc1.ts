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
 * @interface YearV30Rc1
 */
export interface YearV30Rc1 {
    /**
     * 
     * @type {string}
     * @memberof YearV30Rc1
     */
    value?: string;
}

export function YearV30Rc1FromJSON(json: any): YearV30Rc1 {
    return YearV30Rc1FromJSONTyped(json, false);
}

export function YearV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): YearV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function YearV30Rc1ToJSON(value?: YearV30Rc1 | null): any {
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


