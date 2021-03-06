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
 * @interface FundingContributorAttributesV30
 */
export interface FundingContributorAttributesV30 {
    /**
     * 
     * @type {string}
     * @memberof FundingContributorAttributesV30
     */
    contributorRole: FundingContributorAttributesV30ContributorRoleEnum;
}

/**
* @export
* @enum {string}
*/
export enum FundingContributorAttributesV30ContributorRoleEnum {
    Author = 'author',
    Assignee = 'assignee',
    Editor = 'editor',
    ChairOrTranslator = 'chair-or-translator',
    CoInvestigator = 'co-investigator',
    CoInventor = 'co-inventor',
    GraduateStudent = 'graduate-student',
    OtherInventor = 'other-inventor',
    PrincipalInvestigator = 'principal-investigator',
    PostdoctoralResearcher = 'postdoctoral-researcher',
    SupportStaff = 'support-staff'
}

export function FundingContributorAttributesV30FromJSON(json: any): FundingContributorAttributesV30 {
    return FundingContributorAttributesV30FromJSONTyped(json, false);
}

export function FundingContributorAttributesV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingContributorAttributesV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contributorRole': json['contributor-role'],
    };
}

export function FundingContributorAttributesV30ToJSON(value?: FundingContributorAttributesV30 | null): any {
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


