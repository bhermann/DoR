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
 * @interface AmountV20
 */
export interface AmountV20 {
    /**
     * 
     * @type {string}
     * @memberof AmountV20
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof AmountV20
     */
    currencyCode: string;
}

export function AmountV20FromJSON(json: any): AmountV20 {
    return AmountV20FromJSONTyped(json, false);
}

export function AmountV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'currencyCode': json['currency-code'],
    };
}

export function AmountV20ToJSON(value?: AmountV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'currency-code': value.currencyCode,
    };
}


