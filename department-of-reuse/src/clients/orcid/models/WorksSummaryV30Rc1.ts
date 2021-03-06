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
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
    WorkGroupV30Rc1,
    WorkGroupV30Rc1FromJSON,
    WorkGroupV30Rc1FromJSONTyped,
    WorkGroupV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorksSummaryV30Rc1
 */
export interface WorksSummaryV30Rc1 {
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof WorksSummaryV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {Array<WorkGroupV30Rc1>}
     * @memberof WorksSummaryV30Rc1
     */
    group?: Array<WorkGroupV30Rc1>;
    /**
     * 
     * @type {string}
     * @memberof WorksSummaryV30Rc1
     */
    path?: string;
}

export function WorksSummaryV30Rc1FromJSON(json: any): WorksSummaryV30Rc1 {
    return WorksSummaryV30Rc1FromJSONTyped(json, false);
}

export function WorksSummaryV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): WorksSummaryV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'group': !exists(json, 'group') ? undefined : ((json['group'] as Array<any>).map(WorkGroupV30Rc1FromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function WorksSummaryV30Rc1ToJSON(value?: WorksSummaryV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'group': value.group === undefined ? undefined : ((value.group as Array<any>).map(WorkGroupV30Rc1ToJSON)),
        'path': value.path,
    };
}


