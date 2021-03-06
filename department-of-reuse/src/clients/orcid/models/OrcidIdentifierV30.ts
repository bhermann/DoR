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
 * @interface OrcidIdentifierV30
 */
export interface OrcidIdentifierV30 {
    /**
     * 
     * @type {string}
     * @memberof OrcidIdentifierV30
     */
    uri?: string;
    /**
     * 
     * @type {string}
     * @memberof OrcidIdentifierV30
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof OrcidIdentifierV30
     */
    host?: string;
}

export function OrcidIdentifierV30FromJSON(json: any): OrcidIdentifierV30 {
    return OrcidIdentifierV30FromJSONTyped(json, false);
}

export function OrcidIdentifierV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): OrcidIdentifierV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function OrcidIdentifierV30ToJSON(value?: OrcidIdentifierV30 | null): any {
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


