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
    ExternalIDV30,
    ExternalIDV30FromJSON,
    ExternalIDV30FromJSONTyped,
    ExternalIDV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExternalIDsV30
 */
export interface ExternalIDsV30 {
    /**
     * 
     * @type {Array<ExternalIDV30>}
     * @memberof ExternalIDsV30
     */
    externalId?: Array<ExternalIDV30>;
}

export function ExternalIDsV30FromJSON(json: any): ExternalIDsV30 {
    return ExternalIDsV30FromJSONTyped(json, false);
}

export function ExternalIDsV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalIDsV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalId': !exists(json, 'external-id') ? undefined : ((json['external-id'] as Array<any>).map(ExternalIDV30FromJSON)),
    };
}

export function ExternalIDsV30ToJSON(value?: ExternalIDsV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'external-id': value.externalId === undefined ? undefined : ((value.externalId as Array<any>).map(ExternalIDV30ToJSON)),
    };
}


