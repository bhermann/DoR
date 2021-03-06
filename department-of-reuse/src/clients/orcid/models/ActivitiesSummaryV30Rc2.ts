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
    DistinctionsSummaryV30Rc2,
    DistinctionsSummaryV30Rc2FromJSON,
    DistinctionsSummaryV30Rc2FromJSONTyped,
    DistinctionsSummaryV30Rc2ToJSON,
    EducationsSummaryV30Rc2,
    EducationsSummaryV30Rc2FromJSON,
    EducationsSummaryV30Rc2FromJSONTyped,
    EducationsSummaryV30Rc2ToJSON,
    EmploymentsSummaryV30Rc2,
    EmploymentsSummaryV30Rc2FromJSON,
    EmploymentsSummaryV30Rc2FromJSONTyped,
    EmploymentsSummaryV30Rc2ToJSON,
    FundingsV30Rc2,
    FundingsV30Rc2FromJSON,
    FundingsV30Rc2FromJSONTyped,
    FundingsV30Rc2ToJSON,
    InvitedPositionsV30Rc2,
    InvitedPositionsV30Rc2FromJSON,
    InvitedPositionsV30Rc2FromJSONTyped,
    InvitedPositionsV30Rc2ToJSON,
    LastModifiedDateV30Rc2,
    LastModifiedDateV30Rc2FromJSON,
    LastModifiedDateV30Rc2FromJSONTyped,
    LastModifiedDateV30Rc2ToJSON,
    MembershipsV30Rc2,
    MembershipsV30Rc2FromJSON,
    MembershipsV30Rc2FromJSONTyped,
    MembershipsV30Rc2ToJSON,
    PeerReviewsV30Rc2,
    PeerReviewsV30Rc2FromJSON,
    PeerReviewsV30Rc2FromJSONTyped,
    PeerReviewsV30Rc2ToJSON,
    QualificationsV30Rc2,
    QualificationsV30Rc2FromJSON,
    QualificationsV30Rc2FromJSONTyped,
    QualificationsV30Rc2ToJSON,
    ResearchResourcesV30Rc2,
    ResearchResourcesV30Rc2FromJSON,
    ResearchResourcesV30Rc2FromJSONTyped,
    ResearchResourcesV30Rc2ToJSON,
    ServicesV30Rc2,
    ServicesV30Rc2FromJSON,
    ServicesV30Rc2FromJSONTyped,
    ServicesV30Rc2ToJSON,
    WorksSummaryV30Rc2,
    WorksSummaryV30Rc2FromJSON,
    WorksSummaryV30Rc2FromJSONTyped,
    WorksSummaryV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ActivitiesSummaryV30Rc2
 */
export interface ActivitiesSummaryV30Rc2 {
    /**
     * 
     * @type {LastModifiedDateV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    lastModifiedDate?: LastModifiedDateV30Rc2;
    /**
     * 
     * @type {DistinctionsSummaryV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    distinctions?: DistinctionsSummaryV30Rc2;
    /**
     * 
     * @type {EducationsSummaryV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    educations?: EducationsSummaryV30Rc2;
    /**
     * 
     * @type {EmploymentsSummaryV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    employments?: EmploymentsSummaryV30Rc2;
    /**
     * 
     * @type {FundingsV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    fundings?: FundingsV30Rc2;
    /**
     * 
     * @type {InvitedPositionsV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    invitedPositions?: InvitedPositionsV30Rc2;
    /**
     * 
     * @type {MembershipsV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    memberships?: MembershipsV30Rc2;
    /**
     * 
     * @type {PeerReviewsV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    peerReviews?: PeerReviewsV30Rc2;
    /**
     * 
     * @type {QualificationsV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    qualifications?: QualificationsV30Rc2;
    /**
     * 
     * @type {ResearchResourcesV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    researchResources?: ResearchResourcesV30Rc2;
    /**
     * 
     * @type {ServicesV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    services?: ServicesV30Rc2;
    /**
     * 
     * @type {WorksSummaryV30Rc2}
     * @memberof ActivitiesSummaryV30Rc2
     */
    works?: WorksSummaryV30Rc2;
    /**
     * 
     * @type {string}
     * @memberof ActivitiesSummaryV30Rc2
     */
    path?: string;
}

export function ActivitiesSummaryV30Rc2FromJSON(json: any): ActivitiesSummaryV30Rc2 {
    return ActivitiesSummaryV30Rc2FromJSONTyped(json, false);
}

export function ActivitiesSummaryV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivitiesSummaryV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc2FromJSON(json['last-modified-date']),
        'distinctions': !exists(json, 'distinctions') ? undefined : DistinctionsSummaryV30Rc2FromJSON(json['distinctions']),
        'educations': !exists(json, 'educations') ? undefined : EducationsSummaryV30Rc2FromJSON(json['educations']),
        'employments': !exists(json, 'employments') ? undefined : EmploymentsSummaryV30Rc2FromJSON(json['employments']),
        'fundings': !exists(json, 'fundings') ? undefined : FundingsV30Rc2FromJSON(json['fundings']),
        'invitedPositions': !exists(json, 'invited-positions') ? undefined : InvitedPositionsV30Rc2FromJSON(json['invited-positions']),
        'memberships': !exists(json, 'memberships') ? undefined : MembershipsV30Rc2FromJSON(json['memberships']),
        'peerReviews': !exists(json, 'peer-reviews') ? undefined : PeerReviewsV30Rc2FromJSON(json['peer-reviews']),
        'qualifications': !exists(json, 'qualifications') ? undefined : QualificationsV30Rc2FromJSON(json['qualifications']),
        'researchResources': !exists(json, 'research-resources') ? undefined : ResearchResourcesV30Rc2FromJSON(json['research-resources']),
        'services': !exists(json, 'services') ? undefined : ServicesV30Rc2FromJSON(json['services']),
        'works': !exists(json, 'works') ? undefined : WorksSummaryV30Rc2FromJSON(json['works']),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function ActivitiesSummaryV30Rc2ToJSON(value?: ActivitiesSummaryV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc2ToJSON(value.lastModifiedDate),
        'distinctions': DistinctionsSummaryV30Rc2ToJSON(value.distinctions),
        'educations': EducationsSummaryV30Rc2ToJSON(value.educations),
        'employments': EmploymentsSummaryV30Rc2ToJSON(value.employments),
        'fundings': FundingsV30Rc2ToJSON(value.fundings),
        'invited-positions': InvitedPositionsV30Rc2ToJSON(value.invitedPositions),
        'memberships': MembershipsV30Rc2ToJSON(value.memberships),
        'peer-reviews': PeerReviewsV30Rc2ToJSON(value.peerReviews),
        'qualifications': QualificationsV30Rc2ToJSON(value.qualifications),
        'research-resources': ResearchResourcesV30Rc2ToJSON(value.researchResources),
        'services': ServicesV30Rc2ToJSON(value.services),
        'works': WorksSummaryV30Rc2ToJSON(value.works),
        'path': value.path,
    };
}


