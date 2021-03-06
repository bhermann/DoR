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
 * @interface FundingContributorAttributesV30Rc1
 */
export interface FundingContributorAttributesV30Rc1 {
    /**
     * 
     * @type {string}
     * @memberof FundingContributorAttributesV30Rc1
     */
    contributorRole: FundingContributorAttributesV30Rc1ContributorRoleEnum;
}

/**
* @export
* @enum {string}
*/
export enum FundingContributorAttributesV30Rc1ContributorRoleEnum {
    Lead = 'LEAD',
    CoLead = 'CO_LEAD',
    SupportedBy = 'SUPPORTED_BY',
    OtherContribution = 'OTHER_CONTRIBUTION'
}

export function FundingContributorAttributesV30Rc1FromJSON(json: any): FundingContributorAttributesV30Rc1 {
    return FundingContributorAttributesV30Rc1FromJSONTyped(json, false);
}

export function FundingContributorAttributesV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingContributorAttributesV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contributorRole': json['contributor-role'],
    };
}

export function FundingContributorAttributesV30Rc1ToJSON(value?: FundingContributorAttributesV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contributor-role': value.contributorRole,
    };
}


