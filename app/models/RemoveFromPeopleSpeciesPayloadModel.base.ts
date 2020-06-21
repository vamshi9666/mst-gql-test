/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  peoplePerson: PersonModelType;
  speciesSpecies: SpeciesModelType;
}

/**
 * RemoveFromPeopleSpeciesPayloadBase
 * auto generated base class for the model RemoveFromPeopleSpeciesPayloadModel.
 */
export const RemoveFromPeopleSpeciesPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('RemoveFromPeopleSpeciesPayload')
  .props({
    __typename: types.optional(types.literal("RemoveFromPeopleSpeciesPayload"), "RemoveFromPeopleSpeciesPayload"),
    peoplePerson: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    speciesSpecies: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => SpeciesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RemoveFromPeopleSpeciesPayloadModelSelector extends QueryBuilder {
  peoplePerson(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`peoplePerson`, PersonModelSelector, builder) }
  speciesSpecies(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`speciesSpecies`, SpeciesModelSelector, builder) }
}
export function selectFromRemoveFromPeopleSpeciesPayload() {
  return new RemoveFromPeopleSpeciesPayloadModelSelector()
}

export const removeFromPeopleSpeciesPayloadModelPrimitives = selectFromRemoveFromPeopleSpeciesPayload()
