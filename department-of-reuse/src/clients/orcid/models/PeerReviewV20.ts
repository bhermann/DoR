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
    CreatedDateV20,
    CreatedDateV20FromJSON,
    CreatedDateV20FromJSONTyped,
    CreatedDateV20ToJSON,
    ExternalIDV20,
    ExternalIDV20FromJSON,
    ExternalIDV20FromJSONTyped,
    ExternalIDV20ToJSON,
    ExternalIDsV20,
    ExternalIDsV20FromJSON,
    ExternalIDsV20FromJSONTyped,
    ExternalIDsV20ToJSON,
    FuzzyDateV20,
    FuzzyDateV20FromJSON,
    FuzzyDateV20FromJSONTyped,
    FuzzyDateV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    OrganizationV20,
    OrganizationV20FromJSON,
    OrganizationV20FromJSONTyped,
    OrganizationV20ToJSON,
    SourceV20,
    SourceV20FromJSON,
    SourceV20FromJSONTyped,
    SourceV20ToJSON,
    TitleV20,
    TitleV20FromJSON,
    TitleV20FromJSONTyped,
    TitleV20ToJSON,
    UrlV20,
    UrlV20FromJSON,
    UrlV20FromJSONTyped,
    UrlV20ToJSON,
    WorkTitleV20,
    WorkTitleV20FromJSON,
    WorkTitleV20FromJSONTyped,
    WorkTitleV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface PeerReviewV20
 */
