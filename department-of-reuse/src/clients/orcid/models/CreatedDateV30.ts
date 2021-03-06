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
 * @interface CreatedDateV30
 */
export interface CreatedDateV30 {
    /**
     * 
     * @type {Date}
     * @memberof CreatedDateV30
     */
    readonly value?: Date;
}

export function CreatedDateV30FromJSON(json: any): CreatedDateV30 {
    return CreatedDateV30FromJSONTyped(json, false);
}

export function CreatedDateV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedDateV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (new Date(json['value'])),
    };
}

export function CreatedDateV30ToJSON(value?: CreatedDateV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


