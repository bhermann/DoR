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
    AffiliationGroupV30Rc1DistinctionSummaryV30Rc1,
    AffiliationGroupV30Rc1DistinctionSummaryV30Rc1FromJSON,
    AffiliationGroupV30Rc1DistinctionSummaryV30Rc1FromJSONTyped,
    AffiliationGroupV30Rc1DistinctionSummaryV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface DistinctionsV30Rc1
 */
export interface DistinctionsV30Rc1 {
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof DistinctionsV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {Array<AffiliationGroupV30Rc1DistinctionSummaryV30Rc1>}
     * @memberof DistinctionsV30Rc1
     */
    affiliationGroup?: Array<AffiliationGroupV30Rc1DistinctionSummaryV30Rc1>;
    /**
     * 
     * @type {string}
     * @memberof DistinctionsV30Rc1
     */
    path?: string;
}

export function DistinctionsV30Rc1FromJSON(json: any): DistinctionsV30Rc1 {
    return DistinctionsV30Rc1FromJSONTyped(json, false);
}

export function DistinctionsV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DistinctionsV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'affiliationGroup': !exists(json, 'affiliation-group') ? undefined : ((json['affiliation-group'] as Array<any>).map(AffiliationGroupV30Rc1DistinctionSummaryV30Rc1FromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function DistinctionsV30Rc1ToJSON(value?: DistinctionsV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'affiliation-group': value.affiliationGroup === undefined ? undefined : ((value.affiliationGroup as Array<any>).map(AffiliationGroupV30Rc1DistinctionSummaryV30Rc1ToJSON)),
        'path': value.path,
    };
}


