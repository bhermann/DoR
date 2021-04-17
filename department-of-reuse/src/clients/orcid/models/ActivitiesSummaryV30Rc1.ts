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
    DistinctionsV30Rc1,
    DistinctionsV30Rc1FromJSON,
    DistinctionsV30Rc1FromJSONTyped,
    DistinctionsV30Rc1ToJSON,
    EducationsSummaryV30Rc1,
    EducationsSummaryV30Rc1FromJSON,
    EducationsSummaryV30Rc1FromJSONTyped,
    EducationsSummaryV30Rc1ToJSON,
    EmploymentsSummaryV30Rc1,
    EmploymentsSummaryV30Rc1FromJSON,
    EmploymentsSummaryV30Rc1FromJSONTyped,
    EmploymentsSummaryV30Rc1ToJSON,
    FundingsV30Rc1,
    FundingsV30Rc1FromJSON,
    FundingsV30Rc1FromJSONTyped,
    FundingsV30Rc1ToJSON,
    InvitedPositionsV30Rc1,
    InvitedPositionsV30Rc1FromJSON,
    InvitedPositionsV30Rc1FromJSONTyped,
    InvitedPositionsV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
    MembershipsV30Rc1,
    MembershipsV30Rc1FromJSON,
    MembershipsV30Rc1FromJSONTyped,
    MembershipsV30Rc1ToJSON,
    PeerReviewsV30Rc1,
    PeerReviewsV30Rc1FromJSON,
    PeerReviewsV30Rc1FromJSONTyped,
    PeerReviewsV30Rc1ToJSON,
    QualificationsV30Rc1,
    QualificationsV30Rc1FromJSON,
    QualificationsV30Rc1FromJSONTyped,
    QualificationsV30Rc1ToJSON,
    ResearchResourcesV30Rc1,
    ResearchResourcesV30Rc1FromJSON,
    ResearchResourcesV30Rc1FromJSONTyped,
    ResearchResourcesV30Rc1ToJSON,
    ServicesV30Rc1,
    ServicesV30Rc1FromJSON,
    ServicesV30Rc1FromJSONTyped,
    ServicesV30Rc1ToJSON,
    WorksSummaryV30Rc1,
    WorksSummaryV30Rc1FromJSON,
    WorksSummaryV30Rc1FromJSONTyped,
    WorksSummaryV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ActivitiesSummaryV30Rc1
 */
export interface ActivitiesSummaryV30Rc1 {
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {DistinctionsV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    distinctions?: DistinctionsV30Rc1;
    /**
     * 
     * @type {EducationsSummaryV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    educations?: EducationsSummaryV30Rc1;
    /**
     * 
     * @type {EmploymentsSummaryV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    employments?: EmploymentsSummaryV30Rc1;
    /**
     * 
     * @type {FundingsV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    fundings?: FundingsV30Rc1;
    /**
     * 
     * @type {InvitedPositionsV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    invitedPositions?: InvitedPositionsV30Rc1;
    /**
     * 
     * @type {MembershipsV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    memberships?: MembershipsV30Rc1;
    /**
     * 
     * @type {PeerReviewsV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    peerReviews?: PeerReviewsV30Rc1;
    /**
     * 
     * @type {QualificationsV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    qualifications?: QualificationsV30Rc1;
    /**
     * 
     * @type {ResearchResourcesV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    researchResources?: ResearchResourcesV30Rc1;
    /**
     * 
     * @type {ServicesV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    services?: ServicesV30Rc1;
    /**
     * 
     * @type {WorksSummaryV30Rc1}
     * @memberof ActivitiesSummaryV30Rc1
     */
    works?: WorksSummaryV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof ActivitiesSummaryV30Rc1
     */
    path?: string;
}

export function ActivitiesSummaryV30Rc1FromJSON(json: any): ActivitiesSummaryV30Rc1 {
    return ActivitiesSummaryV30Rc1FromJSONTyped(json, false);
}

export function ActivitiesSummaryV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivitiesSummaryV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'distinctions': !exists(json, 'distinctions') ? undefined : DistinctionsV30Rc1FromJSON(json['distinctions']),
        'educations': !exists(json, 'educations') ? undefined : EducationsSummaryV30Rc1FromJSON(json['educations']),
        'employments': !exists(json, 'employments') ? undefined : EmploymentsSummaryV30Rc1FromJSON(json['employments']),
        'fundings': !exists(json, 'fundings') ? undefined : FundingsV30Rc1FromJSON(json['fundings']),
        'invitedPositions': !exists(json, 'invited-positions') ? undefined : InvitedPositionsV30Rc1FromJSON(json['invited-positions']),
        'memberships': !exists(json, 'memberships') ? undefined : MembershipsV30Rc1FromJSON(json['memberships']),
        'peerReviews': !exists(json, 'peer-reviews') ? undefined : PeerReviewsV30Rc1FromJSON(json['peer-reviews']),
        'qualifications': !exists(json, 'qualifications') ? undefined : QualificationsV30Rc1FromJSON(json['qualifications']),
        'researchResources': !exists(json, 'research-resources') ? undefined : ResearchResourcesV30Rc1FromJSON(json['research-resources']),
        'services': !exists(json, 'services') ? undefined : ServicesV30Rc1FromJSON(json['services']),
        'works': !exists(json, 'works') ? undefined : WorksSummaryV30Rc1FromJSON(json['works']),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function ActivitiesSummaryV30Rc1ToJSON(value?: ActivitiesSummaryV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'distinctions': DistinctionsV30Rc1ToJSON(value.distinctions),
        'educations': EducationsSummaryV30Rc1ToJSON(value.educations),
        'employments': EmploymentsSummaryV30Rc1ToJSON(value.employments),
        'fundings': FundingsV30Rc1ToJSON(value.fundings),
        'invited-positions': InvitedPositionsV30Rc1ToJSON(value.invitedPositions),
        'memberships': MembershipsV30Rc1ToJSON(value.memberships),
        'peer-reviews': PeerReviewsV30Rc1ToJSON(value.peerReviews),
        'qualifications': QualificationsV30Rc1ToJSON(value.qualifications),
        'research-resources': ResearchResourcesV30Rc1ToJSON(value.researchResources),
        'services': ServicesV30Rc1ToJSON(value.services),
        'works': WorksSummaryV30Rc1ToJSON(value.works),
        'path': value.path,
    };
}

