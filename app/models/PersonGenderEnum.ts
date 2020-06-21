/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PersonGender {
  UNKNOWN="UNKNOWN",
MALE="MALE",
FEMALE="FEMALE",
HERMAPHRODITE="HERMAPHRODITE"
}

/**
* PersonGender
*/
export const PersonGenderEnumType = types.enumeration("PersonGender", [
        "UNKNOWN",
  "MALE",
  "FEMALE",
  "HERMAPHRODITE",
      ])
