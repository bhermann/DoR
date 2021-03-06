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
    CreatedDateV30,
    CreatedDateV30FromJSON,
    CreatedDateV30FromJSONTyped,
    CreatedDateV30ToJSON,
    ExternalIDV30,
    ExternalIDV30FromJSON,
    ExternalIDV30FromJSONTyped,
    ExternalIDV30ToJSON,
    ExternalIDsV30,
    ExternalIDsV30FromJSON,
    ExternalIDsV30FromJSONTyped,
    ExternalIDsV30ToJSON,
    FuzzyDateV30,
    FuzzyDateV30FromJSON,
    FuzzyDateV30FromJSONTyped,
    FuzzyDateV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    OrganizationV30,
    OrganizationV30FromJSON,
    OrganizationV30FromJSONTyped,
    OrganizationV30ToJSON,
    SourceV30,
    SourceV30FromJSON,
    SourceV30FromJSONTyped,
    SourceV30ToJSON,
    SubjectNameV30,
    SubjectNameV30FromJSON,
    SubjectNameV30FromJSONTyped,
    SubjectNameV30ToJSON,
    TitleV30,
    TitleV30FromJSON,
    TitleV30FromJSONTyped,
    TitleV30ToJSON,
    UrlV30,
    UrlV30FromJSON,
    UrlV30FromJSONTyped,
    UrlV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface PeerReviewV30
 */
