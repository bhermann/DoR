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
    PeerReviewSummaryV30,
    PeerReviewSummaryV30FromJSON,
    PeerReviewSummaryV30FromJSONTyped,
    PeerReviewSummaryV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface PeerReviewDuplicateGroupV30
 */
export interface PeerReviewDuplicateGroupV30 {
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof PeerReviewDuplicateGroupV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof PeerReviewDuplicateGroupV30
     */
    externalIds?: ExternalIDsV30;
    /**
     * 
     * @type {Array<PeerReviewSummaryV30>}
     * @memberof PeerReviewDuplicateGroupV30
     */
    peerReviewSummary?: Array<PeerReviewSummaryV30>;
}

export function PeerReviewDuplicateGroupV30FromJSON(json: any): PeerReviewDuplicateGroupV30 {
    return PeerReviewDuplicateGroupV30FromJSONTyped(json, false);
}

export function PeerReviewDuplicateGroupV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerReviewDuplicateGroupV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30FromJSON(json['external-ids']),
        'peerReviewSummary': !exists(json, 'peer-review-summary') ? undefined : ((json['peer-review-summary'] as Array<any>).map(PeerReviewSummaryV30FromJSON)),
    };
}

export function PeerReviewDuplicateGroupV30ToJSON(value?: PeerReviewDuplicateGroupV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV30ToJSON(value.externalIds),
        'peer-review-summary': value.peerReviewSummary === undefined ? undefined : ((value.peerReviewSummary as Array<any>).map(PeerReviewSummaryV30ToJSON)),
    };
}


