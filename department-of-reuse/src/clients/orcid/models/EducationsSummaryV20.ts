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
    EducationSummaryV20,
    EducationSummaryV20FromJSON,
    EducationSummaryV20FromJSONTyped,
    EducationSummaryV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface EducationsSummaryV20
 */
export interface EducationsSummaryV20 {
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof EducationsSummaryV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {Array<EducationSummaryV20>}
     * @memberof EducationsSummaryV20
     */
    educationSummary?: Array<EducationSummaryV20>;
    /**
     * 
     * @type {string}
     * @memberof EducationsSummaryV20
     */
    path?: string;
}

export function EducationsSummaryV20FromJSON(json: any): EducationsSummaryV20 {
    return EducationsSummaryV20FromJSONTyped(json, false);
}

export function EducationsSummaryV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): EducationsSummaryV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'educationSummary': !exists(json, 'education-summary') ? undefined : ((json['education-summary'] as Array<any>).map(EducationSummaryV20FromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function EducationsSummaryV20ToJSON(value?: EducationsSummaryV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'education-summary': value.educationSummary === undefined ? undefined : ((value.educationSummary as Array<any>).map(EducationSummaryV20ToJSON)),
        'path': value.path,
    };
}


