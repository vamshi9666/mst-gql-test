/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ModelMutationType {
  CREATED="CREATED",
UPDATED="UPDATED",
DELETED="DELETED"
}

/**
* ModelMutationType
*/
export const ModelMutationTypeEnumType = types.enumeration("ModelMutationType", [
        "CREATED",
  "UPDATED",
  "DELETED",
      ])
