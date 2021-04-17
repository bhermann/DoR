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
    TitleV20,
    TitleV20FromJSON,
    TitleV20FromJSONTyped,
    TitleV20ToJSON,
    TranslatedTitleV20,
    TranslatedTitleV20FromJSON,
    TranslatedTitleV20FromJSONTyped,
    TranslatedTitleV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingTitleV20
 */
export interface FundingTitleV20 {
    /**
     * 
     * @type {TitleV20}
     * @memberof FundingTitleV20
     */
    title?: TitleV20;
    /**
     * 
     * @type {TranslatedTitleV20}
     * @memberof FundingTitleV20
     */
    translatedTitle?: TranslatedTitleV20;
}

export function FundingTitleV20FromJSON(json: any): FundingTitleV20 {
    return FundingTitleV20FromJSONTyped(json, false);
}

export function FundingTitleV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingTitleV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : TitleV20FromJSON(json['title']),
        'translatedTitle': !exists(json, 'translated-title') ? undefined : TranslatedTitleV20FromJSON(json['translated-title']),
    };
}

export function FundingTitleV20ToJSON(value?: FundingTitleV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': TitleV20ToJSON(value.title),
        'translated-title': TranslatedTitleV20ToJSON(value.translatedTitle),
    };
}

