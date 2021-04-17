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
    ExternalIDsV30,
    ExternalIDsV30FromJSON,
    ExternalIDsV30FromJSONTyped,
    ExternalIDsV30ToJSON,
    FundingSummaryV30,
    FundingSummaryV30FromJSON,
    FundingSummaryV30FromJSONTyped,
    FundingSummaryV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingGroupV30
 */
export interface FundingGroupV30 {
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof FundingGroupV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof FundingGroupV30
     */
    externalIds?: ExternalIDsV30;
    /**
     * 
     * @type {Array<FundingSummaryV30>}
     * @memberof FundingGroupV30
     */
    fundingSummary?: Array<FundingSummaryV30>;
}

export function FundingGroupV30FromJSON(json: any): FundingGroupV30 {
    return FundingGroupV30FromJSONTyped(json, false);
}

export function FundingGroupV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingGroupV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30FromJSON(json['external-ids']),
        'fundingSummary': !exists(json, 'funding-summary') ? undefined : ((json['funding-summary'] as Array<any>).map(FundingSummaryV30FromJSON)),
    };
}

export function FundingGroupV30ToJSON(value?: FundingGroupV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV30ToJSON(value.externalIds),
        'funding-summary': value.fundingSummary === undefined ? undefined : ((value.fundingSummary as Array<any>).map(FundingSummaryV30ToJSON)),
    };
}

