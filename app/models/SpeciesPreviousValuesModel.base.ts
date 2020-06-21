/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SpeciesEyeColorEnumType } from "./SpeciesEyeColorEnum"
import { SpeciesHairColorEnumType } from "./SpeciesHairColorEnum"
import { SpeciesSkinColorEnumType } from "./SpeciesSkinColorEnum"
import { RootStoreType } from "./index"


/**
 * SpeciesPreviousValuesBase
 * auto generated base class for the model SpeciesPreviousValuesModel.
 */
export const SpeciesPreviousValuesModelBase = ModelBase
  .named('SpeciesPreviousValues')
  .props({
    __typename: types.optional(types.literal("SpeciesPreviousValues"), "SpeciesPreviousValues"),
    averageHeight: types.union(types.undefined, types.null, types.integer),
    averageLifespan: types.union(types.undefined, types.null, types.integer),
    classification: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    designation: types.union(types.undefined, types.null, types.string),
    eyeColor: types.union(types.undefined, types.null, types.array(SpeciesEyeColorEnumType)),
    hairColor: types.union(types.undefined, types.null, types.array(SpeciesHairColorEnumType)),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    language: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.string),
    skinColor: types.union(types.undefined, types.null, types.array(SpeciesSkinColorEnumType)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SpeciesPreviousValuesModelSelector extends QueryBuilder {
  get averageHeight() { return this.__attr(`averageHeight`) }
  get averageLifespan() { return this.__attr(`averageLifespan`) }
  get classification() { return this.__attr(`classification`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get designation() { return this.__attr(`designation`) }
  get eyeColor() { return this.__attr(`eyeColor`) }
  get hairColor() { return this.__attr(`hairColor`) }
  get id() { return this.__attr(`id`) }
  get isPublished() { return this.__attr(`isPublished`) }
  get language() { return this.__attr(`language`) }
  get name() { return this.__attr(`name`) }
  get skinColor() { return this.__attr(`skinColor`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromSpeciesPreviousValues() {
  return new SpeciesPreviousValuesModelSelector()
}

export const speciesPreviousValuesModelPrimitives = selectFromSpeciesPreviousValues().averageHeight.averageLifespan.classification.createdAt.designation.eyeColor.hairColor.isPublished.language.name.skinColor.updatedAt
