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
    DayV30Rc1,
    DayV30Rc1FromJSON,
    DayV30Rc1FromJSONTyped,
    DayV30Rc1ToJSON,
    MonthV30Rc1,
    MonthV30Rc1FromJSON,
    MonthV30Rc1FromJSONTyped,
    MonthV30Rc1ToJSON,
    YearV30Rc1,
    YearV30Rc1FromJSON,
    YearV30Rc1FromJSONTyped,
    YearV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface PublicationDateV30Rc1
 */
export interface PublicationDateV30Rc1 {
    /**
     * 
     * @type {YearV30Rc1}
     * @memberof PublicationDateV30Rc1
     */
    year: YearV30Rc1;
    /**
     * 
     * @type {MonthV30Rc1}
     * @memberof PublicationDateV30Rc1
     */
    month?: MonthV30Rc1;
    /**
     * 
     * @type {DayV30Rc1}
     * @memberof PublicationDateV30Rc1
     */
    day?: DayV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof PublicationDateV30Rc1
     */
    mediaType?: PublicationDateV30Rc1MediaTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum PublicationDateV30Rc1MediaTypeEnum {
    Print = 'PRINT',
    Online = 'ONLINE',
    Other = 'OTHER'
}

export function PublicationDateV30Rc1FromJSON(json: any): PublicationDateV30Rc1 {
    return PublicationDateV30Rc1FromJSONTyped(json, false);
}

export function PublicationDateV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicationDateV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'year': YearV30Rc1FromJSON(json['year']),
        'month': !exists(json, 'month') ? undefined : MonthV30Rc1FromJSON(json['month']),
        'day': !exists(json, 'day') ? undefined : DayV30Rc1FromJSON(json['day']),
        'mediaType': !exists(json, 'media-type') ? undefined : json['media-type'],
    };
}

export function PublicationDateV30Rc1ToJSON(value?: PublicationDateV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'year': YearV30Rc1ToJSON(value.year),
        'month': MonthV30Rc1ToJSON(value.month),
        'day': DayV30Rc1ToJSON(value.day),
        'media-type': value.mediaType,
    };
}


