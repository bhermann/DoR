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
    ExternalIDsV30,
    ExternalIDsV30FromJSON,
    ExternalIDsV30FromJSONTyped,
    ExternalIDsV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    PublicationDateV30,
    PublicationDateV30FromJSON,
    PublicationDateV30FromJSONTyped,
    PublicationDateV30ToJSON,
    SourceV30,
    SourceV30FromJSON,
    SourceV30FromJSONTyped,
    SourceV30ToJSON,
    TitleV30,
    TitleV30FromJSON,
    TitleV30FromJSONTyped,
    TitleV30ToJSON,
    UrlV30,
    UrlV30FromJSON,
    UrlV30FromJSONTyped,
    UrlV30ToJSON,
    WorkTitleV30,
    WorkTitleV30FromJSON,
    WorkTitleV30FromJSONTyped,
    WorkTitleV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkSummaryV30
 */
export interface WorkSummaryV30 {
    /**
     * 
     * @type {number}
     * @memberof WorkSummaryV30
     */
    putCode?: number;
    /**
     * 
     * @type {CreatedDateV30}
     * @memberof WorkSummaryV30
     */
    createdDate?: CreatedDateV30;
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof WorkSummaryV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {SourceV30}
     * @memberof WorkSummaryV30
     */
    source?: SourceV30;
    /**
     * 
     * @type {WorkTitleV30}
     * @memberof WorkSummaryV30
     */
    title?: WorkTitleV30;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof WorkSummaryV30
     */
    externalIds?: ExternalIDsV30;
    /**
     * 
     * @type {UrlV30}
     * @memberof WorkSummaryV30
     */
    url?: UrlV30;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30
     */
    type?: WorkSummaryV30TypeEnum;
    /**
     * 
     * @type {PublicationDateV30}
     * @memberof WorkSummaryV30
     */
    publicationDate?: PublicationDateV30;
    /**
     * 
     * @type {TitleV30}
     * @memberof WorkSummaryV30
     */
    journalTitle?: TitleV30;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30
     */
    visibility?: WorkSummaryV30VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30
     */
    displayIndex?: string;
}

/**
* @export
* @enum {string}
*/
export enum WorkSummaryV30TypeEnum {
    Annotation = 'ANNOTATION',
    ArtisticPerformance = 'ARTISTIC_PERFORMANCE',
    BookChapter = 'BOOK_CHAPTER',
    BookReview = 'BOOK_REVIEW',
    Book = 'BOOK',
    ConferenceAbstract = 'CONFERENCE_ABSTRACT',
    ConferencePaper = 'CONFERENCE_PAPER',
    ConferencePoster = 'CONFERENCE_POSTER',
    DataManagementPlan = 'DATA_MANAGEMENT_PLAN',
    DataSet = 'DATA_SET',
    DictionaryEntry = 'DICTIONARY_ENTRY',
    Disclosure = 'DISCLOSURE',
    DissertationThesis = 'DISSERTATION_THESIS',
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
    PhysicalObject = 'PHYSICAL_OBJECT',
    Preprint = 'PREPRINT',
    RegisteredCopyright = 'REGISTERED_COPYRIGHT',
    Report = 'REPORT',
    ResearchTechnique = 'RESEARCH_TECHNIQUE',
    ResearchTool = 'RESEARCH_TOOL',
    Software = 'SOFTWARE',
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
export enum WorkSummaryV30VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function WorkSummaryV30FromJSON(json: any): WorkSummaryV30 {
    return WorkSummaryV30FromJSONTyped(json, false);
}

export function WorkSummaryV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkSummaryV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30FromJSON(json['source']),
        'title': !exists(json, 'title') ? undefined : WorkTitleV30FromJSON(json['title']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30FromJSON(json['external-ids']),
        'url': !exists(json, 'url') ? undefined : UrlV30FromJSON(json['url']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'publicationDate': !exists(json, 'publication-date') ? undefined : PublicationDateV30FromJSON(json['publication-date']),
        'journalTitle': !exists(json, 'journal-title') ? undefined : TitleV30FromJSON(json['journal-title']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function WorkSummaryV30ToJSON(value?: WorkSummaryV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'put-code': value.putCode,
        'created-date': CreatedDateV30ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'source': SourceV30ToJSON(value.source),
        'title': WorkTitleV30ToJSON(value.title),
        'external-ids': ExternalIDsV30ToJSON(value.externalIds),
        'url': UrlV30ToJSON(value.url),
        'type': value.type,
        'publication-date': PublicationDateV30ToJSON(value.publicationDate),
        'journal-title': TitleV30ToJSON(value.journalTitle),
        'visibility': value.visibility,
        'path': value.path,
        'display-index': value.displayIndex,
    };
}


