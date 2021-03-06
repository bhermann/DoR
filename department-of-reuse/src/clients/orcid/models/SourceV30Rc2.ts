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
    SourceClientIdV30Rc2,
    SourceClientIdV30Rc2FromJSON,
    SourceClientIdV30Rc2FromJSONTyped,
    SourceClientIdV30Rc2ToJSON,
    SourceNameV30Rc2,
    SourceNameV30Rc2FromJSON,
    SourceNameV30Rc2FromJSONTyped,
    SourceNameV30Rc2ToJSON,
    SourceOrcidV30Rc2,
    SourceOrcidV30Rc2FromJSON,
    SourceOrcidV30Rc2FromJSONTyped,
    SourceOrcidV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface SourceV30Rc2
 */
export interface SourceV30Rc2 {
    /**
     * 
     * @type {SourceOrcidV30Rc2}
     * @memberof SourceV30Rc2
     */
    sourceOrcid?: SourceOrcidV30Rc2;
    /**
     * 
     * @type {SourceClientIdV30Rc2}
     * @memberof SourceV30Rc2
     */
    sourceClientId?: SourceClientIdV30Rc2;
    /**
     * 
     * @type {SourceNameV30Rc2}
     * @memberof SourceV30Rc2
     */
    sourceName?: SourceNameV30Rc2;
    /**
     * 
     * @type {SourceOrcidV30Rc2}
     * @memberof SourceV30Rc2
     */
    assertionOriginOrcid?: SourceOrcidV30Rc2;
    /**
     * 
     * @type {SourceClientIdV30Rc2}
     * @memberof SourceV30Rc2
     */
    assertionOriginClientId?: SourceClientIdV30Rc2;
    /**
     * 
     * @type {SourceNameV30Rc2}
     * @memberof SourceV30Rc2
     */
    assertionOriginName?: SourceNameV30Rc2;
}

export function SourceV30Rc2FromJSON(json: any): SourceV30Rc2 {
    return SourceV30Rc2FromJSONTyped(json, false);
}

export function SourceV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceOrcid': !exists(json, 'source-orcid') ? undefined : SourceOrcidV30Rc2FromJSON(json['source-orcid']),
        'sourceClientId': !exists(json, 'source-client-id') ? undefined : SourceClientIdV30Rc2FromJSON(json['source-client-id']),
        'sourceName': !exists(json, 'source-name') ? undefined : SourceNameV30Rc2FromJSON(json['source-name']),
        'assertionOriginOrcid': !exists(json, 'assertion-origin-orcid') ? undefined : SourceOrcidV30Rc2FromJSON(json['assertion-origin-orcid']),
        'assertionOriginClientId': !exists(json, 'assertion-origin-client-id') ? undefined : SourceClientIdV30Rc2FromJSON(json['assertion-origin-client-id']),
        'assertionOriginName': !exists(json, 'assertion-origin-name') ? undefined : SourceNameV30Rc2FromJSON(json['assertion-origin-name']),
    };
}

export function SourceV30Rc2ToJSON(value?: SourceV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source-orcid': SourceOrcidV30Rc2ToJSON(value.sourceOrcid),
        'source-client-id': SourceClientIdV30Rc2ToJSON(value.sourceClientId),
        'source-name': SourceNameV30Rc2ToJSON(value.sourceName),
        'assertion-origin-orcid': SourceOrcidV30Rc2ToJSON(value.assertionOriginOrcid),
        'assertion-origin-client-id': SourceClientIdV30Rc2ToJSON(value.assertionOriginClientId),
        'assertion-origin-name': SourceNameV30Rc2ToJSON(value.assertionOriginName),
    };
}