export interface PeerReviewV30 {
    /**
     * 
     * @type {CreatedDateV30}
     * @memberof PeerReviewV30
     */
    createdDate?: CreatedDateV30;
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof PeerReviewV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {SourceV30}
     * @memberof PeerReviewV30
     */
    source?: SourceV30;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV30
     */
    reviewerRole?: PeerReviewV30ReviewerRoleEnum;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof PeerReviewV30
     */
    reviewIdentifiers?: ExternalIDsV30;
    /**
     * 
     * @type {UrlV30}
     * @memberof PeerReviewV30
     */
    reviewUrl?: UrlV30;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV30
     */
    reviewType?: PeerReviewV30ReviewTypeEnum;
    /**
     * 
     * @type {FuzzyDateV30}
     * @memberof PeerReviewV30
     */
    reviewCompletionDate?: FuzzyDateV30;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV30
     */
    reviewGroupId: string;
    /**
     * 
     * @type {ExternalIDV30}
     * @memberof PeerReviewV30
     */
    subjectExternalIdentifier?: ExternalIDV30;
    /**
     * 
     * @type {TitleV30}
     * @memberof PeerReviewV30
     */
    subjectContainerName?: TitleV30;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV30
     */
    subjectType?: PeerReviewV30SubjectTypeEnum;
    /**
     * 
     * @type {SubjectNameV30}
     * @memberof PeerReviewV30
     */
    subjectName?: SubjectNameV30;
    /**
     * 
     * @type {UrlV30}
     * @memberof PeerReviewV30
     */
    subjectUrl?: UrlV30;
    /**
     * 
     * @type {OrganizationV30}
     * @memberof PeerReviewV30
     */
    conveningOrganization?: OrganizationV30;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV30
     */
    visibility?: PeerReviewV30VisibilityEnum;
    /**
     * 
     * @type {number}
     * @memberof PeerReviewV30
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewV30
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum PeerReviewV30ReviewerRoleEnum {
    Reviewer = 'reviewer',
    Editor = 'editor',
    Member = 'member',
    Chair = 'chair',
    Organizer = 'organizer'
}/**
* @export
* @enum {string}
*/
export enum PeerReviewV30ReviewTypeEnum {
    Review = 'review',
    Evaluation = 'evaluation'
}/**
* @export
* @enum {string}
*/
export enum PeerReviewV30SubjectTypeEnum {
    ArtisticPerformance = 'artistic-performance',
    BookChapter = 'book-chapter',
    BookReview = 'book-review',
    Book = 'book',
    ConferenceAbstract = 'conference-abstract',
    ConferencePaper = 'conference-paper',
    ConferencePoster = 'conference-poster',
    DataSet = 'data-set',
    DictionaryEntry = 'dictionary-entry',
    Disclosure = 'disclosure',
    DissertationThesis = 'dissertation-thesis',
    EditedBook = 'edited-book',
    EncyclopediaEntry = 'encyclopedia-entry',
    Invention = 'invention',
    JournalArticle = 'journal-article',
    JournalIssue = 'journal-issue',
    LectureSpeech = 'lecture-speech',
    License = 'license',
    MagazineArticle = 'magazine-article',
    Manual = 'manual',
    NewsletterArticle = 'newsletter-article',
    NewspaperArticle = 'newspaper-article',
    OnlineResource = 'online-resource',
    Other = 'other',
    Patent = 'patent',
    RegisteredCopyright = 'registered-copyright',
    Report = 'report',
    ResearchTechnique = 'research-technique',
    ResearchTool = 'research-tool',
    Software = 'software',
    SpinOffCompany = 'spin-off-company',
    StandardsAndPolicy = 'standards-and-policy',
    SupervisedStudentPublication = 'supervised-student-publication',
    TechnicalStandard = 'technical-standard',
    Test = 'test',
    Trademark = 'trademark',
    Translation = 'translation',
    Website = 'website',
    WorkingPaper = 'working-paper',
    Grant = 'grant',
    Contract = 'contract',
    Award = 'award',
    SalaryAward = 'salary-award',
    ResearchResourceProposal = 'research-resource-proposal',
    Undefined = 'undefined'
}/**
* @export
* @enum {string}
*/
export enum PeerReviewV30VisibilityEnum {
    Limited = 'limited',
    RegisteredOnly = 'registered-only',
    Public = 'public'
}

export function PeerReviewV30FromJSON(json: any): PeerReviewV30 {
    return PeerReviewV30FromJSONTyped(json, false);
}

export function PeerReviewV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerReviewV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30FromJSON(json['source']),
        'reviewerRole': !exists(json, 'reviewer-role') ? undefined : json['reviewer-role'],
        'reviewIdentifiers': !exists(json, 'review-identifiers') ? undefined : ExternalIDsV30FromJSON(json['review-identifiers']),
        'reviewUrl': !exists(json, 'review-url') ? undefined : UrlV30FromJSON(json['review-url']),
        'reviewType': !exists(json, 'review-type') ? undefined : json['review-type'],
        'reviewCompletionDate': !exists(json, 'review-completion-date') ? undefined : FuzzyDateV30FromJSON(json['review-completion-date']),
        'reviewGroupId': json['review-group-id'],
        'subjectExternalIdentifier': !exists(json, 'subject-external-identifier') ? undefined : ExternalIDV30FromJSON(json['subject-external-identifier']),
        'subjectContainerName': !exists(json, 'subject-container-name') ? undefined : TitleV30FromJSON(json['subject-container-name']),
        'subjectType': !exists(json, 'subject-type') ? undefined : json['subject-type'],
        'subjectName': !exists(json, 'subject-name') ? undefined : SubjectNameV30FromJSON(json['subject-name']),
        'subjectUrl': !exists(json, 'subject-url') ? undefined : UrlV30FromJSON(json['subject-url']),
        'conveningOrganization': !exists(json, 'convening-organization') ? undefined : OrganizationV30FromJSON(json['convening-organization']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function PeerReviewV30ToJSON(value?: PeerReviewV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'source': SourceV30ToJSON(value.source),
        'reviewer-role': value.reviewerRole,
        'review-identifiers': ExternalIDsV30ToJSON(value.reviewIdentifiers),
        'review-url': UrlV30ToJSON(value.reviewUrl),
        'review-type': value.reviewType,
        'review-completion-date': FuzzyDateV30ToJSON(value.reviewCompletionDate),
        'review-group-id': value.reviewGroupId,
        'subject-external-identifier': ExternalIDV30ToJSON(value.subjectExternalIdentifier),
        'subject-container-name': TitleV30ToJSON(value.subjectContainerName),
        'subject-type': value.subjectType,
        'subject-name': SubjectNameV30ToJSON(value.subjectName),
        'subject-url': UrlV30ToJSON(value.subjectUrl),
        'convening-organization': OrganizationV30ToJSON(value.conveningOrganization),
        'visibility': value.visibility,
        'put-code': value.putCode,
        'path': value.path,
    };
}


