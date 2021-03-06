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
    OrganizationV30,
    OrganizationV30FromJSON,
    OrganizationV30FromJSONTyped,
    OrganizationV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResearchResourceHostsV30
 */
export interface ResearchResourceHostsV30 {
    /**
     * 
     * @type {Array<OrganizationV30>}
     * @memberof ResearchResourceHostsV30
     */
    organization?: Array<OrganizationV30>;
}

export function ResearchResourceHostsV30FromJSON(json: any): ResearchResourceHostsV30 {
    return ResearchResourceHostsV30FromJSONTyped(json, false);
}

export function ResearchResourceHostsV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResearchResourceHostsV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organization': !exists(json, 'organization') ? undefined : ((json['organization'] as Array<any>).map(OrganizationV30FromJSON)),
    };
}

export function ResearchResourceHostsV30ToJSON(value?: ResearchResourceHostsV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organization': value.organization === undefined ? undefined : ((value.organization as Array<any>).map(OrganizationV30ToJSON)),
    };
}


