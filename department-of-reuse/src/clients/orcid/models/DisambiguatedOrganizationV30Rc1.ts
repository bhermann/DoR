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
 * @interface DisambiguatedOrganizationV30Rc1
 */
export interface DisambiguatedOrganizationV30Rc1 {
    /**
     * 
     * @type {string}
     * @memberof DisambiguatedOrganizationV30Rc1
     */
    disambiguatedOrganizationIdentifier: string;
    /**
     * 
     * @type {string}
     * @memberof DisambiguatedOrganizationV30Rc1
     */
    disambiguationSource: string;
}

export function DisambiguatedOrganizationV30Rc1FromJSON(json: any): DisambiguatedOrganizationV30Rc1 {
    return DisambiguatedOrganizationV30Rc1FromJSONTyped(json, false);
}

export function DisambiguatedOrganizationV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DisambiguatedOrganizationV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disambiguatedOrganizationIdentifier': json['disambiguated-organization-identifier'],
        'disambiguationSource': json['disambiguation-source'],
    };
}

export function DisambiguatedOrganizationV30Rc1ToJSON(value?: DisambiguatedOrganizationV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disambiguated-organization-identifier': value.disambiguatedOrganizationIdentifier,
        'disambiguation-source': value.disambiguationSource,
    };
}


