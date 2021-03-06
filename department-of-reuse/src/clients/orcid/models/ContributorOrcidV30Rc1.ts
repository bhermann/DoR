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
/**
 * 
 * @export
 * @interface ContributorOrcidV30Rc1
 */
export interface ContributorOrcidV30Rc1 {
    /**
     * 
     * @type {string}
     * @memberof ContributorOrcidV30Rc1
     */
    uri?: string;
    /**
     * 
     * @type {string}
     * @memberof ContributorOrcidV30Rc1
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ContributorOrcidV30Rc1
     */
    host?: string;
}

export function ContributorOrcidV30Rc1FromJSON(json: any): ContributorOrcidV30Rc1 {
    return ContributorOrcidV30Rc1FromJSONTyped(json, false);
}

export function ContributorOrcidV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorOrcidV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function ContributorOrcidV30Rc1ToJSON(value?: ContributorOrcidV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uri': value.uri,
        'path': value.path,
        'host': value.host,
    };
}


