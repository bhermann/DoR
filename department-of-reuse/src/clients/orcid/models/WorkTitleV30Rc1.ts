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
    SubtitleV30Rc1,
    SubtitleV30Rc1FromJSON,
    SubtitleV30Rc1FromJSONTyped,
    SubtitleV30Rc1ToJSON,
    TitleV30Rc1,
    TitleV30Rc1FromJSON,
    TitleV30Rc1FromJSONTyped,
    TitleV30Rc1ToJSON,
    TranslatedTitleV30Rc1,
    TranslatedTitleV30Rc1FromJSON,
    TranslatedTitleV30Rc1FromJSONTyped,
    TranslatedTitleV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkTitleV30Rc1
 */
export interface WorkTitleV30Rc1 {
    /**
     * 
     * @type {TitleV30Rc1}
     * @memberof WorkTitleV30Rc1
     */
    title?: TitleV30Rc1;
    /**
     * 
     * @type {SubtitleV30Rc1}
     * @memberof WorkTitleV30Rc1
     */
    subtitle?: SubtitleV30Rc1;
    /**
     * 
     * @type {TranslatedTitleV30Rc1}
     * @memberof WorkTitleV30Rc1
     */
    translatedTitle?: TranslatedTitleV30Rc1;
}

export function WorkTitleV30Rc1FromJSON(json: any): WorkTitleV30Rc1 {
    return WorkTitleV30Rc1FromJSONTyped(json, false);
}

export function WorkTitleV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkTitleV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : TitleV30Rc1FromJSON(json['title']),
        'subtitle': !exists(json, 'subtitle') ? undefined : SubtitleV30Rc1FromJSON(json['subtitle']),
        'translatedTitle': !exists(json, 'translated-title') ? undefined : TranslatedTitleV30Rc1FromJSON(json['translated-title']),
    };
}

export function WorkTitleV30Rc1ToJSON(value?: WorkTitleV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': TitleV30Rc1ToJSON(value.title),
        'subtitle': SubtitleV30Rc1ToJSON(value.subtitle),
        'translated-title': TranslatedTitleV30Rc1ToJSON(value.translatedTitle),
    };
}


