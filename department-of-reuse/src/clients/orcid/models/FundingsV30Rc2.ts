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
    FundingGroupV30Rc2,
    FundingGroupV30Rc2FromJSON,
    FundingGroupV30Rc2FromJSONTyped,
    FundingGroupV30Rc2ToJSON,
    LastModifiedDateV30Rc2,
    LastModifiedDateV30Rc2FromJSON,
    LastModifiedDateV30Rc2FromJSONTyped,
    LastModifiedDateV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingsV30Rc2
 */
export interface FundingsV30Rc2 {
    /**
     * 
     * @type {LastModifiedDateV30Rc2}
     * @memberof FundingsV30Rc2
     */
    lastModifiedDate?: LastModifiedDateV30Rc2;
    /**
     * 
     * @type {Array<FundingGroupV30Rc2>}
     * @memberof FundingsV30Rc2
     */
    group?: Array<FundingGroupV30Rc2>;
    /**
     * 
     * @type {string}
     * @memberof FundingsV30Rc2
     */
    path?: string;
}

export function FundingsV30Rc2FromJSON(json: any): FundingsV30Rc2 {
    return FundingsV30Rc2FromJSONTyped(json, false);
}

export function FundingsV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingsV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc2FromJSON(json['last-modified-date']),
        'group': !exists(json, 'group') ? undefined : ((json['group'] as Array<any>).map(FundingGroupV30Rc2FromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function FundingsV30Rc2ToJSON(value?: FundingsV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc2ToJSON(value.lastModifiedDate),
        'group': value.group === undefined ? undefined : ((value.group as Array<any>).map(FundingGroupV30Rc2ToJSON)),
        'path': value.path,
    };
}


