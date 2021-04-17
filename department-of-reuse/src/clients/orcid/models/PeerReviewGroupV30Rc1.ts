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
    ExternalIDsV30Rc1,
    ExternalIDsV30Rc1FromJSON,
    ExternalIDsV30Rc1FromJSONTyped,
    ExternalIDsV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
    PeerReviewDuplicateGroupV30Rc1,
    PeerReviewDuplicateGroupV30Rc1FromJSON,
    PeerReviewDuplicateGroupV30Rc1FromJSONTyped,
    PeerReviewDuplicateGroupV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface PeerReviewGroupV30Rc1
 */
export interface PeerReviewGroupV30Rc1 {
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof PeerReviewGroupV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {ExternalIDsV30Rc1}
     * @memberof PeerReviewGroupV30Rc1
     */
    externalIds?: ExternalIDsV30Rc1;
    /**
     * 
     * @type {Array<PeerReviewDuplicateGroupV30Rc1>}
     * @memberof PeerReviewGroupV30Rc1
     */
    peerReviewGroup?: Array<PeerReviewDuplicateGroupV30Rc1>;
}

export function PeerReviewGroupV30Rc1FromJSON(json: any): PeerReviewGroupV30Rc1 {
    return PeerReviewGroupV30Rc1FromJSONTyped(json, false);
}

export function PeerReviewGroupV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerReviewGroupV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30Rc1FromJSON(json['external-ids']),
        'peerReviewGroup': !exists(json, 'peer-review-group') ? undefined : ((json['peer-review-group'] as Array<any>).map(PeerReviewDuplicateGroupV30Rc1FromJSON)),
    };
}

export function PeerReviewGroupV30Rc1ToJSON(value?: PeerReviewGroupV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV30Rc1ToJSON(value.externalIds),
        'peer-review-group': value.peerReviewGroup === undefined ? undefined : ((value.peerReviewGroup as Array<any>).map(PeerReviewDuplicateGroupV30Rc1ToJSON)),
    };
}

