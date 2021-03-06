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
    AmountV20,
    AmountV20FromJSON,
    AmountV20FromJSONTyped,
    AmountV20ToJSON,
    CreatedDateV20,
    CreatedDateV20FromJSON,
    CreatedDateV20FromJSONTyped,
    CreatedDateV20ToJSON,
    ExternalIDsV20,
    ExternalIDsV20FromJSON,
    ExternalIDsV20FromJSONTyped,
    ExternalIDsV20ToJSON,
    FundingContributorsV20,
    FundingContributorsV20FromJSON,
    FundingContributorsV20FromJSONTyped,
    FundingContributorsV20ToJSON,
    FundingTitleV20,
    FundingTitleV20FromJSON,
    FundingTitleV20FromJSONTyped,
    FundingTitleV20ToJSON,
    FuzzyDateV20,
    FuzzyDateV20FromJSON,
    FuzzyDateV20FromJSONTyped,
    FuzzyDateV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    OrganizationDefinedFundingSubTypeV20,
    OrganizationDefinedFundingSubTypeV20FromJSON,
    OrganizationDefinedFundingSubTypeV20FromJSONTyped,
    OrganizationDefinedFundingSubTypeV20ToJSON,
    OrganizationV20,
    OrganizationV20FromJSON,
    OrganizationV20FromJSONTyped,
    OrganizationV20ToJSON,
    SourceV20,
    SourceV20FromJSON,
    SourceV20FromJSONTyped,
    SourceV20ToJSON,
    UrlV20,
    UrlV20FromJSON,
    UrlV20FromJSONTyped,
    UrlV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingV20
 */
export interface FundingV20 {
    /**
     * 
     * @type {CreatedDateV20}
     * @memberof FundingV20
     */
    createdDate?: CreatedDateV20;
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof FundingV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {SourceV20}
     * @memberof FundingV20
     */
    source?: SourceV20;
    /**
     * 
     * @type {number}
     * @memberof FundingV20
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof FundingV20
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof FundingV20
     */
    type: FundingV20TypeEnum;
    /**
     * 
     * @type {OrganizationDefinedFundingSubTypeV20}
     * @memberof FundingV20
     */
    organizationDefinedType?: OrganizationDefinedFundingSubTypeV20;
    /**
     * 
     * @type {FundingTitleV20}
     * @memberof FundingV20
     */
    title: FundingTitleV20;
    /**
     * 
     * @type {string}
     * @memberof FundingV20
     */
    shortDescription?: string;
    /**
     * 
     * @type {AmountV20}
     * @memberof FundingV20
     */
    amount?: AmountV20;
    /**
     * 
     * @type {UrlV20}
     * @memberof FundingV20
     */
    url?: UrlV20;
    /**
     * 
     * @type {FuzzyDateV20}
     * @memberof FundingV20
     */
    startDate?: FuzzyDateV20;
    /**
     * 
     * @type {FuzzyDateV20}
     * @memberof FundingV20
     */
    endDate?: FuzzyDateV20;
    /**
     * 
     * @type {ExternalIDsV20}
     * @memberof FundingV20
     */
    externalIds?: ExternalIDsV20;
    /**
     * 
     * @type {FundingContributorsV20}
     * @memberof FundingV20
     */
    contributors?: FundingContributorsV20;
    /**
     * 
     * @type {OrganizationV20}
     * @memberof FundingV20
     */
    organization: OrganizationV20;
    /**
     * 
     * @type {string}
     * @memberof FundingV20
     */
    visibility?: FundingV20VisibilityEnum;
}

/**
* @export
* @enum {string}
*/
export enum FundingV20TypeEnum {
    Grant = 'GRANT',
    Contract = 'CONTRACT',
    Award = 'AWARD',
    SalaryAward = 'SALARY_AWARD'
}/**
* @export
* @enum {string}
*/
export enum FundingV20VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function FundingV20FromJSON(json: any): FundingV20 {
    return FundingV20FromJSONTyped(json, false);
}

export function FundingV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV20FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV20FromJSON(json['source']),
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'type': json['type'],
        'organizationDefinedType': !exists(json, 'organization-defined-type') ? undefined : OrganizationDefinedFundingSubTypeV20FromJSON(json['organization-defined-type']),
        'title': FundingTitleV20FromJSON(json['title']),
        'shortDescription': !exists(json, 'short-description') ? undefined : json['short-description'],
        'amount': !exists(json, 'amount') ? undefined : AmountV20FromJSON(json['amount']),
        'url': !exists(json, 'url') ? undefined : UrlV20FromJSON(json['url']),
        'startDate': !exists(json, 'start-date') ? undefined : FuzzyDateV20FromJSON(json['start-date']),
        'endDate': !exists(json, 'end-date') ? undefined : FuzzyDateV20FromJSON(json['end-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV20FromJSON(json['external-ids']),
        'contributors': !exists(json, 'contributors') ? undefined : FundingContributorsV20FromJSON(json['contributors']),
        'organization': OrganizationV20FromJSON(json['organization']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function FundingV20ToJSON(value?: FundingV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV20ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'source': SourceV20ToJSON(value.source),
        'put-code': value.putCode,
        'path': value.path,
        'type': value.type,
        'organization-defined-type': OrganizationDefinedFundingSubTypeV20ToJSON(value.organizationDefinedType),
        'title': FundingTitleV20ToJSON(value.title),
        'short-description': value.shortDescription,
        'amount': AmountV20ToJSON(value.amount),
        'url': UrlV20ToJSON(value.url),
        'start-date': FuzzyDateV20ToJSON(value.startDate),
        'end-date': FuzzyDateV20ToJSON(value.endDate),
        'external-ids': ExternalIDsV20ToJSON(value.externalIds),
        'contributors': FundingContributorsV20ToJSON(value.contributors),
        'organization': OrganizationV20ToJSON(value.organization),
        'visibility': value.visibility,
    };
}


