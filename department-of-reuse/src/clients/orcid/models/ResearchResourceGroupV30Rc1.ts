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
    ResearchResourceSummaryV30Rc1,
    ResearchResourceSummaryV30Rc1FromJSON,
    ResearchResourceSummaryV30Rc1FromJSONTyped,
    ResearchResourceSummaryV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResearchResourceGroupV30Rc1
 */
export interface ResearchResourceGroupV30Rc1 {
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof ResearchResourceGroupV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {ExternalIDsV30Rc1}
     * @memberof ResearchResourceGroupV30Rc1
     */
    externalIds?: ExternalIDsV30Rc1;
    /**
     * 
     * @type {Array<ResearchResourceSummaryV30Rc1>}
     * @memberof ResearchResourceGroupV30Rc1
     */
    researchResourceSummary?: Array<ResearchResourceSummaryV30Rc1>;
}

export function ResearchResourceGroupV30Rc1FromJSON(json: any): ResearchResourceGroupV30Rc1 {
    return ResearchResourceGroupV30Rc1FromJSONTyped(json, false);
}

export function ResearchResourceGroupV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResearchResourceGroupV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30Rc1FromJSON(json['external-ids']),
        'researchResourceSummary': !exists(json, 'research-resource-summary') ? undefined : ((json['research-resource-summary'] as Array<any>).map(ResearchResourceSummaryV30Rc1FromJSON)),
    };
}

export function ResearchResourceGroupV30Rc1ToJSON(value?: ResearchResourceGroupV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV30Rc1ToJSON(value.externalIds),
        'research-resource-summary': value.researchResourceSummary === undefined ? undefined : ((value.researchResourceSummary as Array<any>).map(ResearchResourceSummaryV30Rc1ToJSON)),
    };
}


