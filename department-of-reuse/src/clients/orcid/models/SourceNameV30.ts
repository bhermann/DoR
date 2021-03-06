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
 * @interface SourceNameV30
 */
export interface SourceNameV30 {
    /**
     * 
     * @type {string}
     * @memberof SourceNameV30
     */
    value?: string;
}

export function SourceNameV30FromJSON(json: any): SourceNameV30 {
    return SourceNameV30FromJSONTyped(json, false);
}

export function SourceNameV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceNameV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function SourceNameV30ToJSON(value?: SourceNameV30 | null): any {
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


