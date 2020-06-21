/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonEyeColorEnumType } from "./PersonEyeColorEnum"
import { PersonGenderEnumType } from "./PersonGenderEnum"
import { PersonHairColorEnumType } from "./PersonHairColorEnum"
import { PersonSkinColorEnumType } from "./PersonSkinColorEnum"
import { RootStoreType } from "./index"


/**
 * PersonPreviousValuesBase
 * auto generated base class for the model PersonPreviousValuesModel.
 */
export const PersonPreviousValuesModelBase = ModelBase
  .named('PersonPreviousValues')
  .props({
    __typename: types.optional(types.literal("PersonPreviousValues"), "PersonPreviousValues"),
    birthYear: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    eyeColor: types.union(types.undefined, types.null, types.array(PersonEyeColorEnumType)),
    gender: types.union(types.undefined, types.null, PersonGenderEnumType),
    hairColor: types.union(types.undefined, types.null, types.array(PersonHairColorEnumType)),
    height: types.union(types.undefined, types.null, types.integer),
    id: types.identifier,
    isPublished: types.union(types.undefined, types.boolean),
    mass: types.union(types.undefined, types.null, types.number),
    name: types.union(types.undefined, types.string),
    skinColor: types.union(types.undefined, types.null, types.array(PersonSkinColorEnumType)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PersonPreviousValuesModelSelector extends QueryBuilder {
  get birthYear() { return this.__attr(`birthYear`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get eyeColor() { return this.__attr(`eyeColor`) }
  get gender() { return this.__attr(`gender`) }
  get hairColor() { return this.__attr(`hairColor`) }
  get height() { return this.__attr(`height`) }
  get id() { return this.__attr(`id`) }
  get isPublished() { return this.__attr(`isPublished`) }
  get mass() { return this.__attr(`mass`) }
  get name() { return this.__attr(`name`) }
  get skinColor() { return this.__attr(`skinColor`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromPersonPreviousValues() {
  return new PersonPreviousValuesModelSelector()
}

export const personPreviousValuesModelPrimitives = selectFromPersonPreviousValues().birthYear.createdAt.eyeColor.gender.hairColor.height.isPublished.mass.name.skinColor.updatedAt
