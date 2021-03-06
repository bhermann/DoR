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
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    MembershipSummaryV30,
    MembershipSummaryV30FromJSON,
    MembershipSummaryV30FromJSONTyped,
    MembershipSummaryV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface AffiliationGroupV30MembershipSummaryV30
 */
export interface AffiliationGroupV30MembershipSummaryV30 {
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof AffiliationGroupV30MembershipSummaryV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof AffiliationGroupV30MembershipSummaryV30
     */
    externalIds?: ExternalIDsV30;
    /**
     * 
     * @type {Array<MembershipSummaryV30>}
     * @memberof AffiliationGroupV30MembershipSummaryV30
     */
    summaries?: Array<MembershipSummaryV30>;
}

export function AffiliationGroupV30MembershipSummaryV30FromJSON(json: any): AffiliationGroupV30MembershipSummaryV30 {
    return AffiliationGroupV30MembershipSummaryV30FromJSONTyped(json, false);
}

export function AffiliationGroupV30MembershipSummaryV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): AffiliationGroupV30MembershipSummaryV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30FromJSON(json['external-ids']),
        'summaries': !exists(json, 'summaries') ? undefined : ((json['summaries'] as Array<any>).map(MembershipSummaryV30FromJSON)),
    };
}

export function AffiliationGroupV30MembershipSummaryV30ToJSON(value?: AffiliationGroupV30MembershipSummaryV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV30ToJSON(value.externalIds),
        'summaries': value.summaries === undefined ? undefined : ((value.summaries as Array<any>).map(MembershipSummaryV30ToJSON)),
    };
}


