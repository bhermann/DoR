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
    TransientError,
    TransientErrorFromJSON,
    TransientErrorFromJSONTyped,
    TransientErrorToJSON,
    TransientNonEmptyString,
    TransientNonEmptyStringFromJSON,
    TransientNonEmptyStringFromJSONTyped,
    TransientNonEmptyStringToJSON,
    UrlV30Rc1,
    UrlV30Rc1FromJSON,
    UrlV30Rc1FromJSONTyped,
    UrlV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExternalIDV30Rc1
 */
export interface ExternalIDV30Rc1 {
    /**
     * 
     * @type {string}
     * @memberof ExternalIDV30Rc1
     */
    externalIdType: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalIDV30Rc1
     */
    externalIdValue: string;
    /**
     * 
     * @type {TransientNonEmptyString}
     * @memberof ExternalIDV30Rc1
     */
    externalIdNormalized?: TransientNonEmptyString;
    /**
     * 
     * @type {TransientError}
     * @memberof ExternalIDV30Rc1
     */
    externalIdNormalizedError?: TransientError;
    /**
     * 
     * @type {UrlV30Rc1}
     * @memberof ExternalIDV30Rc1
     */
    externalIdUrl?: UrlV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof ExternalIDV30Rc1
     */
    externalIdRelationship?: ExternalIDV30Rc1ExternalIdRelationshipEnum;
}

/**
* @export
* @enum {string}
*/
export enum ExternalIDV30Rc1ExternalIdRelationshipEnum {
    PartOf = 'PART_OF',
    Self = 'SELF'
}

export function ExternalIDV30Rc1FromJSON(json: any): ExternalIDV30Rc1 {
    return ExternalIDV30Rc1FromJSONTyped(json, false);
}

export function ExternalIDV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalIDV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalIdType': json['external-id-type'],
        'externalIdValue': json['external-id-value'],
        'externalIdNormalized': !exists(json, 'external-id-normalized') ? undefined : TransientNonEmptyStringFromJSON(json['external-id-normalized']),
        'externalIdNormalizedError': !exists(json, 'external-id-normalized-error') ? undefined : TransientErrorFromJSON(json['external-id-normalized-error']),
        'externalIdUrl': !exists(json, 'external-id-url') ? undefined : UrlV30Rc1FromJSON(json['external-id-url']),
        'externalIdRelationship': !exists(json, 'external-id-relationship') ? undefined : json['external-id-relationship'],
    };
}

export function ExternalIDV30Rc1ToJSON(value?: ExternalIDV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'external-id-type': value.externalIdType,
        'external-id-value': value.externalIdValue,
        'external-id-normalized': TransientNonEmptyStringToJSON(value.externalIdNormalized),
        'external-id-normalized-error': TransientErrorToJSON(value.externalIdNormalizedError),
        'external-id-url': UrlV30Rc1ToJSON(value.externalIdUrl),
        'external-id-relationship': value.externalIdRelationship,
    };
}


