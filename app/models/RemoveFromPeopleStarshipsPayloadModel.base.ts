/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { StarshipModelSelector } from "./StarshipModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  pilotsPerson: PersonModelType;
  starshipsStarship: StarshipModelType;
}

/**
 * RemoveFromPeopleStarshipsPayloadBase
 * auto generated base class for the model RemoveFromPeopleStarshipsPayloadModel.
 */
export const RemoveFromPeopleStarshipsPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('RemoveFromPeopleStarshipsPayload')
  .props({
    __typename: types.optional(types.literal("RemoveFromPeopleStarshipsPayload"), "RemoveFromPeopleStarshipsPayload"),
    pilotsPerson: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    starshipsStarship: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => StarshipModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RemoveFromPeopleStarshipsPayloadModelSelector extends QueryBuilder {
  pilotsPerson(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`pilotsPerson`, PersonModelSelector, builder) }
  starshipsStarship(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`starshipsStarship`, StarshipModelSelector, builder) }
}
export function selectFromRemoveFromPeopleStarshipsPayload() {
  return new RemoveFromPeopleStarshipsPayloadModelSelector()
}

export const removeFromPeopleStarshipsPayloadModelPrimitives = selectFromRemoveFromPeopleStarshipsPayload()
