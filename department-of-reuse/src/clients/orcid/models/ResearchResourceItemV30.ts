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
    ResearchResourceHostsV30,
    ResearchResourceHostsV30FromJSON,
    ResearchResourceHostsV30FromJSONTyped,
    ResearchResourceHostsV30ToJSON,
    UrlV30,
    UrlV30FromJSON,
    UrlV30FromJSONTyped,
    UrlV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResearchResourceItemV30
 */
export interface ResearchResourceItemV30 {
    /**
     * 
     * @type {string}
     * @memberof ResearchResourceItemV30
     */
    resourceName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResearchResourceItemV30
     */
    resourceType?: ResearchResourceItemV30ResourceTypeEnum;
    /**
     * 
     * @type {ResearchResourceHostsV30}
     * @memberof ResearchResourceItemV30
     */
    hosts?: ResearchResourceHostsV30;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof ResearchResourceItemV30
     */
    externalIds?: ExternalIDsV30;
    /**
     * 
     * @type {UrlV30}
     * @memberof ResearchResourceItemV30
     */
    url?: UrlV30;
}

/**
* @export
* @enum {string}
*/
export enum ResearchResourceItemV30ResourceTypeEnum {
    Infrastructures = 'infrastructures',
    Collections = 'collections',
    Equipment = 'equipment',
    Services = 'services'
}

export function ResearchResourceItemV30FromJSON(json: any): ResearchResourceItemV30 {
    return ResearchResourceItemV30FromJSONTyped(json, false);
}

export function ResearchResourceItemV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResearchResourceItemV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resourceName': !exists(json, 'resource-name') ? undefined : json['resource-name'],
        'resourceType': !exists(json, 'resource-type') ? undefined : json['resource-type'],
        'hosts': !exists(json, 'hosts') ? undefined : ResearchResourceHostsV30FromJSON(json['hosts']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30FromJSON(json['external-ids']),
        'url': !exists(json, 'url') ? undefined : UrlV30FromJSON(json['url']),
    };
}

export function ResearchResourceItemV30ToJSON(value?: ResearchResourceItemV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource-name': value.resourceName,
        'resource-type': value.resourceType,
        'hosts': ResearchResourceHostsV30ToJSON(value.hosts),
        'external-ids': ExternalIDsV30ToJSON(value.externalIds),
        'url': UrlV30ToJSON(value.url),
    };
}