export interface PeerReviewV20 {
    /**
     * 
     * @type {CreatedDateV20}
     * @memberof PeerReviewV20
     */
    createdDate?: CreatedDateV20;
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof PeerReviewV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {SourceV20}
     * @memberof PeerReviewV20
     */
    source?: SourceV20;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV20
     */
    reviewerRole?: PeerReviewV20ReviewerRoleEnum;
    /**
     * 
     * @type {ExternalIDsV20}
     * @memberof PeerReviewV20
     */
    reviewIdentifiers?: ExternalIDsV20;
    /**
     * 
     * @type {UrlV20}
     * @memberof PeerReviewV20
     */
    reviewUrl?: UrlV20;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV20
     */
    reviewType?: PeerReviewV20ReviewTypeEnum;
    /**
     * 
     * @type {FuzzyDateV20}
     * @memberof PeerReviewV20
     */
    reviewCompletionDate?: FuzzyDateV20;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV20
     */
    reviewGroupId: string;
    /**
     * 
     * @type {ExternalIDV20}
     * @memberof PeerReviewV20
     */
    subjectExternalIdentifier?: ExternalIDV20;
    /**
     * 
     * @type {TitleV20}
     * @memberof PeerReviewV20
     */
    subjectContainerName?: TitleV20;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV20
     */
    subjectType?: PeerReviewV20SubjectTypeEnum;
    /**
     * 
     * @type {WorkTitleV20}
     * @memberof PeerReviewV20
     */
    subjectName?: WorkTitleV20;
    /**
     * 
     * @type {UrlV20}
     * @memberof PeerReviewV20
     */
    subjectUrl?: UrlV20;
    /**
     * 
     * @type {OrganizationV20}
     * @memberof PeerReviewV20
     */
    conveningOrganization: OrganizationV20;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV20
     */
    visibility?: PeerReviewV20VisibilityEnum;
    /**
     * 
     * @type {number}
     * @memberof PeerReviewV20
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV20
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum PeerReviewV20ReviewerRoleEnum {
    Reviewer = 'REVIEWER',
    Editor = 'EDITOR',
    Member = 'MEMBER',
    Chair = 'CHAIR',
    Organizer = 'ORGANIZER'
}/**
* @export
* @enum {string}
*/
export enum PeerReviewV20ReviewTypeEnum {
    Review = 'REVIEW',
    Evaluation = 'EVALUATION'
}/**
* @export
* @enum {string}
*/
export enum PeerReviewV20SubjectTypeEnum {
    ArtisticPerformance = 'ARTISTIC_PERFORMANCE',
    BookChapter = 'BOOK_CHAPTER',
    BookReview = 'BOOK_REVIEW',
    Book = 'BOOK',
    ConferenceAbstract = 'CONFERENCE_ABSTRACT',
    ConferencePaper = 'CONFERENCE_PAPER',
    ConferencePoster = 'CONFERENCE_POSTER',
    DataSet = 'DATA_SET',
    DictionaryEntry = 'DICTIONARY_ENTRY',
    Disclosure = 'DISCLOSURE',
    Dissertation = 'DISSERTATION',
    EditedBook = 'EDITED_BOOK',
    EncyclopediaEntry = 'ENCYCLOPEDIA_ENTRY',
    Invention = 'INVENTION',
    JournalArticle = 'JOURNAL_ARTICLE',
    JournalIssue = 'JOURNAL_ISSUE',
    LectureSpeech = 'LECTURE_SPEECH',
    License = 'LICENSE',
    MagazineArticle = 'MAGAZINE_ARTICLE',
    Manual = 'MANUAL',
    NewsletterArticle = 'NEWSLETTER_ARTICLE',
    NewspaperArticle = 'NEWSPAPER_ARTICLE',
    OnlineResource = 'ONLINE_RESOURCE',
    Other = 'OTHER',
    Patent = 'PATENT',
    RegisteredCopyright = 'REGISTERED_COPYRIGHT',
    Report = 'REPORT',
    ResearchTechnique = 'RESEARCH_TECHNIQUE',
    ResearchTool = 'RESEARCH_TOOL',
    SpinOffCompany = 'SPIN_OFF_COMPANY',
    StandardsAndPolicy = 'STANDARDS_AND_POLICY',
    SupervisedStudentPublication = 'SUPERVISED_STUDENT_PUBLICATION',
    TechnicalStandard = 'TECHNICAL_STANDARD',
    Test = 'TEST',
    Trademark = 'TRADEMARK',
    Translation = 'TRANSLATION',
    Website = 'WEBSITE',
    WorkingPaper = 'WORKING_PAPER',
    Undefined = 'UNDEFINED'
}/**
* @export
* @enum {string}
*/
export enum PeerReviewV20VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function PeerReviewV20FromJSON(json: any): PeerReviewV20 {
    return PeerReviewV20FromJSONTyped(json, false);
}

export function PeerReviewV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerReviewV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV20FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV20FromJSON(json['source']),
        'reviewerRole': !exists(json, 'reviewer-role') ? undefined : json['reviewer-role'],
        'reviewIdentifiers': !exists(json, 'review-identifiers') ? undefined : ExternalIDsV20FromJSON(json['review-identifiers']),
        'reviewUrl': !exists(json, 'review-url') ? undefined : UrlV20FromJSON(json['review-url']),
        'reviewType': !exists(json, 'review-type') ? undefined : json['review-type'],
        'reviewCompletionDate': !exists(json, 'review-completion-date') ? undefined : FuzzyDateV20FromJSON(json['review-completion-date']),
        'reviewGroupId': json['review-group-id'],
        'subjectExternalIdentifier': !exists(json, 'subject-external-identifier') ? undefined : ExternalIDV20FromJSON(json['subject-external-identifier']),
        'subjectContainerName': !exists(json, 'subject-container-name') ? undefined : TitleV20FromJSON(json['subject-container-name']),
        'subjectType': !exists(json, 'subject-type') ? undefined : json['subject-type'],
        'subjectName': !exists(json, 'subject-name') ? undefined : WorkTitleV20FromJSON(json['subject-name']),
        'subjectUrl': !exists(json, 'subject-url') ? undefined : UrlV20FromJSON(json['subject-url']),
        'conveningOrganization': OrganizationV20FromJSON(json['convening-organization']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function PeerReviewV20ToJSON(value?: PeerReviewV20 | null): any {
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
        'reviewer-role': value.reviewerRole,
        'review-identifiers': ExternalIDsV20ToJSON(value.reviewIdentifiers),
        'review-url': UrlV20ToJSON(value.reviewUrl),
        'review-type': value.reviewType,
        'review-completion-date': FuzzyDateV20ToJSON(value.reviewCompletionDate),
        'review-group-id': value.reviewGroupId,
        'subject-external-identifier': ExternalIDV20ToJSON(value.subjectExternalIdentifier),
        'subject-container-name': TitleV20ToJSON(value.subjectContainerName),
        'subject-type': value.subjectType,
        'subject-name': WorkTitleV20ToJSON(value.subjectName),
        'subject-url': UrlV20ToJSON(value.subjectUrl),
        'convening-organization': OrganizationV20ToJSON(value.conveningOrganization),
        'visibility': value.visibility,
        'put-code': value.putCode,
        'path': value.path,
    };
}


